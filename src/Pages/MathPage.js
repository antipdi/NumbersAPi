import React from 'react';
import Header from '../Layout/Header'
import Math from '../Layout/Math'
import { makeStyles, Container } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  numbersapi: {
    backgroundColor: theme.palette.info.light,
    marginTop: theme.spacing(4),
    borderRadius: 10,
    width: "100vh"
  }
}));

export default function GeoPage(props) {

  const classes = useStyles();

  return (<div className={classes.bg}>
    <Header />
    <Container className={classes.numbersapi}>
      <Math />
    </Container>
  </div>);
}
