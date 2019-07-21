import * as React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  topBarElevated: {
    height: '75px',
    zoom: 0.8,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(),
    color: theme.palette.common.black,
  },
  topBar: {
  }
}));

const ElevationScroll: React.FC = props => {
  const { children } = props;
  const classes = useStyles(undefined);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });


  return React.cloneElement(children as React.ReactElement<any>, {
    elevation: trigger ? 4 : 1,
    className: [trigger ? classes.topBarElevated : null, classes.topBar].join(' '),
  });
};

export default ElevationScroll;
