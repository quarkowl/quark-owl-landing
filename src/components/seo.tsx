import * as React from 'react';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../hooks';

type Props = {
  customTitle?: string;
  customDescription?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
};

const Seo = ({ customTitle = ``, customDescription = ``, pathname = ``, image = ``, children = null }: Props) => {
  const site = useSiteMetadata();

  const { title, short_name, theme_color, url, description: defaultDescription, author } = site;

  const seo = {
    title: customTitle ? `${customTitle} | ${short_name}` : title,
    description: customDescription || defaultDescription,
    url: `${url}${pathname || ``}`,
    image: `${url}${image || author.photo}`,
  };
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="theme-color" content={theme_color} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author.name} />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon-32x32.png`)} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon-16x16.png`)} />
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/apple-touch-icon.png`)} />
      {children}
    </Helmet>
  );
};

export default Seo;
