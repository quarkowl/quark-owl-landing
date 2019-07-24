import * as React from 'react';
import NotFound from '../components/not-found/NotFound';
import SEO from '../components/seo/SEO';

export default () => {
  return (
    <React.Fragment>
      <SEO title="Quark Owl LTD - Not Found"/>
      <NotFound />
    </React.Fragment>
  );
};
