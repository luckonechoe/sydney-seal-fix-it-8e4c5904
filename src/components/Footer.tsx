import { Phone, Mail, MapPin, Shield, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Sydney Seal</h3>
                <p className="text-gray-400 text-sm">Licensed Waterproofing Specialists</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Sydney's trusted experts in shower leak repair, balcony waterproofing and bathroom restoration. 
              AS3740 certified with 10-year warranty on all work.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1 text-green-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Licensed</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-400">
                <Award className="w-4 h-4" />
                <span className="text-sm">AS3740</span>
              </div>
              <div className="flex items-center space-x-1 text-orange-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Same Day</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">ABN: 12 345 678 901</p>
          </div>
          
          {/* Services */}
          <nav aria-label="Services">
            <h4 className="font-bold text-lg mb-4">Waterproofing Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/shower-leak-repair" className="hover:text-white transition-colors">Shower Leak Repair Sydney</Link></li>
              <li><Link to="/balcony-leak-repair" className="hover:text-white transition-colors">Balcony Waterproofing Sydney</Link></li>
              <li><Link to="/bathroom-kitchen-restoration" className="hover:text-white transition-colors">Bathroom Restoration</Link></li>
              <li><Link to="/commercial-waterproofing" className="hover:text-white transition-colors">Commercial Waterproofing</Link></li>
              <li><Link to="/preventative-maintenance" className="hover:text-white transition-colors">Preventative Maintenance</Link></li>
              <li><Link to="/silver-ion-technology" className="hover:text-white transition-colors">Silver-Ion Technology</Link></li>
            </ul>
          </nav>
          
          {/* Service Areas */}
          <nav aria-label="Service areas">
            <h4 className="font-bold text-lg mb-4">Sydney Service Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Eastern Suburbs Sydney</li>
              <li>North Shore Sydney</li>
              <li>Inner West Sydney</li>
              <li>Northern Beaches</li>
              <li>Western Sydney & Parramatta</li>
              <li>Sutherland Shire</li>
              <li>Hills District</li>
              <li>All Greater Sydney</li>
            </ul>
          </nav>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Sydney Seal</h4>
            <address className="space-y-3 not-italic">
              <a 
                href="tel:0412345678" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Call Sydney Seal"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>0412 345 678</span>
              </a>
              <a 
                href="mailto:info@sydneysealgrout.com.au" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Email Sydney Seal"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@sydneysealgrout.com.au</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Greater Sydney Area, NSW</span>
              </div>
            </address>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Emergency Service:</strong><br />
                Same-day leak repair available across Sydney
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sydney Seal. All rights reserved. | Licensed & Insured | AS3740 Certified | 10-Year Warranty
            </p>
            <nav aria-label="Legal" className="flex gap-4 text-sm text-gray-400">
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/testimonials" className="hover:text-white transition-colors">Reviews</Link>
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
