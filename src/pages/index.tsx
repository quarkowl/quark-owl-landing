import * as React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import TechnologyList from '../components/technology-list/TechnologyList';
import ContactForm from '../components/contact-form/ContactForm';
import { useSiteMetadata } from '../hooks';

export default () => {
  const { contactFormUrl, menu } = useSiteMetadata();

  return (
    <Layout>
      <Hero />
      <About id={menu.services.id} />
      <TechnologyList id={menu.technologies.id} />
      <ContactForm url={contactFormUrl} />
    </Layout>
  );
};
