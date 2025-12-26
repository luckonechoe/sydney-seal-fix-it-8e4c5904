
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Clock, Upload, X } from 'lucide-react';
import { useFormTracking } from '../hooks/useAnalytics';
import { useState } from 'react';

const Contact = () => {
  const { trackForm } = useFormTracking();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackForm('contact_form', { type: 'quote-request' });
    console.log('Uploaded files:', uploadedFiles);
    setUploadedFiles([]);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Fix Your Leak?
          </h2>
          <p className="text-xl text-muted-foreground">
            Contact us today for fast, professional service
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white/50 p-4 rounded-lg">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">0421 043 444</p>
                  <p className="text-sm text-muted-foreground">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-4 rounded-lg">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">info@sydneysealgrout.com.au</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-4 rounded-lg">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Service Area</h4>
                  <p className="text-muted-foreground">Greater Sydney Area</p>
                  <p className="text-sm text-muted-foreground">Mobile service - we come to you</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 7am - 6pm</p>
                  <p className="text-muted-foreground">Sat - Sun: 8am - 4pm</p>
                  <p className="text-sm text-muted-foreground">Emergency callouts available</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-4 sm:p-6 lg:p-8 bg-card shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 sm:mb-6 text-center">Get Your Free Assessment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="touch-manipulation min-h-[48px] text-base"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="touch-manipulation min-h-[48px] text-base"
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="touch-manipulation min-h-[48px] text-base"
              />
              <textarea
                placeholder="Describe your leak or restoration needs..."
                rows={4}
                className="w-full px-3 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent touch-manipulation text-base resize-none"
              ></textarea>
              
              {/* File Upload Section */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-card-foreground">
                  Upload Photos or Videos (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-input border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">Photos: PNG, JPG, GIF (MAX. 10MB)</p>
                      <p className="text-xs text-muted-foreground">Videos: MP4, MOV, AVI (MAX. 50MB)</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
                
                {/* Display uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-card-foreground">Uploaded files:</p>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                        <span className="text-sm text-card-foreground truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Button 
                type="submit"
                className="w-full text-base sm:text-lg py-3 sm:py-4 touch-manipulation min-h-[48px] font-semibold"
              >
                Get Free Assessment
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
