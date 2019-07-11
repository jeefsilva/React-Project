import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';
import CitiesSearchBar from './cities-search-bar.component';

const styles = (theme: MuiTheme) => ({
    root: {
        backgroundColor: colors.background,
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
        [theme.breakpoints.down('xs')]: {
            width: 360,
        },
    },
    titleSection: {
        backgroundColor: colors.background,
    },
    title: {
        marginTop: 48,
        marginBottom: 24,
        color: colors.backgroundSecondary,
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: 24,
            marginTop: 24,
        },
    },
    search: {
        height: 56,
        backgroundColor: colors.white,
        borderRadius: 4,
        marginBottom: 48,
        border: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.down('xs')]: {
            width: 326,
        },
    },
    inputInput: {
        color: colors.black,
        width: 558,
    }
});



class Cities extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    state = {
        value: 0,
    };

    handleChange = (_event: any, value: any) => {
        this.setState({ value });
    };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Paper className={classes.titleSection} elevation={0}>
                        <Typography variant='h4' className={classes.title}>
                            Veja se sua cidade é atendida
                        </Typography>
                        <div className={`${'flex-row-center'} ${classes.search}`}>
                            <CitiesSearchBar />
                        </div>
                    </Paper>
                </Grid>
            </div>
        );
    }

}

Cities.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(Cities);
