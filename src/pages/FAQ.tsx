
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What areas do you service in Sydney?",
          answer: "We service all of Greater Sydney including the Inner West, Eastern Suburbs, North Shore, Northern Beaches, Hills District, South Sydney, Sutherland Shire, and Western Sydney. If you're unsure whether we cover your area, just give us a call!"
        },
        {
          question: "Are you licensed and insured?",
          answer: "Yes, Sydney Seal is fully licensed and insured. We hold all required certifications for waterproofing work in NSW, and our comprehensive insurance protects both our team and your property."
        },
        {
          question: "Do you offer emergency services?",
          answer: "Absolutely! We understand that leaks can't wait. We offer 24/7 emergency call-out services for urgent water damage situations. Call us anytime for immediate assistance."
        },
        {
          question: "What warranty do you provide?",
          answer: "All our waterproofing work comes with a comprehensive 5 year warranty covering both materials and workmanship. This gives you complete peace of mind that your investment is protected."
        }
      ]
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          question: "How much does shower leak repair cost?",
          answer: "Shower leak repairs typically start from $749, depending on the extent of damage and the solution required. We provide free, no-obligation quotes so you know exactly what to expect before any work begins."
        },
        {
          question: "Do you offer free quotes?",
          answer: "Yes! All our quotes are completely free with no obligation. We'll inspect your property, diagnose the issue, and provide a detailed written quote outlining all costs and the recommended solution."
        },
        {
          question: "What's included in a full bathroom re-tile?",
          answer: "Our full re-tile service includes removal of old tiles, substrate inspection and repair, professional waterproofing membrane application, new tile installation, premium antimicrobial grout, and complete sealing. Everything you need for a like-new bathroom."
        },
        {
          question: "How long does a typical repair take?",
          answer: "Most shower leak repairs can be completed in 1-2 days. Full bathroom re-tiles typically take 3-5 days. We'll provide you with a clear timeline during your quote consultation."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "What is antimicrobial grout?",
          answer: "Antimicrobial grout contains special additives that inhibit the growth of mould, mildew, and bacteria. This keeps your bathroom cleaner and healthier for longer, reducing maintenance and extending the life of your grout."
        },
        {
          question: "How can I tell if I have a shower leak?",
          answer: "Common signs include: water stains on ceilings below bathrooms, musty odours, peeling paint or wallpaper, loose tiles, mould growth around shower edges, or damaged skirting boards. If you notice any of these, contact us for an inspection."
        },
        {
          question: "What causes balcony leaks?",
          answer: "Balcony leaks are commonly caused by: failed waterproofing membranes, cracked grout or tiles, poor drainage, incorrect falls (slope), or deteriorated sealants around edges and drains. Our inspection will identify the exact cause."
        },
        {
          question: "Can you repair without removing all tiles?",
          answer: "In many cases, yes! Our non-invasive repair techniques can fix leaks without the need for full tile removal. We'll assess your situation and recommend the most cost-effective solution that provides lasting results."
        }
      ]
    },
    {
      category: "Process & Preparation",
      questions: [
        {
          question: "Do I need to prepare anything before your visit?",
          answer: "For an inspection, just ensure access to the affected area. For repair work, we recommend removing personal items from the bathroom. We'll cover everything else to protect your home during the work."
        },
        {
          question: "Can I use my bathroom during repairs?",
          answer: "This depends on the scope of work. Minor repairs may allow limited use, but for waterproofing work, we typically need the area to cure for 24-48 hours. We'll always discuss this with you beforehand."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfer, credit cards (Visa, Mastercard, Amex), and offer payment plans for larger projects. A deposit is required for full re-tile projects, with the balance due upon completion."
        },
        {
          question: "How do I book a quote?",
          answer: "You can book a free quote by calling us directly, filling out our online contact form, or sending us an email. We aim to schedule inspections within 48 hours of your enquiry."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Waterproofing FAQs Sydney | Costs, Process & Warranty | Sydney Seal</title>
        <meta name="description" content="Get answers to the most common questions about shower leak repair, balcony waterproofing, costs (from $749), timelines, and our 5-year warranty. Sydney Seal — fully licensed professionals." />
        <meta name="keywords" content="waterproofing FAQ Sydney, shower leak repair cost Sydney, how long does waterproofing take, waterproofing warranty Sydney, leaking shower questions, balcony waterproofing cost" />
        <link rel="canonical" href="https://sydneyseal.com.au/faq" />
        <meta property="og:title" content="Waterproofing FAQs Sydney | Sydney Seal" />
        <meta property="og:description" content="Answers to the most common waterproofing questions — costs, timelines, warranties, and more. Sydney's trusted experts." />
        <meta property="og:url" content="https://sydneyseal.com.au/faq" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in [animation-delay:0.1s]">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in [animation-delay:0.2s]">
              Everything you need to know about our waterproofing services. Can't find what you're looking for? Give us a call!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12 animate-fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${catIndex}-${index}`}
                      className="bg-muted/30 rounded-lg px-6 border-none"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our friendly team is here to help. Get in touch and we'll answer any questions you have about your waterproofing project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get a Free Quote</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:0421043444" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call 0421 043 444
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
