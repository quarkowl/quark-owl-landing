import * as React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  link: {
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(3),
    cursor: 'pointer',
  },
  menuIcon: {
    color: theme.palette.primary.main,
    fontSize: `${theme.typography.h4.fontSize} !important`,
  },
  sideListItem: {
    fontSize: `${theme.typography.h5.fontSize} !important`,
    textAlign: 'right',
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
  drawer: {
    minWidth: '75vw',
  },
  selectedMenu: {
    textDecoration: 'underline',
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

const MenuComponent: React.FC<Props> = ({ menu }) => {
  const classes = useStyles(undefined);
  const isSmall = useMediaQuery('(max-width:960px)');
  const [state, setState] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer = (open, id?: string) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    if (id) {
      scrollToId(id);
      setSelectedIndex(id);
    }

    setState(open);
  };

  if (isSmall) {
    const sideList = () => (
      <div
        className={classes.drawer}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {Object.entries(menu)
            .sort(([key1, item1], [key2, item2]) => item2.order - item1.order)
            .map(([key, item]) => (
              <ListItem
                button={true}
                key={key}
                onClick={toggleDrawer(false, item.id)}
              >
                <ListItemText
                  primary={item.label}
                  disableTypography={true}
                  className={[
                    classes.sideListItem,
                    item.id === selectedIndex ? classes.selectedMenu : null,
                  ].join(' ')}
                />
              </ListItem>
            ))}
        </List>
      </div>
    );
    // @ts-ignore
    return (
      <div className={classes.container}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
        >
          <i className={['material-icons', classes.menuIcon].join(' ')}>menu</i>
        </Button>
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {sideList()}
        </SwipeableDrawer>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      {Object.entries(menu)
        .sort(([key1, item1], [key2, item2]) => item2.order - item1.order)
        .map(([key, item]) => (
          <Link
            variant="h6"
            underline="hover"
            className={classes.link}
            onClick={item.id ? () => scrollToId(item.id) : null}
            key={key}
            component={'a'}
          >
            {item.label}
          </Link>
        ))}
    </div>
  );
};

export default MenuComponent;
