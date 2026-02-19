
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, Sparkles, Brush, Wrench, Star } from 'lucide-react';

const BathroomKitchenRestoration = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Bathroom & Kitchen Restoration Sydney - Tile, Grout & Waterproofing Experts</title>
        <meta name="description" content="Complete bathroom and kitchen restoration services in Sydney. Tile restoration, antimicrobial grout renewal, waterproofing & mould treatment. 5-year warranty. Free consultation - call 0421 043 444" />
        <meta name="keywords" content="bathroom restoration Sydney, kitchen restoration Sydney, tile restoration, grout renewal Sydney, waterproofing Sydney, antimicrobial bathroom treatment, kitchen splashback repair Sydney" />
        <link rel="canonical" href="https://sydneyseal.com.au/bathroom-kitchen-restoration" />
        <meta property="og:title" content="Bathroom & Kitchen Restoration Sydney | Sydney Sealed" />
        <meta property="og:description" content="Complete bathroom and kitchen restoration. Antimicrobial tile and grout renewal, waterproofing, mould treatment. 5-year warranty. Free consultation." />
        <meta property="og:url" content="https://sydneyseal.com.au/bathroom-kitchen-restoration" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bathroom & Kitchen Restoration
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your spaces with our premium restoration services featuring advanced 
              antimicrobial protection technology for lasting beauty and hygiene protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Phone className="w-5 h-5 mr-2" />
                Call 0421 043 444
              </Button>
              <Button variant="outline" size="lg">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Bathroom Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Revitalize your bathroom with our comprehensive restoration services. From tile 
                and grout renewal to complete waterproofing, we use advanced antimicrobial protection technology 
                for superior hygiene and lasting results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Tile restoration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Grout renewal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Shower resealing</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Waterproofing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Mould treatment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Surface refinishing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-4">🔬 Advanced Antimicrobial Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Antimicrobial Surface</h4>
                    <p className="text-gray-600 text-sm">Kills 99.9% of bacteria and viruses on contact</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Mould Resistance</h4>
                    <p className="text-gray-600 text-sm">Prevents mould growth for the product lifetime</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Self-Cleaning</h4>
                    <p className="text-gray-600 text-sm">Easier maintenance with reduced cleaning needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kitchen Restoration Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span>Assessment and surface preparation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span>Deep cleaning and stain removal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span>Antimicrobial grout and sealant application</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span>Protective coating and finishing</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kitchen Splashback & Surface Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Restore your kitchen's hygiene and appearance with our specialized restoration 
                services. Perfect for splashbacks, countertops, and tiled surfaces that need 
                professional attention.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span>Splashback restoration and resealing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span>Benchtop edge sealing and repair</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span>Antimicrobial surface treatment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span>Stain-resistant protective coating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Restoration Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Brush className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-600">15+ years of restoration expertise</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Premium Materials</h3>
                <p className="text-gray-600">Antimicrobial-enhanced products only</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Wrench className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Complete Service</h3>
                <p className="text-gray-600">From assessment to final finish</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">5-Year Warranty</h3>
                <p className="text-gray-600">Guaranteed antimicrobial protection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BathroomKitchenRestoration;
