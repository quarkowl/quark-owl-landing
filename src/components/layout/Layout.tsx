import * as React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from './TopBar';
import Footer from './Footer';
import { useSiteMetadata } from '../../hooks';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    // height of the AppBar
    // marginTop: theme.spacing(14),
    margin: 0,
    padding: 0,
    maxWidth: '100vw',
  },
  placeHolder: {
    flex: 1
  }
}));

export default function Layout({ children }) {
  const classes = useStyles(undefined);

  const { menu } = useSiteMetadata();

  return (
    <React.Fragment>
      <TopBar menu={menu} />
      <Container className={classes.pageContainer}>{children}</Container>
      <Divider />
      <Footer />
    </React.Fragment>
  );
};
