// @flow
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            url
            title
            short_name
            subtitle
            copyright
            disqusShortname
            contactFormUrl
            author {
              name
              photo
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
