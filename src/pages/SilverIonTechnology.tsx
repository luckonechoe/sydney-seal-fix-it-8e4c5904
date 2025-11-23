
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Clock, Microscope, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const SilverIonTechnology = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Antimicrobial Protection",
      description: "Silver ions permanently kill bacteria, viruses, and germs on contact, providing continuous protection for the lifetime of the product."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Mould Resistance",
      description: "Prevents mould and mildew growth permanently, maintaining a healthy environment in bathrooms, showers, and wet areas."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Lifetime Protection",
      description: "Unlike traditional treatments that wear off, silver-ion protection is embedded into materials and never needs reapplication."
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Scientifically Proven",
      description: "Backed by extensive research and independent laboratory testing, proven effective against 99.9% of harmful microorganisms."
    }
  ];

  const applications = [
    "Stainproof grout installation",
    "Epoxy resealing services", 
    "Tile and grout sealing",
    "Bathroom restoration",
    "Kitchen splashback sealing",
    "Shower regrouting",
    "Balcony waterproofing",
    "Commercial wet areas"
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Antimicrobial Waterproofing Sydney - Advanced Mould-Resistant Protection</title>
        <meta name="description" content="Revolutionary antimicrobial waterproofing technology for Sydney homes and businesses. Lifetime mould-resistant protection for bathrooms, kitchens & wet areas. 99.9% bacteria elimination. Free quote." />
        <meta name="keywords" content="antimicrobial waterproofing Sydney, mould-resistant grout Sydney, antibacterial sealing, bathroom antimicrobial protection, kitchen waterproofing Sydney, mould prevention Sydney" />
        <link rel="canonical" href="https://yourdomain.com/antimicrobial-technology" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-4 py-2 bg-primary/10">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Revolutionary Technology
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Advanced Antimicrobial Protection Technology
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              Revolutionary mould-resistant protection that lasts a lifetime
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              Our advanced antimicrobial protection technology provides permanent protection against bacteria, mould, and harmful microorganisms—
              integrated directly into grout and sealant materials for lifelong hygiene and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Your Quote Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/commercial-waterproofing">Commercial Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How Advanced Antimicrobial Technology Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced antimicrobial technology integrates protective agents directly into grout and sealant materials, 
              providing permanent mould-resistant protection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <Card className="text-center border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🧬</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Antimicrobial Integration</h3>
                <p className="text-muted-foreground">
                  Antimicrobial protection agents are permanently embedded into the grout and sealant matrix during manufacturing—
                  becoming an integral part of the material itself
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Continuous Protection</h3>
                <p className="text-muted-foreground">
                  Antimicrobial protection is released continuously to the surface, eliminating bacteria and microorganisms on contact—
                  24/7 mould-resistant protection that never stops
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Permanent Protection</h3>
                <p className="text-muted-foreground">
                  Protection lasts for the lifetime of the product without degradation or the need for reapplication—
                  no maintenance required
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Key Benefits of Advanced Antimicrobial Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why advanced antimicrobial protection technology is the future of mould-resistant waterproofing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-primary/10">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Where We Use Advanced Antimicrobial Technology
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive mould-resistant applications across residential and commercial waterproofing projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3 bg-muted/30 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-foreground font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Evidence */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Scientifically Proven Results
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Independent laboratory testing confirms the effectiveness of our antimicrobial protection technology against a wide range of harmful microorganisms 
              including E. coli, Staphylococcus, and various mould species
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-5xl font-bold text-primary mb-3">99.9%</div>
                <p className="text-foreground font-semibold mb-2">Bacterial Reduction</p>
                <p className="text-sm text-muted-foreground">Eliminates harmful bacteria on contact</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-5xl font-bold text-primary mb-3">100%</div>
                <p className="text-foreground font-semibold mb-2">Mould Prevention</p>
                <p className="text-sm text-muted-foreground">Complete protection against mould growth</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="text-5xl font-bold text-primary mb-3">Lifetime</div>
                <p className="text-foreground font-semibold mb-2">Protection Guarantee</p>
                <p className="text-sm text-muted-foreground">Permanent antimicrobial protection</p>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">Certified & Tested</h3>
              <p className="text-muted-foreground">
                Our antimicrobial protection technology has been independently tested and certified by leading Australian laboratories. 
                All materials meet or exceed Australian Standards for waterproofing and mould-resistant protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Silver-Ion */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose Advanced Antimicrobial Protection Over Traditional Methods?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Advanced Antimicrobial Protection</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Permanent protection—never wears off</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Embedded in material—can't be scrubbed away</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>99.9% effective against microorganisms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>No reapplication ever needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Safe, non-toxic, environmentally friendly</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">❌</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Traditional Methods</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">✗</span>
                      <span>Temporary protection—wears off over time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">✗</span>
                      <span>Surface coating only—easily removed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">✗</span>
                      <span>Limited effectiveness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">✗</span>
                      <span>Requires regular reapplication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">✗</span>
                      <span>May contain harsh chemicals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Experience the Future of Antimicrobial Protection
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get a free quote for your advanced antimicrobial waterproofing project. 
              Lifetime mould-resistant protection for your home or commercial property starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/">View All Services</Link>
              </Button>
            </div>
            <p className="text-sm opacity-75">
              ✓ Free consultation &nbsp;|&nbsp; ✓ Lifetime warranty &nbsp;|&nbsp; ✓ Australian Standards certified
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SilverIonTechnology;
