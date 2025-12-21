import { Helmet } from 'react-helmet-async';

interface SEOStructuredDataProps {
  page?: 'home' | 'service' | 'contact' | 'about' | 'faq';
  serviceName?: string;
  serviceDescription?: string;
}

const SEOStructuredData = ({ page = 'home', serviceName, serviceDescription }: SEOStructuredDataProps) => {
  // LocalBusiness Schema - Core business information for E-E-A-T
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sydneyseal.com.au/#business",
    "name": "Sydney Seal",
    "alternateName": "Sydney Seal Waterproofing",
    "description": "Sydney's trusted waterproofing and leak repair specialists. Licensed professionals providing shower leak repair, balcony waterproofing, and bathroom restoration with 5-year warranty. AS3740 certified, same-day emergency service across all Sydney suburbs.",
    "url": "https://sydneyseal.com.au",
    "telephone": "+61412345678",
    "email": "info@sydneysealgrout.com.au",
    "image": "https://sydneyseal.com.au/og-image.jpg",
    "logo": "https://sydneyseal.com.au/logo.png",
    "priceRange": "$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer, EFTPOS",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.8688",
      "longitude": "151.2093"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney",
        "containedIn": "New South Wales"
      },
      { "@type": "AdministrativeArea", "name": "Eastern Suburbs Sydney" },
      { "@type": "AdministrativeArea", "name": "North Shore Sydney" },
      { "@type": "AdministrativeArea", "name": "Inner West Sydney" },
      { "@type": "AdministrativeArea", "name": "Northern Beaches Sydney" },
      { "@type": "AdministrativeArea", "name": "Hills District Sydney" },
      { "@type": "AdministrativeArea", "name": "Sutherland Shire" },
      { "@type": "AdministrativeArea", "name": "Western Sydney" },
      { "@type": "AdministrativeArea", "name": "Parramatta" },
      { "@type": "AdministrativeArea", "name": "Blacktown" },
      { "@type": "AdministrativeArea", "name": "Penrith" },
      { "@type": "AdministrativeArea", "name": "Liverpool" },
      { "@type": "AdministrativeArea", "name": "Campbelltown" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Waterproofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shower Leak Repair Sydney",
            "description": "Professional shower leak repair without tile removal. Non-invasive waterproofing technology with same-day service and 5-year warranty."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Balcony Waterproofing Sydney",
            "description": "Complete balcony leak repair and waterproofing. UV-resistant, weather-proof solutions for Sydney balconies with efflorescence-free guarantee."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Restoration Sydney",
            "description": "Full bathroom waterproofing and restoration services. AS3740 certified workmanship with antimicrobial silver-ion technology."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Excellent work fixing our shower leak without removing tiles. Professional team, clean work, and the warranty gives us peace of mind.",
        "datePublished": "2024-10-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "James T."
        },
        "reviewBody": "Sydney Seal fixed our balcony leak that other companies couldn't solve. Highly recommend their expertise and professionalism.",
        "datePublished": "2024-09-28"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/sydneyseal",
      "https://www.instagram.com/sydneyseal"
    ],
    "founder": {
      "@type": "Person",
      "name": "Sydney Seal Team"
    },
    "foundingDate": "2015",
    "slogan": "Sydney's Trusted Waterproofing Experts",
    "knowsAbout": [
      "Waterproofing",
      "Shower Leak Repair",
      "Balcony Waterproofing",
      "Bathroom Restoration",
      "Grout Sealing",
      "Antimicrobial Treatment",
      "AS3740 Compliance",
      "Silver-Ion Technology"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Licensed Waterproofer NSW"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "AS3740 Certified"
      }
    ]
  };

  // Service Schema for specific service pages
  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sydney Seal",
      "telephone": "+61412345678"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName
          }
        }
      ]
    }
  } : null;

  // FAQ Schema for common questions (helps with AI overviews)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does shower leak repair cost in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional shower leak repair in Sydney typically starts from $749 for minor repairs. The final cost depends on the severity of the leak and the size of the shower area. Sydney Seal provides free assessments and transparent pricing with no hidden fees. Our non-invasive repair method often costs 70% less than full tile replacement."
        }
      },
      {
        "@type": "Question",
        "name": "Can you fix a shower leak without removing tiles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Sydney Seal specialises in non-invasive shower leak repair that doesn't require tile removal. Our advanced sealing technology penetrates existing grout and surfaces to create a waterproof barrier. This method is faster, less disruptive, and more cost-effective than traditional tile replacement, with results backed by our 5-year warranty."
        }
      },
      {
        "@type": "Question",
        "name": "How long does waterproofing repair take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most shower and bathroom leak repairs are completed in a single day. Sydney Seal offers same-day service for urgent repairs. The waterproofing cures within 24-48 hours, and your shower can typically be used again the following day. Larger projects like balcony waterproofing may take 2-3 days depending on size and condition."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Sydney do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sydney Seal services all of Greater Sydney including Eastern Suburbs, North Shore, Inner West, Northern Beaches, Hills District, Sutherland Shire, Western Sydney, Parramatta, Blacktown, Penrith, Liverpool, Campbelltown, and surrounding areas. We offer same-day emergency service across all Sydney suburbs."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty do you offer on waterproofing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sydney Seal provides a comprehensive 5-year warranty on all waterproofing repairs and restoration work. All our work is AS3740 certified and meets Australian Standards for waterproofing wet areas. We also offer annual maintenance programs to ensure long-lasting protection for your investment."
        }
      },
      {
        "@type": "Question",
        "name": "What is silver-ion antimicrobial technology?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Silver-ion antimicrobial technology uses embedded silver nanoparticles that provide continuous protection against mould, mildew, and bacteria. Sydney Seal applies this technology during waterproofing and regrouting to create surfaces that resist microbial growth permanently. This is especially beneficial for wet areas prone to mould in Sydney's humid climate."
        }
      }
    ]
  };

  // WebSite Schema for sitelinks
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sydney Seal",
    "url": "https://sydneyseal.com.au",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sydneyseal.com.au/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sydneyseal.com.au"
      },
      ...(page !== 'home' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": page.charAt(0).toUpperCase() + page.slice(1),
        "item": `https://sydneyseal.com.au/${page}`
      }] : [])
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOStructuredData;
