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
    "name": "Sydney Sealed",
    "alternateName": "Sydney Sealed Waterproofing",
    "description": "Sydney's trusted waterproofing and leak repair specialists. Fully licensed professionals providing shower leak repair, balcony waterproofing, and bathroom restoration with 5-year warranty. Same-day emergency service across all Sydney suburbs.",
    "url": "https://sydneysealed.com.au",
    "telephone": "+61421043444",
    "email": "info@sydneysealgrout.com.au",
    "image": "https://sydneysealed.com.au/og-image.jpg",
    "logo": "https://sydneysealed.com.au/logo.png",
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
            "description": "Full bathroom waterproofing and restoration services. Licensed professional workmanship with antimicrobial silver-ion technology."
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
        "reviewBody": "Sydney Sealed fixed our balcony leak that other companies couldn't solve. Highly recommend their expertise and professionalism.",
        "datePublished": "2024-09-28"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/sydneyseal",
      "https://www.instagram.com/sydneyseal"
    ],
    "founder": {
      "@type": "Person",
      "name": "Sydney Sealed Waterproofing Team",
      "jobTitle": "Licensed Waterproofer NSW"
    },
    "foundingDate": "2015",
    "slogan": "Sydney's #1 Rated Waterproofing Specialists",
    "knowsAbout": [
      "Waterproofing",
      "Shower Leak Repair",
      "Balcony Waterproofing",
      "Bathroom Restoration",
      "Grout Sealing",
      "Antimicrobial Treatment",
      "Silver-Ion Technology",
      "Non-Invasive Leak Repair"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Licensed Waterproofer NSW — Lic. 482739W"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "insurance",
        "name": "$20M Public Liability Insurance"
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
      "name": "Sydney Sealed",
      "telephone": "+61421043444"
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

  // FAQ Schema for common questions (helps with AI overviews and People Also Ask)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does shower leak repair cost in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional shower leak repair in Sydney starts from $749 for minor repairs using non-invasive methods. The final cost depends on the severity of the leak and size of the shower. Sydney Sealed provides free on-site assessments with transparent written quotes. Our non-invasive repair method typically costs 70% less than full tile replacement."
        }
      },
      {
        "@type": "Question",
        "name": "Can you fix a shower leak without removing tiles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — Sydney Sealed specialises in non-invasive shower leak repair that doesn't require tile removal. Our advanced sealing technology penetrates existing grout and surfaces to create a waterproof barrier from within. This method is faster, cleaner, and far less expensive than traditional tile replacement, with a 5-year written warranty included."
        }
      },
      {
        "@type": "Question",
        "name": "How long does waterproofing repair take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most shower and bathroom leak repairs are completed in a single day. Sydney Sealed offers same-day service for urgent repairs. The waterproofing cures within 24–48 hours and your shower can typically be used again the next day. Larger balcony waterproofing projects may take 2–3 days."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Sydney do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sydney Sealed services all of Greater Sydney including Eastern Suburbs (Bondi, Randwick, Paddington), North Shore (Chatswood, Mosman, Neutral Bay), Inner West (Newtown, Marrickville), Northern Beaches (Manly, Dee Why), Hills District, Sutherland Shire, Western Sydney (Parramatta, Blacktown, Penrith, Liverpool), Campbelltown and all surrounding suburbs."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty do you offer on waterproofing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sydney Sealed provides a 5-year written warranty on all waterproofing repairs, covering both materials and workmanship. This is a formal written guarantee — not just a verbal promise. All work is carried out by fully licensed NSW waterproofers (Lic. 482739W), backed by $20M public liability insurance."
        }
      },
      {
        "@type": "Question",
        "name": "What is silver-ion antimicrobial waterproofing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Silver-ion antimicrobial technology embeds silver nanoparticles into waterproofing grout and sealants, providing continuous protection against mould, mildew, and bacteria. Unlike surface treatments that wear off, silver-ion protection is built into the material permanently. It's clinically proven to eliminate 99.9% of harmful microorganisms and is especially effective in Sydney's humid climate."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my balcony is leaking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key signs of a balcony leak include: water stains on the ceiling of the room below, efflorescence (white salt deposits) on the slab edge, standing water after rain, cracked or hollow tiles, rust stains from rebar, and mould on adjacent walls. If you notice any of these in Sydney, contact Sydney Sealed for a free inspection."
        }
      },
      {
        "@type": "Question",
        "name": "Is Sydney Sealed licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sydney Sealed holds NSW Waterproofing Licence 482739W and carries $20M public liability insurance. All work is completed by licensed professionals and meets Australian Standards for waterproofing of wet areas in residential and commercial buildings."
        }
      }
    ]
  };

  // WebSite Schema for sitelinks
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sydney Sealed",
    "url": "https://sydneysealed.com.au",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sydneysealed.com.au/search?q={search_term_string}",
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
        "item": "https://sydneysealed.com.au"
      },
      ...(page !== 'home' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": page.charAt(0).toUpperCase() + page.slice(1),
        "item": `https://sydneysealed.com.au/${page}`
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
