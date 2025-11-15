
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, Home, Umbrella, AlertTriangle, Zap } from 'lucide-react';

const BalconyLeakRepair = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert Balcony Leak Repair & Waterproofing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Protect your property from structural damage with our advanced balcony waterproofing 
              solutions featuring silver-ion nanoparticle technology for lasting protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678
              </Button>
              <Button variant="outline" size="lg">
                Get Free Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Balcony Leaks: A Serious Problem
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                  <h3 className="font-bold text-red-800">Warning Signs</h3>
                </div>
                <ul className="text-red-700 space-y-1">
                  <li>• Water stains on ceiling below balcony</li>
                  <li>• Cracked or deteriorating grout/sealant</li>
                  <li>• Pooling water after rain</li>
                  <li>• Musty odours or visible mould</li>
                  <li>• Damaged internal walls or flooring</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Balcony leaks can cause extensive structural damage, leading to costly repairs 
                if left untreated. Our comprehensive waterproofing solutions address the root 
                cause and provide permanent protection.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Advanced Solution
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Membrane Waterproofing</h4>
                  <p className="text-green-700 text-sm">High-performance membranes with silver-ion enhancement</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Drainage Solutions</h4>
                  <p className="text-green-700 text-sm">Improved drainage systems to prevent water accumulation</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Antimicrobial Treatment</h4>
                  <p className="text-green-700 text-sm">Permanent mould and bacteria resistance</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Structural Assessment</h4>
                  <p className="text-green-700 text-sm">Complete evaluation and repair of damaged areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Balcony Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Home className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Leak Detection</h3>
                <p className="text-gray-600">Advanced diagnostic tools to identify all leak sources</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Umbrella className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Waterproofing</h3>
                <p className="text-gray-600">Premium membrane and sealant application</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Emergency Repairs</h3>
                <p className="text-gray-600">24/7 emergency leak repair services</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Restoration</h3>
                <p className="text-gray-600">Complete balcony restoration and refinishing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BalconyLeakRepair;
