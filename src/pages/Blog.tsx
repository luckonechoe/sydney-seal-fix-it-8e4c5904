
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 'signs-shower-leak',
      title: "7 Warning Signs Your Shower Has a Hidden Leak",
      excerpt: "Learn to spot the early indicators of a shower leak before it causes expensive structural damage to your Sydney home.",
      category: "Leak Detection",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop",
      featured: true
    },
    {
      id: 'antimicrobial-grout-benefits',
      title: "Why Antimicrobial Grout is Worth the Investment",
      excerpt: "Discover how antimicrobial grout technology prevents mould growth and keeps your bathroom healthier for years.",
      category: "Technology",
      date: "December 10, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=500&fit=crop",
      featured: false
    },
    {
      id: 'balcony-waterproofing-guide',
      title: "The Complete Guide to Balcony Waterproofing in Sydney",
      excerpt: "Everything Sydney homeowners need to know about protecting their balconies from water damage.",
      category: "Guides",
      date: "December 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
      featured: true
    },
    {
      id: 'bathroom-renovation-mistakes',
      title: "5 Costly Bathroom Renovation Mistakes to Avoid",
      excerpt: "Don't let these common errors turn your dream bathroom into a waterproofing nightmare.",
      category: "Advice",
      date: "November 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=500&fit=crop",
      featured: false
    },
    {
      id: 'waterproofing-membrane-explained',
      title: "Waterproofing Membranes Explained: What's Under Your Tiles?",
      excerpt: "A simple guide to understanding the crucial waterproofing layer that protects your home.",
      category: "Education",
      date: "November 20, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
      featured: false
    },
    {
      id: 'seasonal-maintenance-tips',
      title: "Seasonal Bathroom Maintenance: A Sydney Homeowner's Checklist",
      excerpt: "Keep your wet areas in top condition year-round with these simple maintenance tasks.",
      category: "Maintenance",
      date: "November 15, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&h=500&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "Leak Detection", "Technology", "Guides", "Advice", "Education", "Maintenance"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog | Waterproofing Tips & Guides - Sydney Sealed</title>
        <meta name="description" content="Expert waterproofing tips, guides, and advice from Sydney Sealed. Learn about leak detection, bathroom maintenance, and waterproofing best practices." />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Waterproofing Tips & Insights
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in [animation-delay:0.1s]">
              Expert advice to help you protect your Sydney home from water damage
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-muted/30 border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === "All" 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group bg-muted/30 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group bg-background rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Tag className="w-3 h-3" />
                    {post.category}
                    <span>•</span>
                    {post.readTime}
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get Expert Tips in Your Inbox</h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter for waterproofing tips, maintenance reminders, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-muted-foreground"
              />
              <button className="px-6 py-3 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
