import * as React from 'react';
import { get, Button, Link } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { Global } from '@emotion/react';
import CookieConsent from 'react-cookie-consent';
import MdxComponents from './mdx-components';
import Logo from './themeToggle';
import ThemeToggle from './themeToggle';
import { useDialog } from '../hooks';
import DialogEl from './Dialog/Dialog';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = `` }: LayoutProps) => {
  const [dialogType, setDialogType] = useDialog();

  const handleCloseDialog = () => {
    setDialogType(null);
  };

  return (
    <React.Fragment>
      <Global
        styles={(t) => ({
          '*': {
            boxSizing: `inherit`,
            '&:before': {
              boxSizing: `inherit`,
            },
            '&:after': {
              boxSizing: `inherit`,
            },
          },
          '[hidden]': {
            display: `none`,
          },
          '::selection': {
            backgroundColor: get(t, `colors.primary`),
            color: get(t, `colors.background`),
          },
        })}
      />
      <DialogEl dialogType={dialogType} onClose={handleCloseDialog} />
      <MDXProvider components={MdxComponents}>
        <ThemeToggle />
        <main className={className}>{children}</main>
      </MDXProvider>
    </React.Fragment>
  );
};

export default Layout;
