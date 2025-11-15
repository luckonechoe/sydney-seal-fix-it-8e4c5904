
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceAreas = () => {
  const areas = [
    "Eastern Suburbs", "North Shore", "Inner West", "Northern Beaches",
    "Hills District", "Sutherland Shire", "Western Sydney", "South West Sydney",
    "Parramatta", "Blacktown", "Penrith", "Liverpool"
  ];

  return (
    <section className="py-16 bg-blue-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-6 h-6" />
            <h2 className="text-3xl lg:text-4xl font-bold">Service Areas</h2>
          </div>
          <p className="text-xl text-gray-600">
            Proudly serving homes and businesses across Greater Sydney
          </p>
        </div>
        
        <Card className="bg-white text-gray-900">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-center text-gray-700">
                <strong>Don't see your area?</strong> We travel throughout Sydney - call us to confirm service availability
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceAreas;
