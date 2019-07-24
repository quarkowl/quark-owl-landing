import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../hooks';

interface Props {
  title?: string;
}

const SEO: React.FC<Props> = ({ title }) => {
  const {
    title: defaultTitle,
    description,
    theme_color,
    url,
    author,
  } = useSiteMetadata();
  const siteTitle = title || defaultTitle;
  const image = `${url}${author.photo}`;
  return (
    <div>
      s
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="msapplication-TileColor" content={theme_color} />
        <meta name="theme-color" content={theme_color} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={author.contacts.twitter} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </div>
  );
};

export default SEO;
