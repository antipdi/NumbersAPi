import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Nav from './Nav'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: "90vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  contenter: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: '#cfe8fc',
    height: '45vh',
    fontSize: "3.8vh"
  },
  textContent: {
    color: "#000000"
  }
});

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      infoText: ""
    }
  }

  data_scrapper = (weather) => {
    this.state.infoText = weather
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
              Interesting fact about this number:
              <br />
              <div className={classes.textContent}>{this.state.infoText}</div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>);
  }
}

export default withStyles(useStyles)(Content)
