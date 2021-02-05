import React from 'react';
import Header from '../Layout/Header'
import Content from '../Layout/Content'
import {makeStyles, Container} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  numbersapi: {
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.info.light,
    borderRadius: 10,
    width: "100vh",
    // height: "70vh"
  }
}));

export default function Main(props) {

  const classes = useStyles();

  return (<div className={classes.bg}>
    <Header/>
    <Container className={classes.numbersapi}>
      <Content/>
    </Container>
  </div>);
}
