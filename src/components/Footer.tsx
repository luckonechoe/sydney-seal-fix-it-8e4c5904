import { Phone, Mail, MapPin, Shield, Award, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content="Sydney Sealed" />
      <meta itemProp="telephone" content="+61421043444" />
      <meta itemProp="url" content="https://sydneyseal.com.au" />
      <div className="container mx-auto px-4">
        
        {/* Social Proof Bar */}
        <div className="bg-primary/20 border border-primary/30 rounded-lg p-4 mb-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <div className="flex items-center gap-1.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              <span className="text-white font-semibold ml-1">4.9/5</span>
            </div>
            <span className="text-gray-300 hidden sm:block">|</span>
            <span className="text-gray-200 text-sm">Trusted by <strong className="text-white">1,000+ Sydney families</strong> since 2015</span>
            <span className="text-gray-300 hidden sm:block">|</span>
            <span className="text-gray-200 text-sm"><strong className="text-white">NSW Lic. 482739W</strong> — Fully Licensed & Insured</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg" itemProp="name">Sydney Sealed</h3>
                <p className="text-gray-400 text-sm">Licensed Waterproofing Specialists</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Sydney's trusted experts in shower leak repair, balcony waterproofing and bathroom restoration. 
              NSW licensed professionals with 5-year written warranty on every job.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1 text-green-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">NSW Licensed</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-400">
                <Award className="w-4 h-4" />
                <span className="text-sm">Insured</span>
              </div>
              <div className="flex items-center space-x-1 text-orange-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Same Day</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Lic. No: 482739W</p>
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
              <li><Link to="/epoxy-grout-leak-repair" className="hover:text-white transition-colors">Epoxy Grout Leak Repair</Link></li>
              <li><Link to="/silver-ion-technology" className="hover:text-white transition-colors">Silver-Ion Technology</Link></li>
            </ul>
          </nav>
          
          {/* Service Areas */}
          <nav aria-label="Service areas">
            <h4 className="font-bold text-lg mb-4">Sydney Service Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#service-areas" className="hover:text-white transition-colors">Eastern Suburbs Sydney</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">North Shore Sydney</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Inner West Sydney</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Northern Beaches</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Western Sydney & Parramatta</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Sutherland Shire</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Hills District</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">All Greater Sydney</a></li>
            </ul>
          </nav>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Sydney Sealed</h4>
            <address className="space-y-3 not-italic" itemScope itemType="https://schema.org/PostalAddress">
              <a 
                href="tel:0421043444" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Call Sydney Sealed on 0421 043 444"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span itemProp="telephone">0421 043 444</span>
              </a>
              <a 
                href="mailto:info@sydneysealgrout.com.au" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Email Sydney Sealed waterproofing"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span itemProp="email">info@sydneysealgrout.com.au</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span itemProp="addressLocality">Greater Sydney Area</span>, <span itemProp="addressRegion">NSW</span>
              </div>
            </address>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Emergency Service:</strong><br />
                Same-day shower & balcony leak repair across all Sydney suburbs
              </p>
            </div>
            <div className="mt-3 p-3 bg-primary/20 rounded-lg">
              <p className="text-xs text-gray-300">
                <strong className="text-white">Mon–Fri:</strong> 7am–6pm &nbsp;|&nbsp; <strong className="text-white">Sat:</strong> 8am–4pm<br />
                <strong className="text-white">Emergency:</strong> 24/7 available
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sydney Sealed. All rights reserved. | NSW Licensed Waterproofer Lic. 482739W | $20M Public Liability Insured | 5-Year Written Warranty
            </p>
            <nav aria-label="Secondary navigation" className="flex gap-4 text-sm text-gray-400">
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
