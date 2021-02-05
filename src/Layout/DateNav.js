import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
  root: {
    backgroundColor: '#cfe8fc',
    padding: '5px 4px',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginLeft: 12,
    marginRight: 12
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  button: {
    marginLeft: 24,
    marginBottom: 14
  }
});

class Nav extends React.Component {
  constructor() {
    super();
    var month, day;
  }

  NumberSearch = (props) => {
    if(!(/^[1-9]\d{0,1}$/.test(this.month))){
      alert("You entered incorrect data!(month)")
      return
    }
    if(!(/^[1-9]\d{0,1}$/.test(this.day))){
      alert("You entered incorrect data!(day)")
      return
    }
    fetch('http://numbersapi.com/' + this.month + '/' + this.day + '/date').then(response => response.text()).then(data => {
      //console.log(data)
      this.props.NumberCall(data);
    }).catch(err => alert("Error!"))
  }
  NumberSearchRandom = (props) => {
    fetch('http://numbersapi.com/random/date').then(response => response.text()).then(data => {
      //console.log(data)
      this.props.NumberCall(data);
    }).catch(err => alert("Error!"))
  }

  handleChangeMonth = (event) => {
    this.month = event.target.value
  }

  handleChangeDay = (event) => {
    this.day = event.target.value
  }

  render() {

    const { classes } = this.props;

    return (<Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper component="form" className={classes.root}>
          Month:
          <InputBase onChange={this.handleChangeMonth} className={classes.input} placeholder="Input your month" inputProps={{
            'aria-label': 'search google maps'
          }} />
        </Paper>
        <Paper component="form" className={classes.root}>
          Day:
          <InputBase onChange={this.handleChangeDay} className={classes.input} placeholder="Input your day" inputProps={{
            'aria-label': 'search google maps'
          }} />
        </Paper>
      </Grid>
      <Button variant="contained" color="primary" className={classes.button} onClick={this.NumberSearchRandom.bind(this)}>
        Random values
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={this.NumberSearch.bind(this)}>
        <SearchIcon />Search
      </Button>
    </Grid>)
  }
}

export default withStyles(useStyles)(Nav)
