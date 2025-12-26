
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogContent: Record<string, any> = {
  'signs-shower-leak': {
    title: "7 Warning Signs Your Shower Has a Hidden Leak",
    excerpt: "Learn to spot the early indicators of a shower leak before it causes expensive structural damage to your Sydney home.",
    category: "Leak Detection",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=600&fit=crop",
    content: `
      <p class="lead">Shower leaks are one of the most common and potentially destructive issues Sydney homeowners face. The challenge is that many leaks remain hidden for months or even years, silently causing damage behind walls and under floors.</p>
      
      <h2>1. Musty or Mouldy Odours</h2>
      <p>If you notice a persistent damp, musty smell in your bathroom that doesn't go away even after cleaning and ventilating, it's a strong indicator of hidden moisture. This smell comes from mould and mildew growing in areas you can't see.</p>
      
      <h2>2. Peeling or Bubbling Paint</h2>
      <p>Water seeping behind walls causes paint to lose adhesion. Look for peeling, bubbling, or flaking paint near your shower, especially at lower levels where water tends to accumulate.</p>
      
      <h2>3. Discoloured or Stained Walls</h2>
      <p>Yellow, brown, or dark stains on walls adjacent to your shower indicate water damage. These stains often appear on the other side of the shower wall or on ceilings below bathrooms.</p>
      
      <h2>4. Loose or Hollow-Sounding Tiles</h2>
      <p>Tap on your shower tiles. If they sound hollow or feel loose, water may have compromised the adhesive or substrate underneath. This is particularly common in the corners and at the base of the shower.</p>
      
      <h2>5. Cracked or Missing Grout</h2>
      <p>Grout deterioration is both a cause and symptom of leaks. Cracked, crumbling, or missing grout allows water to penetrate behind tiles, leading to larger problems.</p>
      
      <h2>6. Water Stains on Ceiling Below</h2>
      <p>If your bathroom is above another room, check the ceiling below for water stains. Even small brown rings indicate water is escaping from your bathroom.</p>
      
      <h2>7. Warped or Damaged Flooring</h2>
      <p>Water escaping from your shower can damage adjacent flooring. Look for warping, buckling, or soft spots in timber floors, or lifting in vinyl or tiles near the shower.</p>
      
      <h2>What to Do If You Spot These Signs</h2>
      <p>If you notice any of these warning signs, don't delay action. Water damage compounds quickly, and what starts as a minor repair can become a major renovation. Contact a professional waterproofing specialist for an inspection. At Sydney Sealed, we offer free inspections and can identify the source of leaks using non-invasive testing methods.</p>
      
      <p>Early detection and repair can save you thousands of dollars and prevent health issues associated with mould exposure. Our repair solutions come with a 5 year warranty, giving you lasting peace of mind.</p>
    `
  },
  'antimicrobial-grout-benefits': {
    title: "Why Antimicrobial Grout is Worth the Investment",
    excerpt: "Discover how antimicrobial grout technology prevents mould growth and keeps your bathroom healthier for years.",
    category: "Technology",
    date: "December 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=600&fit=crop",
    content: `
      <p class="lead">When it comes to bathroom renovations, grout might not be the most exciting topic, but choosing the right grout can make a significant difference in your bathroom's longevity and hygiene.</p>
      
      <h2>What is Antimicrobial Grout?</h2>
      <p>Antimicrobial grout contains special additives that inhibit the growth of bacteria, mould, and mildew on the grout surface. These additives are built into the grout material itself, providing long-lasting protection that doesn't wash away over time.</p>
      
      <h2>Benefits of Antimicrobial Grout</h2>
      
      <h3>1. Healthier Bathroom Environment</h3>
      <p>Traditional grout is porous and provides an ideal environment for bacteria and mould to thrive. Antimicrobial grout actively prevents these organisms from colonising, creating a healthier space for your family.</p>
      
      <h3>2. Easier Maintenance</h3>
      <p>Because mould and mildew can't establish themselves on antimicrobial grout, cleaning becomes much easier. You'll spend less time scrubbing and can use milder cleaning products.</p>
      
      <h3>3. Long-Lasting Appearance</h3>
      <p>Mould staining is one of the main reasons bathroom grout looks dirty and discoloured. With antimicrobial protection, your grout stays cleaner and maintains its original colour for much longer.</p>
      
      <h3>4. Reduced Odours</h3>
      <p>That musty bathroom smell often comes from bacterial and mould growth in grout. Eliminating these organisms means a fresher-smelling bathroom.</p>
      
      <h2>Is It Worth the Extra Cost?</h2>
      <p>Antimicrobial grout typically costs 20-30% more than standard grout. However, when you factor in the reduced cleaning effort, longer lifespan, and health benefits, most homeowners find it's money well spent.</p>
      
      <p>At Sydney Sealed, we use premium antimicrobial grout as standard on all our re-tile and restoration projects. Combined with our professional waterproofing, it's part of our commitment to delivering bathrooms that stay beautiful and healthy for years to come.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogContent[slug || ''];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.title} | Sydney Sealed Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://yourdomain.com/blog/${slug}`} />
      </Helmet>
      
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Article Content */}
      <article className="relative -mt-32 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-xl shadow-xl p-6 md:p-10">
              {/* Back Link */}
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                {post.title}
              </h1>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-h2:mt-8 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share */}
              <div className="border-t border-border mt-10 pt-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="font-medium text-foreground">Share this article:</span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary/10 rounded-xl p-6 mt-10 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Need Professional Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our expert team is ready to help with all your waterproofing needs.
                </p>
                <Button asChild>
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="py-16"></div>

      <Footer />
    </div>
  );
};

export default BlogPost;
