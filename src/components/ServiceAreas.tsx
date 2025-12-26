import { MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServiceAreas = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  // Organized by region for better local SEO targeting
  const regions = [
    {
      name: "Eastern Suburbs",
      suburbs: ["Bondi", "Randwick", "Woollahra", "Double Bay", "Paddington", "Maroubra"],
      description: "Serving the Eastern Suburbs with expert shower leak repair and waterproofing"
    },
    {
      name: "North Shore",
      suburbs: ["Chatswood", "North Sydney", "Willoughby", "Lane Cove", "Mosman", "Neutral Bay"],
      description: "Professional waterproofing services across Sydney's North Shore"
    },
    {
      name: "Inner West",
      suburbs: ["Marrickville", "Newtown", "Leichhardt", "Burwood", "Ashfield", "Canterbury"],
      description: "Bathroom restoration and leak repair specialists in the Inner West"
    },
    {
      name: "Northern Beaches",
      suburbs: ["Manly", "Dee Why", "Brookvale", "Mona Vale", "Warriewood", "Narrabeen"],
      description: "Balcony waterproofing experts for Northern Beaches properties"
    },
    {
      name: "Hills District",
      suburbs: ["Castle Hill", "Baulkham Hills", "Rouse Hill", "Kellyville", "North Rocks", "Bella Vista"],
      description: "Trusted waterproofing services throughout the Hills District"
    },
    {
      name: "Western Sydney",
      suburbs: ["Parramatta", "Blacktown", "Penrith", "Liverpool", "Fairfield", "Bankstown"],
      description: "Comprehensive leak repair solutions across Western Sydney"
    },
    {
      name: "Sutherland Shire",
      suburbs: ["Sutherland", "Cronulla", "Miranda", "Caringbah", "Engadine", "Gymea"],
      description: "Expert shower and balcony waterproofing in the Sutherland Shire"
    },
    {
      name: "South West Sydney",
      suburbs: ["Campbelltown", "Liverpool", "Narellan", "Camden", "Hoxton Park", "Ingleburn"],
      description: "Professional waterproofing services for South West Sydney homes"
    }
  ];

  return (
    <section 
      ref={elementRef}
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className={`py-16 bg-blue-50 text-gray-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
            <h2 id="service-areas-heading" className="text-3xl lg:text-4xl font-bold">
              Sydney Waterproofing Service Areas
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving homes and businesses across Greater Sydney with professional leak repair, 
            bathroom waterproofing, and restoration services. Same-day emergency service available.
          </p>
        </header>
        
        {/* Region cards for enhanced local SEO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {regions.map((region, index) => (
            <article 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              itemScope 
              itemType="https://schema.org/Place"
            >
              <h3 className="font-bold text-lg text-primary mb-3" itemProp="name">
                {region.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4" itemProp="description">
                {region.description}
              </p>
              <ul className="space-y-2">
                {region.suburbs.map((suburb, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 text-sm">{suburb}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Call to action with local keywords */}
        <Card className="bg-white text-gray-900">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">
                Sydney's Trusted Waterproofing Experts – Serving All Suburbs
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                From the <strong>Eastern Suburbs</strong> to <strong>Western Sydney</strong>, 
                <strong> North Shore</strong> to <strong>Sutherland Shire</strong> – our licensed 
                waterproofing specialists provide AS3740 certified shower leak repair, balcony 
                waterproofing, and bathroom restoration services with a 10-year warranty.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg inline-block">
                <p className="text-gray-700">
                  <strong>Don't see your suburb?</strong> We travel throughout Greater Sydney – 
                  <a 
                    href="tel:0421043444" 
                    className="text-primary font-semibold hover:underline ml-1"
                    aria-label="Call us to confirm service availability in your area"
                  >
                    call 0421 043 444
                  </a> to confirm service availability
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceAreas;
