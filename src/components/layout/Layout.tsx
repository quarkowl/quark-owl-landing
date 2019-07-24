import * as React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from './TopBar';
import Footer from './Footer';
import { useSiteMetadata, useTAndCDialog } from '../../hooks';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TAndC from '../t-and-c/TAndC';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import SEO from '../seo/SEO';
import CookieConsent from 'react-cookie-consent';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    // height of the AppBar
    // marginTop: theme.spacing(14),
    margin: 0,
    padding: 0,
    maxWidth: '100vw',
  },
  placeHolder: {
    flex: 1,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles(undefined);
  const [isDialogOpen, setIsDialogOpen] = useTAndCDialog();
  const { menu } = useSiteMetadata();

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <React.Fragment>
      <SEO />
      <TopBar menu={menu} />
      <Container className={classes.pageContainer}>{children}</Container>
      <Divider />
      <Footer />
      <Dialog
        onClose={handleCloseDialog}
        aria-labelledby="privacy-policy-dialog"
        open={isDialogOpen}
      >
        <DialogTitle id="privacy-policy-dialog">Privacy Policy</DialogTitle>
        <DialogContent dividers={true}>
          <TAndC />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <CookieConsent location="bottom">
        This website uses cookies to enhance the user experience. Please read
        our{' '}
        <Link
          component="a"
          variant="h6"
          underline="hover"
          color="secondary"
          onClick={() => setIsDialogOpen(true)}
        >
          Privacy Policy
        </Link>
      </CookieConsent>
    </React.Fragment>
  );
}
