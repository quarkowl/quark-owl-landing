import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useSiteMetadata } from '../../hooks';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.grey['100'],
    padding: theme.spacing(6),
  },
}));

export default function AppFooter() {
  const { copyright, short_name } = useSiteMetadata();
  const classes = useStyles(undefined);

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom={true}>
        {short_name}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {copyright}
      </Typography>
    </footer>
  );
}
