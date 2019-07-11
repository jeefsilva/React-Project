import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../styles/index.scss';
import { colors } from '../styles/styles';

const styles = (theme: MuiTheme) => ({
    root: {
        position: 'fixed',
        height: 27,
        backgroundColor: colors.background,
        zIndex: 99999,
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: 1028,
        },
    },
    helperMenu: {
        height: 28,
        width: 1236,
        backgroundColor: colors.background,

    },
    iconHelperMenu: {
        fontSize: 16,
        marginRight: 8,
        color: colors.backgroundSecondary,
    },
    helperText: {
        marginRight: 25,
        color: colors.backgroundSecondary,
    },
    appBar: {
        height: 28,
        backgroundColor: colors.background,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxShadow: 'none',
        borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)',
    },
    toolbar: {
        width: 1028,
        minHeight: 28,
        padding: 0,
        display: 'inline-flex'
    },
    link: {
        color: colors.backgroundSecondary,
        '&:hover': {
            color: colors.primary,
            textDecoration: 'none'
        },
    },
});



class HelperMenu extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <Hidden only={['xs', 'sm', 'md']}>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='center'>
                        <AppBar position='fixed' className={`${'flex-row-center'} ${classes.appBar}`}>
                            <Toolbar className={classes.toolbar}>
                                <Icon className={`${'icon-margin-left'} ${classes.iconHelperMenu}`}>phone</Icon>
                                <Link target='_blank' href={'http://wa.me/553125351781'} className={classes.link}>
                                    <Typography variant='caption' className={`${classes.helperText} ${classes.link}`}>
                                        Contato: (31) 2535-1781
                                    </Typography>
                                </Link>
                                <Icon className={classes.iconHelperMenu}>email</Icon>
                                <Link href={'mailto:comercial@arithmos.com.br'} className={classes.link}>
                                    <Typography variant='caption' className={classes.link}>
                                        E-mail: comercial@arithmos.com.br
                                    </Typography>
                                </Link>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
            </Hidden>
        );
    }
}

HelperMenu.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(HelperMenu);