import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Nav from './MathNav'
const useStyles = theme => ({
  root: {
    Grow: 1,
    height: "90vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  contenter: {
    backgroundColor: '#cfe8fc',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '45vh',
    fontSize: "3.8vh"
  },
  textContent: {
    color: "#000000"
  }
});

class Math extends React.Component {
  constructor() {
    super();
    this.state = {
      infoText: ""
    }
  }

  data_scrapper = (data) => {
    this.state.infoText = data
    //console.log(weather)
    this.forceUpdate();
  }

  render() {
    const { classes } = this.props;
    return (<div className={classes.root}>
      <Grid container spacing={3}>
        <Nav NumberCall={this.data_scrapper.bind(this)} />
        <Grid item xs={12}>
          <Paper className={classes.contenter}>
            <div>
              A mathematical fact about this number:
              <br />
              <div className={classes.textContent}>{this.state.infoText}</div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>);
  }
}
export default withStyles(useStyles)(Math)
