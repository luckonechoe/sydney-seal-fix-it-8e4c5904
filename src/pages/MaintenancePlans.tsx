import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X, Phone, Shield, Building, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: 'Essential',
    price: 149,
    period: '/year',
    description: 'Basic protection for homeowners who want scheduled peace of mind.',
    features: [
      '2 scheduled inspections per year',
      'Visual condition reporting',
      'Standard scheduling (Mon–Fri)',
      'Email inspection summaries',
      '10% discount on repairs',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Annual',
    price: 249,
    period: '/year',
    description: 'Our most popular plan — comprehensive coverage with priority service.',
    features: [
      '4 scheduled inspections per year',
      'Priority emergency service (24/7)',
      '15% discount on all repairs',
      'Detailed photo inspection reports',
      'Minor sealing & grout touch-ups included',
      'Extended 5-year warranty on all work',
      'Reminder notifications before each visit',
    ],
    cta: 'Enroll Now',
    popular: true,
  },
  {
    name: 'Premium',
    price: 449,
    period: '/year',
    description: 'Maximum protection with monthly inspections and dedicated support.',
    features: [
      'Monthly inspections (12/year)',
      '24/7 priority emergency response',
      '25% discount on all repairs',
      'Thermal imaging leak detection',
      'Dedicated account manager',
      'Comprehensive digital reports',
      'All sealing & grout maintenance included',
      'Extended 5-year warranty on all work',
    ],
    cta: 'Go Premium',
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: 'Inspections per year', essential: '2', annual: '4', premium: '12' },
  { feature: 'Emergency service', essential: 'Business hours', annual: '24/7 priority', premium: '24/7 priority' },
  { feature: 'Repair discount', essential: '10%', annual: '15%', premium: '25%' },
  { feature: 'Photo reports', essential: false, annual: true, premium: true },
  { feature: 'Thermal imaging', essential: false, annual: false, premium: true },
  { feature: 'Minor sealing included', essential: false, annual: true, premium: true },
  { feature: 'Full grout maintenance', essential: false, annual: false, premium: true },
  { feature: 'Dedicated account manager', essential: false, annual: false, premium: true },
  { feature: 'Reminder notifications', essential: false, annual: true, premium: true },
  { feature: 'Extended 5-year warranty', essential: false, annual: true, premium: true },
];

const faqs = [
  {
    q: 'Can I cancel my plan at any time?',
    a: 'Yes — all our plans are no lock-in contracts. You can cancel at any time with 30 days notice and receive a pro-rata refund for any unused portion.',
  },
  {
    q: 'What areas does the inspection cover?',
    a: 'We inspect all waterproofed areas including showers, bathrooms, balconies, laundries, and any other wet areas in your property.',
  },
  {
    q: 'Do you service all of Sydney?',
    a: 'Yes — we service the entire Sydney metropolitan area including the Inner West, Eastern Suburbs, North Shore, Northern Beaches, South Sydney, and Western Sydney.',
  },
  {
    q: 'How do I sign up?',
    a: "Simply call us on 0421 043 444 or use the contact form on our website. We'll schedule your first inspection within 7 days of enrolment.",
  },
  {
    q: 'What happens if a leak is found during an inspection?',
    a: "We'll provide a detailed report with photos and a discounted repair quote. As a plan member, you receive priority scheduling and your plan discount on all repair work.",
  },
];

const MaintenancePlans = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Maintenance Plans Sydney - Preventative Leak Protection | Sydney Seal</title>
        <meta
          name="description"
          content="Choose from Essential, Annual or Premium preventative leak maintenance plans in Sydney. Regular inspections, priority repairs, and up to 25% off services. No lock-in contracts."
        />
        <meta
          name="keywords"
          content="maintenance plans Sydney, preventative maintenance plans, leak prevention plans, waterproofing maintenance subscription, strata maintenance Sydney"
        />
        <link rel="canonical" href="https://sydneyseal.lovable.app/maintenance-plans" />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-4 text-base px-4 py-2">Maintenance Plans</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Choose the Right Maintenance Plan for Your Property
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Protect your Sydney property year-round with scheduled inspections, priority repairs,
            and exclusive member discounts. No lock-in contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col relative ${
                  plan.popular ? 'border-primary shadow-lg scale-[1.03]' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 text-sm px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <a href="tel:0421043444" className="w-full">
                    <Button className="w-full" size="lg" variant={plan.popular ? 'default' : 'outline'}>
                      <Phone className="w-4 h-4 mr-2" />
                      {plan.cta}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            All plans are no lock-in contracts — cancel anytime with 30 days notice.
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-10">
            Compare Plans Side by Side
          </h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Essential</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">
                    <span className="flex items-center justify-center gap-2">
                      Annual <Badge variant="secondary" className="text-xs">Popular</Badge>
                    </span>
                  </th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-background' : ''}>
                    <td className="py-3 px-4 text-muted-foreground">{row.feature}</td>
                    {(['essential', 'annual', 'premium'] as const).map((tier) => (
                      <td key={tier} className="py-3 px-4 text-center">
                        {typeof row[tier] === 'boolean' ? (
                          row[tier] ? (
                            <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          )
                        ) : (
                          <span className="text-foreground text-sm font-medium">{row[tier]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom / Strata Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Custom Plans for Strata &amp; Commercial Properties
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Multi-unit buildings need tailored maintenance schedules. We design custom programs
                based on your building's age, size, and specific waterproofing needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { units: '10–50 Units', label: 'Small strata complexes' },
                { units: '50–200 Units', label: 'Medium residential buildings' },
                { units: '200+ Units', label: 'Large commercial properties' },
              ].map((tier) => (
                <Card key={tier.units} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{tier.units}</div>
                    <p className="text-sm text-muted-foreground">{tier.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.q}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Protect Your Property?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join hundreds of Sydney property owners who've chosen proactive leak prevention over
            costly emergency repairs. Enrol today — no lock-in contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0421043444">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0421 043 444
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Us Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaintenancePlans;
