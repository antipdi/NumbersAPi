import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import Sidebar from './Sidebar';

const useStyles = makeStyles({
  logo1: {
    fontSize: 36,
    color: '#000000'
  },
  logo2: {
    fontSize: 36,
  }
});
export default function Header() {
  const classes = useStyles();

  return (<AppBar position="relative" >
    <Toolbar >
      <Sidebar />
      <Typography className={classes.logo1}>
        NUMBERS
      </Typography>
      <Typography className={classes.logo2}>
        API
      </Typography>
    </Toolbar>
  </AppBar>);
}
