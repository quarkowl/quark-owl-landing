// @flow
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = (): {
  url: string;
  title: string;
  short_name: string;
  description: string;
  theme_color: string;
  copyright: string;
  disqusShortname: string;
  contactFormUrl: string;
  author: {
    name: string;
    photo: string;
    contacts: {
      email: string;
      twitter: string;
      github: string;
      rss: string;
    };
  };
  menu: {
    contact: {
      id: string;
      label: string;
      order: number;
    };
    services: {
      id: string;
      label: string;
      order: number;
    };
    technologies: {
      id: string;
      label: string;
      order: number;
    };
  };
} => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            url
            title
            short_name
            description
            theme_color
            copyright
            disqusShortname
            contactFormUrl
            author {
              name
              photo
              contacts {
                email
                twitter
                github
                rss
              }
            }
            menu {
              contact {
                id
                label
                order
              }
              services {
                id
                label
                order
              }
              technologies {
                id
                label
                order
              }
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
