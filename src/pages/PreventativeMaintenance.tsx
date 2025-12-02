import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Shield, Calendar, ClipboardCheck, TrendingDown, Heart, Building } from 'lucide-react';

const PreventativeMaintenance = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Preventative Leak Maintenance Sydney - Stop Leaks Before They Start</title>
        <meta name="description" content="Proactive waterproofing maintenance for Sydney properties. Prevent costly leak damage with regular inspections and antimicrobial treatments. Save up to 70% on repairs. Call 0412 345 678" />
        <meta name="keywords" content="preventative maintenance Sydney, leak prevention Sydney, waterproofing maintenance, proactive leak repair Sydney, building maintenance Sydney, grout maintenance Sydney" />
        <link rel="canonical" href="https://yourdomain.com/preventative-maintenance" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 text-base px-4 py-2">Preventative Leak Maintenance Sydney</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Defend Your Property Against Leaks—Sydney's Preventative Maintenance Experts
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              Safeguard Your Investment with Regular Leak Prevention
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert leak prevention service and strata waterproofing maintenance plans. 
              Scheduled grout and seal checks for proactive leak protection Sydney-wide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678 Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Maintenance Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Persuasive Opening with NLP */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
              Don't Let Small Drips Become Major Disasters
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-10">
              Every major leak starts as a tiny crack. Every costly repair could have been prevented. 
              The difference? Regular professional maintenance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">💸</div>
                  <h3 className="font-bold mb-2 text-foreground">Costly Emergency Repairs</h3>
                  <p className="text-sm text-muted-foreground">Reactive repairs cost 5-10x more than preventative maintenance</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">⏰</div>
                  <h3 className="font-bold mb-2 text-foreground">Unexpected Disruption</h3>
                  <p className="text-sm text-muted-foreground">Emergency repairs interrupt your life and business operations</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">📉</div>
                  <h3 className="font-bold mb-2 text-foreground">Property Devaluation</h3>
                  <p className="text-sm text-muted-foreground">Water damage and mould reduce property value significantly</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg text-center border-l-4 border-primary">
              <p className="text-xl text-foreground mb-4 font-semibold italic">
                "Imagine never worrying about leaks—your property protected all year long."
              </p>
              <p className="text-muted-foreground text-lg">
                That's the peace of mind our preventative maintenance program delivers. No surprises. No stress. 
                Just continuous protection for your most valuable asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preventative Program Explanation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Comprehensive Leak Prevention Service—Before Problems Start
            </h2>
            <p className="text-lg text-muted-foreground">
              Our scheduled grout and seal checks catch issues early, saving you thousands in repair costs. 
              Custom preventative leak maintenance Sydney plans for homes and strata buildings.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What's Included in Our Preventative Maintenance Program
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Scheduled Inspections</h4>
                    <p className="text-muted-foreground">Quarterly professional assessments of all waterproofed areas—showers, bathrooms, balconies, and wet areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Early Leak Detection</h4>
                    <p className="text-muted-foreground">Advanced moisture testing and thermal imaging to identify problems before they become visible</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Routine Sealing & Grouting</h4>
                    <p className="text-muted-foreground">Proactive resealing of joints, grout restoration, and sealant replacement before deterioration occurs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Strata Waterproofing Maintenance</h4>
                    <p className="text-muted-foreground">Specialized programs for multi-unit buildings with coordinated scheduling and comprehensive reporting</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-primary/20 lg:sticky lg:top-6">
              <CardHeader className="text-center pb-4">
                <Badge variant="secondary" className="mx-auto mb-3 text-base">Most Popular</Badge>
                <CardTitle className="text-3xl mb-2">Annual Maintenance Program</CardTitle>
                <div className="text-4xl font-bold text-primary">$249<span className="text-xl text-muted-foreground">/Year</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">4 scheduled inspections per year</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Priority emergency service (24/7)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">15% discount on all repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Detailed inspection reports with photos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Minor sealing & grout touch-ups included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Extended warranty on all work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Reminder notifications before each visit</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">No lock-in contracts • Cancel anytime</p>
              </CardContent>
            </Card>
          </div>

          {/* Custom Plans */}
          <div className="bg-card p-8 rounded-lg border max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Custom Plans for Strata & Commercial Properties</h3>
            <p className="text-center text-muted-foreground mb-6">
              Multi-unit buildings and commercial properties require specialized care. We design custom maintenance schedules 
              based on your building's age, size, and specific needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10-50 Units</div>
                <p className="text-sm text-muted-foreground">Small strata complexes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50-200 Units</div>
                <p className="text-sm text-muted-foreground">Medium residential buildings</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+ Units</div>
                <p className="text-sm text-muted-foreground">Large commercial properties</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link to="/contact">
                <Button variant="outline" size="lg">Request Custom Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional & Logical Appeals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose Preventative Maintenance?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <TrendingDown className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-3 text-foreground">Save Money</h3>
                  <p className="text-muted-foreground">
                    Catch small issues before they become expensive emergencies. Our clients save an average of $3,000+ per year 
                    by preventing major leak damage.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-3 text-foreground">Reduce Stress</h3>
                  <p className="text-muted-foreground">
                    No more anxiety about hidden leaks or surprise repair bills. Sleep soundly knowing your property is 
                    professionally monitored and maintained.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-3 text-foreground">Prolong Surface Life</h3>
                  <p className="text-muted-foreground">
                    Regular maintenance extends the lifespan of your waterproofing, tiles, and grout by 2-3x. 
                    Protect your investment for decades.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Picture Your Home's Surfaces Always Dry and Secure</h3>
              <p className="text-muted-foreground text-lg mb-6 text-center">
                Imagine walking through your home with complete confidence. No worrying when it rains. 
                No checking for damp spots. No wondering if disaster is lurking behind your walls.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">For Homeowners</h4>
                    <p className="text-sm text-muted-foreground">Your family's health protected from mould. Your home value preserved. Your mind at ease.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">For Strata Managers</h4>
                    <p className="text-sm text-muted-foreground">Fewer complaints. Reduced liability. Happier residents. Better committee reports.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">For Property Investors</h4>
                    <p className="text-sm text-muted-foreground">Tenants stay longer. Minimal vacancy periods. Asset appreciation protected.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">For Commercial Owners</h4>
                    <p className="text-sm text-muted-foreground">No business interruption. Compliance maintained. Professional image upheld.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              Proven Results from Our Preventative Maintenance Clients
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Certified tactics, regular reporting, and client success stories that speak for themselves
            </p>

            {/* Trust Features */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <ClipboardCheck className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Detailed Reporting</h3>
                  <p className="text-sm text-muted-foreground">Photo documentation and written reports after every visit</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Certified Technicians</h3>
                  <p className="text-sm text-muted-foreground">Licensed waterproofing professionals with ongoing training</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">We work around your schedule—never disruptive</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">100% Satisfaction</h3>
                  <p className="text-sm text-muted-foreground">98% client retention rate year over year</p>
                </CardContent>
              </Card>
            </div>

            {/* Client Success Stories */}
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">Client Success Stories</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "No leaks in over 3 years thanks to regular maintenance! The quarterly inspections caught two potential problems 
                      before they became serious. Worth every penny for the peace of mind."
                    </p>
                    <p className="font-bold text-foreground">— Lisa T., Chatswood</p>
                    <p className="text-xs text-muted-foreground">Homeowner, 3-year program member</p>
                  </CardContent>
                </Card>
                <Card className="border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "As a strata manager for 85 units, this program has been a game-changer. Proactive maintenance means fewer emergency 
                      calls and happier owners. The reporting is professional and thorough."
                    </p>
                    <p className="font-bold text-foreground">— James K., North Sydney</p>
                    <p className="text-xs text-muted-foreground">Strata Manager, 2-year program member</p>
                  </CardContent>
                </Card>
                <Card className="border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "Their maintenance program saved us $15,000 last year. They identified failing grout before it caused major water damage. 
                      The small investment in prevention pays for itself many times over."
                    </p>
                    <p className="font-bold text-foreground">— Rebecca M., Mosman</p>
                    <p className="text-xs text-muted-foreground">Property Investor, 4-year program member</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Active Program Members</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$3,200</div>
                <p className="text-muted-foreground">Average Annual Savings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                <p className="text-muted-foreground">Major Leak Incidents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Stay Leak-Free—Contact Us for Preventative Maintenance Plans in Sydney
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 500+ Sydney property owners who never worry about leaks. Start protecting your investment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678 Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Program Brochure
              </Button>
            </div>
            <p className="text-sm opacity-75 mb-4">
              ✓ No lock-in contracts &nbsp;|&nbsp; ✓ First inspection free for new members &nbsp;|&nbsp; ✓ Cancel anytime
            </p>
            <div className="bg-primary-foreground/10 p-6 rounded-lg inline-block">
              <p className="text-lg font-semibold mb-2">Limited Time Offer:</p>
              <p className="opacity-90">Sign up this month and receive your first inspection FREE (valued at $95)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Rich Footer Content */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Preventative Leak Maintenance Sydney - Comprehensive Coverage
            </h3>
            <p className="text-muted-foreground mb-4">
              Professional leak prevention service across all Sydney regions. Strata waterproofing maintenance, 
              scheduled grout and seal checks, and proactive leak protection Sydney for residential and commercial properties. 
              Our preventative maintenance programs cover showers, bathrooms, balconies, wet areas, and all waterproofed surfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span>Preventative Maintenance</span> • <span>Leak Prevention</span> • <span>Strata Maintenance</span> • 
              <span>Regular Inspections</span> • <span>Grout Sealing</span> • <span>Early Detection</span> • 
              <span>Property Protection</span> • <span>Sydney-Wide Service</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreventativeMaintenance;
