import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';
import DoubtPanel from './doubt-panel';
import Partner from './partner';

const styles = (theme: MuiTheme) => ({
    root: {
        backgroundColor: colors.backgroundSecondary,
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    titleSection: {
        marginTop: 48,
        marginBottom: 32,
        backgroundColor: 'transparent',
        [theme.breakpoints.down('xs')]: {
            marginTop: 24,
            marginBottom: 24,
        },
    },
    title: {
        textAlign: 'center',
        color: colors.white,
        [theme.breakpoints.down('xs')]: {
            fontSize: 24,
        },
    },
});



class Doubts extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='center'>
                        <Paper className={classes.titleSection} elevation={0}>
                            <Typography variant='h4' className={classes.title}>
                                Ainda com dúvidas?
                            </Typography>
                        </Paper>
                    </Grid>

                    <DoubtPanel/>
                    <Partner/>

                </Grid>
            </div>
        );
    }

}

Doubts.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(Doubts);