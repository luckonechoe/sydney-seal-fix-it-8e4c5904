import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Users, 
  ChevronDown, 
  ChevronUp,
  Activity,
  Target,
  MousePointer
} from 'lucide-react';
import AnalyticsDashboard from './AnalyticsDashboard';

const AnalyticsWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          onClick={() => setIsVisible(true)}
          size="sm"
          className="rounded-full shadow-lg"
        >
          <BarChart3 className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Floating Analytics Widget */}
      <div className="fixed bottom-4 right-4 z-40">
        <Card className="w-80 shadow-lg border-primary/20">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm">Live Analytics</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                  Live
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronUp className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVisible(false)}
                >
                  ×
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="text-center p-2 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                  <Eye className="h-3 w-3" />
                  Page Views
                </div>
                <div className="text-lg font-bold">
                  {parseInt(sessionStorage.getItem('page_views') || '0')}
                </div>
              </div>
              
              <div className="text-center p-2 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                  <MousePointer className="h-3 w-3" />
                  Interactions
                </div>
                <div className="text-lg font-bold">
                  {parseInt(sessionStorage.getItem('interaction_count') || '0')}
                </div>
              </div>
            </div>

            <Separator className="my-3" />

            <div className="text-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(true)}
                className="w-full"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                View Full Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Full Dashboard Overlay */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 max-h-screen overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
                <p className="text-muted-foreground">
                  Real-time insights into user behavior and conversions
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsExpanded(false)}
              >
                Close Dashboard
              </Button>
            </div>
            
            <AnalyticsDashboard />
          </div>
        </div>
      )}
    </>
  );
};

export default AnalyticsWidget;