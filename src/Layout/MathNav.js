import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
  root: {
    backgroundColor: '#cfe8fc',
    padding: '5px 4px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginLeft: 12,
    marginRight: 12
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    marginLeft: 24,
    marginBottom: 14
  }
});

class Nav extends React.Component {
  constructor() {
    super();
    var number;
  }

  NumberSearch = (props) => {
    if(!(/^-?[1-9]\d*$/.test(this.number))){
      alert("You entered incorrect data!")
      return
    }
    fetch('http://numbersapi.com/' + this.number + '/math').then(response => response.text()).then(data => {
      //console.log(data)
      this.props.NumberCall(data);
    }).catch(err => alert("Error!"))
  }

  NumberSearchRandom = (props) => {
    fetch('http://numbersapi.com/random/math').then(response => response.text()).then(data => {
      //console.log(data)
      this.props.NumberCall(data);
    }).catch(err => alert("Error!"))
  }

  handleChange = (event) => {
    this.number = event.target.value
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper component="form" className={classes.root}>
            Number:
        <InputBase onChange={this.handleChange} className={classes.input} placeholder="Input a number:" inputProps={{
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
      </Grid>
    )
  }
}
export default withStyles(useStyles)(Nav)
