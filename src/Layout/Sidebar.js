import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  icon: {
    marginRight: '10px',
    width: '64px',
    height: '64px',
    color: 'white'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  option: {
    textDecoration: 'none',
    display: 'block',
    textDecorationColor: 'none',
    color: 'black',
    border: 'none'
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ top: false, left: false, bottom: false, right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({
      ...state,
      [anchor]: open
    });
  };

  const list = (anchor) => (<div className={clsx(classes.list, {
    [classes.fullList]: anchor === 'top' || anchor === 'bottom'
  })} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
    <List>
      {
        [
          <Link to='/' className={classes.option}>Trivia<Divider /></Link>,
          <Link to='/math' className={classes.option}>Math<Divider /></Link>,
          <Link to='/year' className={classes.option}>Year<Divider /></Link>,
          <Link to='/date' className={classes.option}>Date<Divider /></Link>
        ].map((text, index) => (<ListItem button="button" key={text}>
          <ListItemText primary={text} />
        </ListItem>))
      }
    </List>
  </div>);

  return (<div>
    <React.Fragment key={'left'}>
      <IconButton className={classes.icon} onClick={toggleDrawer('left', true)}><Menu /></IconButton>
      <SwipeableDrawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
        {list('left')}
      </SwipeableDrawer>
    </React.Fragment>
  </div>);
}
