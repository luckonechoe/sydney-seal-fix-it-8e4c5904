import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompleteReconstruction = () => {
  const processSteps = [
    {
      number: 1,
      title: "Complete Removal to Concrete",
      description: "Remove all tiles, sand cement bedding, and old materials down to bare concrete substrate"
    },
    {
      number: 2,
      title: "Professional Waterproofing Application",
      description: "Apply primer and professional-grade waterproofing membrane to concrete substrate"
    },
    {
      number: 3,
      title: "New Bedding & Tile Installation",
      description: "Install new sand cement bedding, floor tiles, and first row of wall tiles"
    },
    {
      number: 4,
      title: "Premium Epoxy Grout Finish",
      description: "Complete with premium anti-mold, stain-resistant epoxy grout for lasting protection"
    }
  ];

  const scenarios = [
    "Severe water leaking through both grout and underlying waterproofing",
    "Visible structural damage or rotted timber beneath tiles",
    "Failed original waterproofing membrane underneath",
    "Extensive cracking in tiles, bedding, or substrate",
    "Water damage to rooms below or adjacent areas",
    "Desire for complete peace of mind with dual waterproofing layers"
  ];

  const keyBenefits = [
    "Double-layer waterproofing protection",
    "Addresses both grout and membrane failures",
    "5-year warranty on workmanship and products",
    "Fully licensed and Australian Standards compliant",
    "Premium anti-mold and stain-resistant materials",
    "Complete peace of mind with new waterproofing",
    "Solves severe structural water damage",
    "Professional, reliable, and insured service"
  ];

  return (
    <>
      <Helmet>
        <title>Complete Tile Reconstruction Sydney | Double-Layer Waterproofing | Sydney Sealed</title>
        <meta 
          name="description" 
          content="Complete tile reconstruction Sydney with double-layer waterproofing protection. Full substrate rebuild, professional waterproofing membrane, and premium epoxy grout finish. 5-year warranty." 
        />
        <meta name="keywords" content="complete tile reconstruction Sydney, double-layer waterproofing, tile reconstruction waterproofing Sydney, substrate waterproofing, epoxy grout Sydney" />
        <link rel="canonical" href="https://sydneyseal.com.au/complete-reconstruction" />
        <meta property="og:title" content="Complete Tile Reconstruction Sydney | Double-Layer Waterproofing" />
        <meta property="og:description" content="Full tile reconstruction with double-layer waterproofing. Substrate rebuild, professional membrane, epoxy grout. 5-year warranty. Sydney-wide service." />
        <meta property="og:url" content="https://sydneyseal.com.au/complete-reconstruction" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Section 1: Main Content Two-Column Layout */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Process Card */}
              <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg p-6 border-2 border-accent/30">
                <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Ultimate Protection
                </span>
                
                <h2 className="text-3xl font-bold mb-4">Complete Reconstruction Process</h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  For areas with severe leaking or dual waterproofing failure, we offer complete reconstruction down to the concrete substrate. This provides double-layer protection with brand new waterproofing underneath.
                </p>
                
                {/* Process Steps */}
                <div className="space-y-4 mb-6">
                  {processSteps.map((step) => (
                    <div key={step.number} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pricing Box */}
                <div className="bg-background/80 border-2 border-accent/40 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-lg mb-2">Custom Quote Required</h3>
                  <p className="text-sm text-muted-foreground">
                    Price varies based on area size, tile selection, and project scope. Contact us for a detailed assessment and quote.
                  </p>
                </div>
                
                {/* CTA Button */}
                <Link to="/contact">
                  <Button size="lg" className="w-full md:w-auto">
                    Request Custom Quote
                  </Button>
                </Link>
              </div>
              
              {/* Right Column - Info Cards */}
              <div>
                {/* Card 1 - Scenarios */}
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">When Do You Need Complete Reconstruction?</h3>
                  <ul className="space-y-3">
                    {scenarios.map((scenario, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Card 2 - Benefits */}
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Double-Layer Protection Benefits</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Unlike surface sealing which only addresses the grout layer, complete reconstruction provides two independent waterproofing barriers:
                  </p>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">1.</span>
                      <span><strong>Primary Layer:</strong> Professional waterproofing membrane directly on concrete substrate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">2.</span>
                      <span><strong>Secondary Layer:</strong> Premium epoxy grout on surface preventing water penetration</span>
                    </li>
                  </ol>
                  <p className="text-sm text-muted-foreground mt-4">
                    This comprehensive approach solves both common leak pathways: cracked grout/sealant and failed underlying waterproofing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 2: Key Benefits Banner */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary-foreground mb-8 text-center">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CompleteReconstruction;
