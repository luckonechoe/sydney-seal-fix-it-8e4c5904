
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Award, Users, Clock, CheckCircle, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every job comes with our 5 year warranty. We use only premium materials and proven techniques."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, communicate clearly, and deliver beyond expectations."
    },
    {
      icon: Target,
      title: "Precision Work",
      description: "Attention to detail in every project. No shortcuts, no compromises on quality."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time arrivals, clear timelines, and projects completed as promised."
    }
  ];

  const milestones = [
    { year: "2015", event: "Founded in Sydney with a mission to revolutionize waterproofing services" },
    { year: "2017", event: "Expanded services to include antimicrobial grout technology" },
    { year: "2019", event: "Reached 500+ successful project completions across Greater Sydney" },
    { year: "2021", event: "Introduced eco-friendly waterproofing solutions" },
    { year: "2023", event: "Celebrated 1000+ happy customers with 5-star reviews" },
    { year: "2024", event: "Launched comprehensive reconstruction and balcony services" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Sydney Sealed | Professional Waterproofing Experts Sydney</title>
        <meta name="description" content="Learn about Sydney Sealed - Sydney's trusted waterproofing and leak repair specialists. Over 1000+ successful projects, 5 year warranty, and a commitment to excellence." />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in [animation-delay:0.1s]">
              Sydney's Most Trusted <span className="text-primary">Waterproofing</span> Experts
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in [animation-delay:0.2s]">
              Since 2015, we've been protecting Sydney homes with expert craftsmanship, innovative solutions, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Sydney Sealed, we believe every home deserves professional-grade waterproofing protection. Our mission is to deliver lasting solutions that protect your most valuable investment - your home.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We combine traditional craftsmanship with modern technology, including antimicrobial treatments that prevent mould and bacteria growth for years to come.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">1000+ Projects</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">5 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Licensed & Insured</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in [animation-delay:0.2s]">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                    <div className="text-4xl font-bold text-primary mb-2">9+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                    <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every project we undertake and every customer interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-background p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of growth, innovation, and customer success.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20"></div>
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} pl-12 md:pl-0`}>
                    <div className="bg-background p-6 rounded-xl shadow-sm border border-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <p className="text-foreground mt-2">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow"></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join over 1000+ satisfied Sydney homeowners who trust us with their waterproofing needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
