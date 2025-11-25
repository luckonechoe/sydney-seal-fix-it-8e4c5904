
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold">SS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Sydney Sealed</h3>
                <p className="text-gray-400 text-sm">Professional Leak Repair</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional leak repair specialists serving Sydney with advanced 
              antimicrobial nanoparticle solutions for lasting protection.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>ABN: 12 345 678 901</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Specialist Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Shower & Balcony Leak Repair</li>
              <li>Bathroom Restoration</li>
              <li>Kitchen Restoration</li>
              <li>Stainproof Regrouting</li>
              <li>Epoxy Resealing</li>
              <li>Antimicrobial Treatment</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">0412 345 678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">info@sydneysealgrout.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Greater Sydney Area</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sydney Seal & Grout. All rights reserved. | Licensed & Insured | Silver-Ion Technology | Lifetime Warranty
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
