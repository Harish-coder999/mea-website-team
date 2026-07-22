import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'Event' | 'WebSite';
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: data.name || "Mechnotron2k26",
          url: data.url || "https://mechnotron2k26.citmea.in",
          logo: data.logo || "https://mechnotron2k26.citmea.in/logos/2k26.png",
          description: data.description || "National-level technical symposium by CIT Mechanical Engineering Department",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN"
          },
          sameAs: data.socialMedia || [
            "https://www.linkedin.com/in/mea-cit-939522334",
            "https://www.instagram.com/mechnotron_2k26"
          ]
        };
      
      case 'Event':
        return {
          "@context": "https://schema.org",
          "@type": "Event",
          name: data.name,
          description: data.description,
          startDate: data.startDate,
          endDate: data.endDate,
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Coimbatore Institute of Technology",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN"
            }
          },
          image: data.image || "https://mechnotron2k26.citmea.in/logos/2k26.png",
          organizer: {
            "@type": "Organization",
            name: "Mechnotron2k26",
            url: "https://mechnotron2k26.citmea.in"
          }
        };
      
      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mechnotron2k26",
          url: "https://mechnotron2k26.citmea.in",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://mechnotron2k26.citmea.in/events?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
      
      default:
        return null;
    }
  };

  const schema = getSchema();
  
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
