import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import ElevationScroll from './ElevationScroll';
import { Simulate } from 'react-dom/test-utils';

const useStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: theme.palette.common.white,
  },
  logo: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    height: '36px',
  },
  centerLogo: {
    height: '50px',
  },
  title: {
    flexGrow: 1,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(3),
  },
}));

interface MenuObject {
  label: string;
  id?: string;
  path?: string;
  order: number;
}

interface Props {
  menu: {
    [key: string]: MenuObject;
  };
}

const scrollToId = id => {
  const element = document.getElementById(id);
  window.scrollTo(0, element.offsetTop - 60);
}; // General scroll to element function

const TopBar: React.FC<Props> = ({ menu }) => {
  const classes = useStyles(undefined);

  return (
    <ElevationScroll>
      <AppBar color="default" classes={{ colorDefault: classes.bar }}>
        <Toolbar className={classes.topBar}>
          <img
            src="/textLogo.svg"
            alt="Company Name"
            className={classes.logo}
          />
          <img src="/logo.svg" alt="Logo" className={classes.centerLogo} />
          <div className={classes.right}>
            {Object.entries(menu)
              .sort(([key1, item1], [key2, item2]) => item2.order - item1.order)
              .map(([key, item]) => (
                <Link
                  variant="h6"
                  underline="hover"
                  className={classes.rightLink}
                  onClick={item.id ? () => scrollToId(item.id) : null}
                  key={key}
                  component={'a'}
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default TopBar;
