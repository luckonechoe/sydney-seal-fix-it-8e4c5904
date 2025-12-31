import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Loader2, LogOut, RefreshCw, Mail, Phone, Calendar, MessageSquare, Briefcase, AlertCircle, Radio } from 'lucide-react';
import { format } from 'date-fns';

interface QuoteRequest {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string | null;
  message: string | null;
  created_at: string;
}

const Admin = () => {
  const { user, loading: authLoading, isAdmin, signOut } = useAuth();
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchQuoteRequests();

      // Set up real-time subscription
      const channel = supabase
        .channel('quote-requests-realtime')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'quote_requests'
          },
          (payload) => {
            const newRequest = payload.new as QuoteRequest;
            setQuoteRequests((prev) => [newRequest, ...prev]);
            toast({
              title: "New Quote Request!",
              description: `${newRequest.name} just submitted a quote request.`,
            });
          }
        )
        .on(
          'postgres_changes',
          {
            event: 'DELETE',
            schema: 'public',
            table: 'quote_requests'
          },
          (payload) => {
            const deletedId = payload.old.id;
            setQuoteRequests((prev) => prev.filter((r) => r.id !== deletedId));
          }
        )
        .subscribe((status) => {
          setIsLive(status === 'SUBSCRIBED');
        });

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user, isAdmin, toast]);

  const fetchQuoteRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        if (import.meta.env.DEV) {
          console.error('Error fetching quote requests:', error);
        }
        toast({
          title: "Error",
          description: "Failed to load quote requests. You may not have admin access.",
          variant: "destructive",
        });
        return;
      }

      setQuoteRequests(data || []);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error fetching quote requests:', error);
      }
      toast({
        title: "Error",
        description: "Failed to load quote requests.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchQuoteRequests();
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
            </div>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have admin access. Please contact the administrator to request access.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Logged in as: {user.email}
            </p>
            <Button onClick={handleSignOut} variant="outline" className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            {isLive && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Radio className="h-3 w-3 text-green-500 animate-pulse" />
                Live
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRefresh}
              disabled={refreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Quote Requests
                </CardTitle>
                <CardDescription>
                  {quoteRequests.length} {quoteRequests.length === 1 ? 'request' : 'requests'} submitted
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {quoteRequests.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No quote requests yet</h3>
                <p className="text-muted-foreground">
                  Quote requests submitted through the website will appear here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quoteRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {format(new Date(request.created_at), 'dd MMM yyyy')}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {format(new Date(request.created_at), 'HH:mm')}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="font-medium">{request.name}</span>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Phone className="h-3 w-3 text-muted-foreground" />
                              <a 
                                href={`tel:${request.phone}`} 
                                className="text-sm text-primary hover:underline"
                              >
                                {request.phone}
                              </a>
                            </div>
                            {request.email && (
                              <div className="flex items-center gap-2">
                                <Mail className="h-3 w-3 text-muted-foreground" />
                                <a 
                                  href={`mailto:${request.email}`} 
                                  className="text-sm text-primary hover:underline"
                                >
                                  {request.email}
                                </a>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {request.service ? (
                            <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                              <Briefcase className="h-3 w-3" />
                              {request.service}
                            </Badge>
                          ) : (
                            <span className="text-muted-foreground text-sm">Not specified</span>
                          )}
                        </TableCell>
                        <TableCell className="max-w-xs">
                          {request.message ? (
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {request.message}
                            </p>
                          ) : (
                            <span className="text-muted-foreground text-sm italic">No message</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
