import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../styles/styles';

const styles = {
    root: {
    },
    paper: {
        color: colors.primary,
        height: 140,
    },
};



class LayoutGrid extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div >
                <Grid container spacing={8} className={classes.root}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper} >xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper} >xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper} >xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper} >xs=12</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

LayoutGrid.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(LayoutGrid);