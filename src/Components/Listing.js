import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Products from './Products';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class InteractiveGrid extends React.Component {
  state = {
    direction: 'row',
    justify: 'space-around',
    alignItems: 'flex-end',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;
    return (
      
        <Grid item xs={6}>
          <Grid
            container
            spacing={16}
            className={classes.demo}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Products/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        
    );
  }
}

InteractiveGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveGrid);
