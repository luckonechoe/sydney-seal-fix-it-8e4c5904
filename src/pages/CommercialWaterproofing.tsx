
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Building2, Shield, FileCheck, Clock } from 'lucide-react';

const CommercialWaterproofing = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Commercial Waterproofing Sydney - Strata & Property Management Services</title>
        <meta name="description" content="Expert commercial waterproofing for Sydney strata and property managers. Multi-unit buildings, shopping centers, offices. 5-year warranty, minimal disruption. Free quote - call 0412 345 678" />
        <meta name="keywords" content="commercial waterproofing Sydney, strata waterproofing Sydney, property management waterproofing, multi-unit building repairs Sydney, commercial leak repair Sydney, building maintenance Sydney" />
        <link rel="canonical" href="https://yourdomain.com/commercial-waterproofing" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 text-base px-4 py-2">Commercial Waterproofing Sydney</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Trusted by Sydney's Top Strata & Property Managers
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              Imagine the peace of mind knowing your entire portfolio is protected from costly water damage, year after year.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              Experience the confidence of seamless compliance, minimum disruption, and long-lasting results with Sydney's 
              most trusted strata waterproofing experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678 Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Request Commercial Quote
              </Button>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg inline-block">
              <p className="text-foreground font-semibold text-lg mb-2">
                Over 200 Successful Commercial Projects Completed
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span>✓ High-Rise Buildings</span>
                <span>✓ Strata Complexes</span>
                <span>✓ Commercial Properties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points for Commercial Clients */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
              We Understand the Stress—and Financial Impact—of Emergency Leak Repairs
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Don't let hidden water damage compromise your investments. Every day of delay increases your liability exposure 
              and repair costs exponentially.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-destructive/30">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Insurance Claims & Liability</h3>
                  <p className="text-muted-foreground">
                    Water damage claims average $15,000-$50,000 per incident. Your premiums increase. Your reputation suffers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-destructive/30">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🏢</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Tenant Complaints & Vacancies</h3>
                  <p className="text-muted-foreground">
                    Leak problems drive tenants away. Empty units mean lost revenue while emergency repairs cost 3-5x more.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-destructive/30">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">⚠️</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Compliance & Safety Risks</h3>
                  <p className="text-muted-foreground">
                    Non-compliant waterproofing creates legal liability. Structural damage threatens occupant safety and property value.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg border-l-4 border-primary text-center">
              <p className="text-xl text-foreground mb-4 font-semibold italic">
                "Picture every building you manage staying leak-free, preserving your reputation and saving thousands in repairs."
              </p>
              <p className="text-muted-foreground text-lg">
                That's what we deliver. At Sydney's leading commercial waterproofing company, we partner with you to ensure 
                clear communication, tailored solutions, and complete peace of mind for your unique property portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Unique Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Commercial Waterproofing Solutions—Easy Implementation, Maximum Protection
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven process combines cutting-edge silver-ion technology with minimal disruption scheduling. 
                Visualize seamless installation, compliance documentation, and decades of protection.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Commercial Waterproofing Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Comprehensive Site Assessment</h4>
                      <p className="text-muted-foreground">
                        We conduct thorough inspections using thermal imaging and moisture detection across your entire property—
                        identifying current issues and potential future risks before they become emergencies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Custom Solution Design</h4>
                      <p className="text-muted-foreground">
                        Tailored waterproofing plans for high-rise buildings, strata complexes, and commercial portfolios. 
                        We adapt to your building's unique challenges, schedule, and budget requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Minimal Disruption Installation</h4>
                      <p className="text-muted-foreground">
                        Strategic scheduling ensures tenant comfort and business continuity. Most projects completed outside 
                        peak hours or in stages—your operations continue smoothly throughout.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Full Compliance Documentation</h4>
                      <p className="text-muted-foreground">
                        Complete certification to Australian Standards AS 3740. Detailed reports, warranties, and documentation 
                        for strata records, insurance, and council requirements—fully compliant, zero risk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Why Property Managers Choose Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Fully Insured & Licensed</p>
                          <p className="text-sm text-muted-foreground">$20M public liability • Professional indemnity • WorkCover compliance</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">15+ Years Commercial Experience</p>
                          <p className="text-sm text-muted-foreground">Specialized expertise in high-rise and strata waterproofing</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">5-Year Warranty Coverage</p>
                          <p className="text-sm text-muted-foreground">Comprehensive protection on all materials and workmanship</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Silver-Ion Antimicrobial Technology</p>
                          <p className="text-sm text-muted-foreground">Prevent mould growth permanently—healthier buildings, fewer complaints</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">Transparent Communication</p>
                          <p className="text-sm text-muted-foreground">Dedicated project manager • Regular updates • Clear reporting</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                  <h4 className="font-bold text-foreground mb-3 text-lg">Specialized Services Include:</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span>Balcony waterproofing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span>Bathroom restoration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span>Roof leak repairs</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span>Car park sealing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span>Facade protection</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span>Wet area compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Social Proof */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              See What Sydney's Leading Property Professionals Say
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Real results from strata managers, property managers, and real estate professionals across Sydney
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "We've used them for waterproofing across 12 strata buildings—over 240 units. Not a single leak complaint in 4 years. 
                    Their commercial waterproofing Sydney team is professional, compliant, and they actually care about minimizing tenant disruption. 
                    Couldn't recommend them more highly."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">— Andrew Chen</p>
                    <p className="text-sm text-muted-foreground">Senior Strata Manager, North Shore Property Group</p>
                    <p className="text-xs text-muted-foreground mt-1">Managing 12 complexes, 240+ units</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "As a real estate portfolio manager, I need contractors I can trust completely. Their leak prevention work on our Eastern Suburbs 
                    properties has been flawless. The documentation is perfect for our compliance audits, and their silver-ion technology means 
                    we're not dealing with mould issues anymore."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">— Michelle Roberts</p>
                    <p className="text-sm text-muted-foreground">Portfolio Manager, Prestige Property Group</p>
                    <p className="text-xs text-muted-foreground mt-1">42 commercial properties managed</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "Their waterproofing for high-rise buildings Sydney service saved our 28-story development. Major balcony leaks were causing structural 
                    concerns and insurance nightmares. They completed the entire building in 6 weeks with zero complaints from residents. 
                    Exceptional project management."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">— David Kumar</p>
                    <p className="text-sm text-muted-foreground">Building Manager, CBD Commercial Tower</p>
                    <p className="text-xs text-muted-foreground mt-1">28-story, 156-unit building</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">Trusted by Sydney's Property Industry</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <p className="text-muted-foreground">Commercial Projects</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                  <p className="text-muted-foreground">Units Waterproofed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">AS 3740 Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Commercial Clients Trust Us
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Fully Insured</h3>
                  <p className="text-sm text-muted-foreground">$20M public liability coverage</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">AS 3740 Certified</h3>
                  <p className="text-sm text-muted-foreground">Full compliance documentation</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Licensed Experts</h3>
                  <p className="text-sm text-muted-foreground">Specialized commercial team</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">On-Time Delivery</h3>
                  <p className="text-sm text-muted-foreground">98% projects on schedule</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strong Commercial CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Secure Your Next Project and Avoid Regret—Book Your Waterproofing Assessment Today
            </h2>
            <p className="text-xl mb-4 opacity-90">
              Act now to lock in long-term protection and compliance. Every day of delay increases your liability exposure.
            </p>
            <p className="text-lg mb-8 opacity-80">
              Fully insured, certified, and compliant with Australian Standards—no risk, full accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678 Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request Commercial Quote
              </Button>
            </div>
            <div className="bg-primary-foreground/10 p-6 rounded-lg inline-block">
              <p className="text-sm opacity-90 mb-3">
                ✓ Free site assessment for commercial properties &nbsp;|&nbsp; ✓ Same-day response &nbsp;|&nbsp; ✓ Detailed compliance documentation
              </p>
              <p className="font-semibold text-lg">
                Limited Availability: Only 3 major projects accepted per month to ensure quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Commercial Waterproofing Sydney - Strata & Property Management Solutions
            </h3>
            <p className="text-muted-foreground mb-4">
              Professional commercial waterproofing services for strata managers, property managers, real estate professionals, 
              and commercial organizations. Expert waterproofing for high-rise buildings Sydney, strata complexes, and commercial 
              portfolios. Real estate leak prevention Sydney specialists with full AS 3740 compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span>Strata Waterproofing</span> • <span>High-Rise Buildings</span> • <span>Commercial Properties</span> • 
              <span>Property Management</span> • <span>Real Estate Services</span> • <span>AS 3740 Compliant</span> • 
              <span>Leak Prevention</span> • <span>Portfolio Protection</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialWaterproofing;
