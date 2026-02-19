import { MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServiceAreas = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  // Organized by region for better local SEO targeting
  const regions = [
    {
      name: "Eastern Suburbs",
      suburbs: ["Shower leak repair Bondi", "Waterproofing Randwick", "Bathroom repair Woollahra", "Leak repair Double Bay", "Shower sealing Paddington", "Waterproofing Maroubra"],
      description: "Expert shower leak repair and bathroom waterproofing across the Eastern Suburbs — Bondi, Randwick, Woollahra & beyond"
    },
    {
      name: "North Shore",
      suburbs: ["Shower repair Chatswood", "Waterproofing North Sydney", "Leak repair Willoughby", "Bathroom sealing Lane Cove", "Waterproofing Mosman", "Shower repair Neutral Bay"],
      description: "Professional shower and balcony waterproofing across Sydney's North Shore"
    },
    {
      name: "Inner West",
      suburbs: ["Bathroom repair Marrickville", "Waterproofing Newtown", "Shower leak Leichhardt", "Grout repair Burwood", "Waterproofing Ashfield", "Leak repair Canterbury"],
      description: "Bathroom restoration and shower leak repair specialists in the Inner West"
    },
    {
      name: "Northern Beaches",
      suburbs: ["Balcony repair Manly", "Waterproofing Dee Why", "Shower leak Brookvale", "Bathroom repair Mona Vale", "Waterproofing Warriewood", "Leak repair Narrabeen"],
      description: "Balcony and shower waterproofing experts for Northern Beaches properties"
    },
    {
      name: "Hills District",
      suburbs: ["Shower repair Castle Hill", "Waterproofing Baulkham Hills", "Leak repair Rouse Hill", "Bathroom sealing Kellyville", "Shower repair North Rocks", "Waterproofing Bella Vista"],
      description: "Trusted shower and bathroom waterproofing services throughout the Hills District"
    },
    {
      name: "Western Sydney",
      suburbs: ["Shower repair Parramatta", "Waterproofing Blacktown", "Leak repair Penrith", "Bathroom repair Liverpool", "Shower sealing Fairfield", "Waterproofing Bankstown"],
      description: "Comprehensive shower leak repair and waterproofing solutions across Western Sydney"
    },
    {
      name: "Sutherland Shire",
      suburbs: ["Bathroom repair Sutherland", "Waterproofing Cronulla", "Shower leak Miranda", "Leak repair Caringbah", "Waterproofing Engadine", "Bathroom sealing Gymea"],
      description: "Expert shower and balcony waterproofing in the Sutherland Shire"
    },
    {
      name: "South West Sydney",
      suburbs: ["Shower repair Campbelltown", "Waterproofing Liverpool", "Bathroom repair Narellan", "Leak repair Camden", "Shower sealing Hoxton Park", "Waterproofing Ingleburn"],
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
      itemScope
      itemType="https://schema.org/Service"
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
            Proudly serving homes and businesses across Greater Sydney with professional shower leak repair, 
            balcony waterproofing, and bathroom restoration. Same-day emergency service available.
          </p>
        </header>
        
        {/* Region cards for enhanced local SEO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {regions.map((region, index) => (
            <article 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              itemProp="areaServed"
              itemScope 
              itemType="https://schema.org/AdministrativeArea"
            >
              <h3 className="font-bold text-lg text-primary mb-2" itemProp="name">
                {region.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4" itemProp="description">
                {region.description}
              </p>
              <ul className="space-y-1.5">
                {region.suburbs.map((suburb, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 text-xs">{suburb}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Local SEO keyword-rich block */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Suburb-by-Suburb Waterproofing Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Eastern Suburbs</h4>
              <p>Shower leak repair in Bondi, Coogee, Randwick, Paddington, and Woollahra. Fast response, same-day service.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">North Shore</h4>
              <p>Balcony and shower waterproofing in Chatswood, Mosman, North Sydney, Neutral Bay, and Lane Cove.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Inner West</h4>
              <p>Bathroom restoration and grout repair in Newtown, Marrickville, Leichhardt, Burwood, and Ashfield.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Western Sydney</h4>
              <p>Shower and bathroom waterproofing in Parramatta, Blacktown, Penrith, Liverpool, and Campbelltown.</p>
            </div>
          </div>
        </div>

        {/* Call to action with local keywords */}
        <Card className="bg-white text-gray-900">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">
                Sydney's #1 Rated Waterproofing Specialists — Serving All 200+ Suburbs
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                From the <strong>Eastern Suburbs</strong> to <strong>Western Sydney</strong>, 
                <strong> North Shore</strong> to <strong>Sutherland Shire</strong> — our NSW licensed 
                waterproofing professionals deliver permanent shower leak repair, balcony 
                waterproofing, and bathroom restoration with a 5-year written warranty.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg inline-block">
                <p className="text-gray-700">
                  <strong>Don't see your suburb?</strong> We travel throughout Greater Sydney — 
                  <a 
                    href="tel:0421043444" 
                    className="text-primary font-semibold hover:underline ml-1"
                    aria-label="Call us to confirm service availability in your area"
                  >
                    call 0421 043 444
                  </a> to confirm availability
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
