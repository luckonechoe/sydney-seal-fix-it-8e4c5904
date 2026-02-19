
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Bondi, Sydney",
      service: "Shower Leak Repair",
      rating: 5,
      review: "We had a persistent leak that two other companies couldn't fix. Sydney Seal diagnosed the problem immediately and had it resolved the same day. Absolutely outstanding service! The team was professional, clean, and kept us informed throughout. Highly recommend!",
      date: "November 2024"
    },
    {
      name: "James Chen",
      location: "Chatswood, Sydney",
      service: "Full Bathroom Re-Tile",
      rating: 5,
      review: "Complete transformation of our tired 90s bathroom. The attention to detail was incredible - from the waterproofing to the final grout lines. The antimicrobial grout they used has kept our bathroom looking pristine. Worth every cent!",
      date: "October 2024"
    },
    {
      name: "Emma Thompson",
      location: "Manly, Sydney",
      service: "Balcony Leak Repair",
      rating: 5,
      review: "Our balcony leak was causing water damage to the apartment below. Sydney Seal came out within 24 hours, identified the issue, and completed the repair beautifully. Their warranty gives us real peace of mind. Thank you!",
      date: "October 2024"
    },
    {
      name: "Michael Roberts",
      location: "Parramatta, Sydney",
      service: "Shower Re-Tile",
      rating: 5,
      review: "From quote to completion, the experience was seamless. The team arrived on time, protected all our floors, and delivered a stunning result. Our ensuite looks like it belongs in a luxury hotel now!",
      date: "September 2024"
    },
    {
      name: "Lisa Wang",
      location: "Newtown, Sydney",
      service: "Emergency Leak Repair",
      rating: 5,
      review: "Called on a Sunday morning with water coming through our kitchen ceiling. They were here within two hours and stopped the leak. True professionals who really care about their customers. Can't thank them enough!",
      date: "September 2024"
    },
    {
      name: "David & Kate Morrison",
      location: "Cronulla, Sydney",
      service: "Complete Reconstruction",
      rating: 5,
      review: "We needed a full bathroom reconstruction after water damage. Sydney Seal managed everything from demolition to the final touches. The double-layer waterproofing they installed gives us confidence this will never happen again. Exceptional work!",
      date: "August 2024"
    },
    {
      name: "Andrew Phillips",
      location: "Mosman, Sydney",
      service: "Balcony Re-Tile",
      rating: 5,
      review: "Our harbourside balcony was in desperate need of attention. The team did an amazing job with new waterproofing and beautiful tiles. They even fixed drainage issues we didn't know we had. Very impressed with their expertise.",
      date: "August 2024"
    },
    {
      name: "Rebecca Taylor",
      location: "Randwick, Sydney",
      service: "Shower Leak Repair",
      rating: 5,
      review: "Quick, professional, and reasonably priced. They explained everything clearly before starting and the repair has been holding up perfectly for 6 months now. Would definitely use again!",
      date: "July 2024"
    },
    {
      name: "Tom Nguyen",
      location: "Hurstville, Sydney",
      service: "Preventative Maintenance",
      rating: 5,
      review: "Had Sydney Seal do a preventative check on our 15-year-old bathroom. They found early signs of waterproofing failure and fixed it before it became a major problem. Proactive service that saved us thousands!",
      date: "July 2024"
    }
  ];

  const stats = [
    { value: "1000+", label: "Happy Customers" },
    { value: "4.9", label: "Average Rating" },
    { value: "100%", label: "Would Recommend" },
    { value: "5 Year", label: "Warranty" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Customer Reviews & Testimonials | 4.9★ Rated | Sydney Sealed Waterproofing</title>
        <meta name="description" content="Read 1,000+ verified reviews from Sydney homeowners who trust Sydney Sealed for shower leak repair and waterproofing. 4.9 stars average. See why we're Sydney's #1 rated waterproofers." />
        <meta name="keywords" content="Sydney Sealed reviews, waterproofing reviews Sydney, shower leak repair testimonials, 5 star waterproofing Sydney, customer reviews waterproofing" />
        <link rel="canonical" href="https://sydneyseal.com.au/testimonials" />
        <meta property="og:title" content="Customer Reviews | 4.9★ Rated Sydney Waterproofing" />
        <meta property="og:description" content="1,000+ verified reviews from satisfied Sydney homeowners. See why Sydney Sealed is the #1 rated waterproofing specialist." />
        <meta property="og:url" content="https://sydneyseal.com.au/testimonials" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6 animate-fade-in">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:0.1s]">
              What Our Customers Say
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in [animation-delay:0.2s]">
              Don't just take our word for it. Here's what Sydney homeowners have to say about our waterproofing services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-primary-foreground animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-background" itemScope itemType="https://schema.org/ItemList">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-muted/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in relative"
                style={{ animationDelay: `${index * 0.05}s` }}
                itemScope
                itemType="https://schema.org/Review"
                itemProp="itemListElement"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                <div className="flex gap-1 mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed" itemProp="reviewBody">
                  "{testimonial.review}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{testimonial.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" />
                    <span itemProp="locationCreated">{testimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary mt-2">
                    <CheckCircle className="w-3 h-3" />
                    <span itemProp="name">{testimonial.service}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2" itemProp="datePublished">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Join Our Happy Customers?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the Sydney Sealed difference. Get a free quote today and see why we have hundreds of 5-star reviews.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Get Your Free Quote</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
