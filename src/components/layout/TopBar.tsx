import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import ElevationScroll from './ElevationScroll';
import MenuComponent from '../menu/Menu';

const useStyles = makeStyles(theme => ({
  bar: {
    backgroundColor: theme.palette.common.white,
  },
  topBarContainer: {
    flex: 1,
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

const TopBar: React.FC<Props> = ({ menu }) => {
  const classes = useStyles(undefined);

  return (
    <ElevationScroll>
      <AppBar color="default" classes={{ colorDefault: classes.bar }}>
        <Toolbar className={classes.topBar}>
          <div className={classes.topBarContainer}>
            <img
              src="/textLogo.svg"
              alt="Company Name"
              className={classes.logo}
            />
          </div>
          <img src="/logo.svg" alt="Logo" className={classes.centerLogo} />
          <div className={classes.topBarContainer}>
            <MenuComponent menu={menu}/>
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default TopBar;
