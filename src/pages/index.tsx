import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Parallax } from '@react-spring/parallax';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Process from '../components/process';
import SuccessStories from '../components/success-stories';
import About from '../components/about';
import Contact from '../components/contact';
import Seo from '../components/seo';
import { useSiteMetadata, useTAndCDialog } from '../hooks';
import '../index.css';
import ThemeToggle from '../components/themeToggle';
import Logo from '../components/logo';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'theme-ui';

const IndexPage: React.FC<PageProps> = () => {
  const [isDialogOpen, setIsDialogOpen] = useTAndCDialog();

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <React.Fragment>
      <Layout>
        <Parallax pages={7}>
          <Logo />
          <Hero offset={0} factor={1} />
          <SuccessStories offset={1} factor={1} />
          <Projects offset={2} factor={1} />
          <Process offset={3.5} factor={1} />
          <About offset={4.5} factor={1} />
          <Contact offset={5} factor={1} />
        </Parallax>
      </Layout>
      <CookieConsent location="bottom">
        This website uses cookies to enhance the user experience. Please read our{' '}
        <Link color="secondary" onClick={() => setIsDialogOpen(true)}>
          Privacy Policy
        </Link>
      </CookieConsent>
    </React.Fragment>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
