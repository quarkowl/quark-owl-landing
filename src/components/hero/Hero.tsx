import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { graphql, StaticQuery } from 'gatsby';
import styles from './Hero.module.scss';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  heroContent: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    padding: theme.spacing(6),
    height: '50vh',
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    maxWidth: '100vw',
    fontStyle: 'justify'
  },
}));

export default function AppFooter() {
  const classes = useStyles(undefined);

  return (
    <Container className={classes.heroContent} component="main">
      <Typography
        variant="h2"
        component="h1"
        gutterBottom={true}
        align="center"
      >
        Javascript Consulting!
      </Typography>
      <Typography
        variant="h5"
        align="center"
        component="p"
      >
        Need custom solution for your company? Workshop? Consultation? We're here to help.
      </Typography>
      <div className={styles.backgroundContainer}>
        <div className={styles.backgroundImage} />
      </div>
    </Container>
  );
}
