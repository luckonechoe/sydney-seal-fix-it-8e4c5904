
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, Shield, Clock, Award, Hammer, Wrench, Layers, Droplets, AlertTriangle, Home } from 'lucide-react';

const BalconyReTile = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Balcony Re-Tile Sydney - Full Strip-Out & Structural Waterproofing | Sydney Seal</title>
        <meta name="description" content="Protect your balcony from structural damage with our full strip-out and re-tile service in Sydney. Slab inspection, falls correction, external-grade waterproofing. 5-year warranty. Call 0421 043 444" />
        <meta name="keywords" content="balcony re-tile Sydney, balcony rip-out Sydney, balcony waterproofing membrane, concrete spalling repair, balcony structural repair Sydney, external waterproofing Sydney" />
        <link rel="canonical" href="https://sydneyseal.com.au/balcony-re-tile" />
        <meta property="og:title" content="Balcony Re-Tile Sydney | Full Strip-Out & Waterproofing" />
        <meta property="og:description" content="Protect your balcony from structural damage. Full strip-out, slab inspection, compliant waterproofing, and new tiling. 5-year warranty. Sydney-wide." />
        <meta property="og:url" content="https://sydneyseal.com.au/balcony-re-tile" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Protect Your Investment: The Definitive Balcony Re-Tile Solution
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              Full Strip-Out, Structural Inspection & Compliant Waterproofing
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              When surface repairs fail, we provide the full strip-out, structural inspection, and compliant waterproofing 
              required to secure your balcony and protect your property from catastrophic water damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0421 043 444 Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Request Structural Balcony Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
              Is Your Balcony Quietly Warning You?
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-10">
              A leaking balcony is a serious structural threat. Look for these critical warning signs:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">⚪</div>
                  <h3 className="font-bold mb-2 text-foreground">Efflorescence</h3>
                  <p className="text-sm text-muted-foreground">White, chalky residue on the surface or underside of the slab—water is moving through the concrete</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🔊</div>
                  <h3 className="font-bold mb-2 text-foreground">Hollow Tiles</h3>
                  <p className="text-sm text-muted-foreground">Loose or drumming tiles signifying saturated bedding that has lost adhesion</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">💥</div>
                  <h3 className="font-bold mb-2 text-foreground">Spalling Concrete</h3>
                  <p className="text-sm text-muted-foreground">Cracked or flaking concrete on the underside of the slab, often exposing rusted reinforcement</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg text-center border-l-4 border-primary">
              <p className="text-lg text-foreground mb-4 italic">
                "A failed balcony membrane allows water to attack the very structure of your building. 
                This is not a cosmetic issue—it is a structural liability that can lead to massive 
                rectification costs and safety hazards."
              </p>
              <p className="text-muted-foreground">
                Don't wait for concrete spalling or structural compromise. Get a professional assessment today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
              Why You Can't Ignore a Leaking Balcony
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-10">
              A failed balcony membrane allows water to attack the very structure of your building
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Concrete Spalling</h3>
                      <p className="text-muted-foreground text-sm">Water reaches the steel reinforcement bars inside the concrete, causing them to rust and expand, cracking and pushing the concrete apart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Structural Compromise</h3>
                      <p className="text-muted-foreground text-sm">Continued water ingress weakens the structural integrity of the slab and supporting beams, creating a safety hazard</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Massive Rectification Costs</h3>
                      <p className="text-muted-foreground text-sm">Repairing spalling and replacing structural elements is exponentially more expensive than fixing the leak early</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Insurance & Strata Issues</h3>
                      <p className="text-muted-foreground text-sm">Leaks can affect adjoining properties, leading to complex and costly disputes with strata or neighbours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              The Balcony Re-Tile (Rip-Up) System for Structural Protection
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              When a balcony leak is chronic, a full strip-out is the only responsible, long-term solution. 
              Our process ensures compliance and structural integrity.
            </p>
            <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg shadow-lg">
              <p className="text-sm uppercase tracking-wide mb-1">Structural Protection</p>
              <p className="text-4xl font-bold">Guaranteed</p>
              <p className="text-sm opacity-90 mt-1">Full compliance with building codes</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our 6-Step Structural Re-Tile Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Full Strip-Out Demolition</h4>
                    <p className="text-muted-foreground">All existing tiles, grout, and bedding fully removed down to the structural concrete slab</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Slab Inspection & Repair</h4>
                    <p className="text-muted-foreground">Exposed slab inspected for spalling, cracking, or damage. All concrete repairs and substrate preparation completed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Falls Correction & Drainage</h4>
                    <p className="text-muted-foreground">Substrate corrected to ensure positive drainage, eliminating ponding and directing water to drains</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">External-Grade Waterproofing</h4>
                    <p className="text-muted-foreground">Durable, compliant membrane system extending up all perimeter walls and door thresholds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">New Bedding & Tiling</h4>
                    <p className="text-muted-foreground">Flexible bedding with external-grade tiles and grouting designed for movement and UV exposure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Penetration Sealing</h4>
                    <p className="text-muted-foreground">All critical joints, balustrade posts, and penetrations sealed with high-quality flexible sealants</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <Home className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-bold text-lg text-foreground mb-2">Why External-Grade Materials?</h3>
                  <p className="text-muted-foreground mb-4">
                    Balconies are exposed to harsh conditions. We use materials specifically designed for 
                    external environments to ensure long-term durability.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> UV-stable membranes</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Flexible for thermal movement</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Weather-resistant grout</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Complete tanking system</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold text-foreground mb-3">Structural Peace of Mind</h4>
                <p className="text-muted-foreground">
                  We prioritize the integrity of the concrete slab and the safety of the structure, not just the 
                  appearance of the tiles. Our full rip-out solution protects your asset for decades, preventing 
                  costly structural damage and insurance complications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              Why Property Owners Trust Our Balcony Expertise
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              We specialize in high-risk wet areas, providing a solution that protects your asset for decades
            </p>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Structural Focus</h3>
                  <p className="text-sm text-muted-foreground">We prioritize the integrity of the concrete slab and building safety</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Compliance Guaranteed</h3>
                  <p className="text-sm text-muted-foreground">Waterproofing applied to the highest industry standards</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Expert Diagnosis</h3>
                  <p className="text-sm text-muted-foreground">We diagnose the root cause before recommending solutions</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Long-Term Durability</h3>
                  <p className="text-sm text-muted-foreground">Premium, UV-stable, flexible materials for external environments</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Benefits */}
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">Why Choose Our Balcony Re-Tile Service</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Professional Project Management</h4>
                    <p className="text-sm text-muted-foreground">We manage the entire process from demolition and structural repair to waterproofing and final tiling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Concrete Spalling Repair</h4>
                    <p className="text-sm text-muted-foreground">We address existing structural damage before waterproofing to prevent future issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Positive Drainage Guaranteed</h4>
                    <p className="text-sm text-muted-foreground">Correct falls ensure no water ponding—protecting your membrane for years to come</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">5-Year Warranty</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive warranty coverage on all workmanship and materials</p>
                  </div>
                </div>
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
              Request Your Free Structural Balcony Assessment Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't wait for concrete spalling or structural compromise. Our expert team will diagnose the root cause 
              and provide a compliant, long-term solution to protect your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0411 563 444 Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request Structural Assessment
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              ✓ Full slab inspection &nbsp;|&nbsp; ✓ Falls correction &nbsp;|&nbsp; ✓ External-grade waterproofing &nbsp;|&nbsp; ✓ 5-year warranty
            </p>
          </div>
        </div>
      </section>

      {/* SEO Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">
              Complete Balcony Re-Tile Services Sydney
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              From full strip-out demolition to premium external-grade tiling, we deliver permanent balcony reconstruction solutions across Sydney.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Hammer className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Full Strip-Out</h3>
                  <p className="text-muted-foreground text-sm">Complete removal of tiles, grout, and bedding down to the structural slab</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Structural Repair</h3>
                  <p className="text-muted-foreground text-sm">Slab inspection and concrete spalling repairs to restore structural integrity</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Layers className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">External Waterproofing</h3>
                  <p className="text-muted-foreground text-sm">Durable, UV-stable membrane system with complete tanking to perimeter walls</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Falls Correction</h3>
                  <p className="text-muted-foreground text-sm">Positive drainage guaranteed to eliminate water ponding</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BalconyReTile;
