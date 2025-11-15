
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Clock, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SilverIonTechnology = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Antimicrobial Protection",
      description: "Silver ions permanently kill bacteria, viruses, and germs on contact, providing continuous protection."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Mould Resistance",
      description: "Prevents mould and mildew growth for the lifetime of the product, maintaining a healthy environment."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Lifetime Protection",
      description: "Unlike traditional treatments, silver-ion protection doesn't wear off or need reapplication."
    },
    {
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      title: "Scientifically Proven",
      description: "Backed by extensive research and testing, proven effective against 99.9% of harmful microorganisms."
    }
  ];

  const applications = [
    "Stainproof grout installation",
    "Epoxy resealing services", 
    "Tile and grout sealing",
    "Bathroom restoration",
    "Kitchen splashback sealing",
    "Shower regrouting",
    "Balcony waterproofing"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Silver-Ion Nanoparticle Technology
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Revolutionary antimicrobial protection that lasts a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Your Quote Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Silver-Ion Technology Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced nanoparticle technology integrates silver ions directly into grout and sealant materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Nanoparticle Integration</h3>
                <p className="text-gray-600">Silver nanoparticles are permanently embedded into the grout and sealant matrix during manufacturing</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Release</h3>
                <p className="text-gray-600">Silver ions are continuously released when moisture is present, creating an antimicrobial barrier</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Permanent Protection</h3>
                <p className="text-gray-600">Protection lasts for the lifetime of the product without degradation or the need for reapplication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why silver-ion technology is the future of antimicrobial protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Applications
              </h2>
              <p className="text-xl text-gray-600">
                Where we use silver-ion nanoparticle technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Evidence */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Scientifically Proven Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <p className="text-gray-700">Reduction in bacteria</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-700">Mould prevention</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">Lifetime</div>
                <p className="text-gray-700">Protection guarantee</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Independent laboratory testing confirms the effectiveness of our silver-ion technology against a wide range of harmful microorganisms including E. coli, Staphylococcus, and various mould species.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Experience the Future of Antimicrobial Protection
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free quote for your silver-ion nanoparticle grout and sealing project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SilverIonTechnology;
