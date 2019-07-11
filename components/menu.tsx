import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../styles/index.scss';
import { colors } from '../styles/styles';

const styles =  (theme: MuiTheme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
    },
    appBar: {
        backgroundColor: colors.background,
    },
    toolbar: {
        width: 1236,
        height: 56,
        minHeight: 56,
        paddingLeft: 104,
        backgroundColor: colors.background,
    },
    logo: {
        width: 100,
        height: 56,
        userDrag: 'none',
    },
    menuTag: {
        color: colors.disabled,
    },
    companyButton: {
        width: 150,
        height: 36,
        color: colors.white,
        backgroundColor: colors.primary,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
        borderRadius: 200,
    },
    iconMenu: {
        marginRight: 8,
        userDrag: 'none',
    },
    menuButton: {
        width: 126,
        height: 36,
        backgroundColor: colors.background,
        color: colors.disabled,
        borderRadius: 200,
        borderColor: colors.border,
    },
    iconMenuButton: {
        marginLeft: 8,
    },
    link: {
        display: 'flex',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    linkLogo: {
        marginRight: 155,
    },
    linkTagMenu: {
        marginRight: 48,
    },
    linkButton: {
        marginRight: 24,
        borderRadius: 200,
    },
    activePage: {
        color: colors.backgroundSecondary,
    },
});



class MenuBar extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    state = {
        anchorEl: null,
    };

    handleClick = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        // @ts-ignore
        const { classes } = this.props;
        const { anchorEl } = this.state;


        return (
            <Grid container className={classes.root} justify='center'>
                <Grid container className={classes.grid} justify='center'>
                    <AppBar position='fixed' className={`${'flex-column-center position-top'} ${classes.appBar}`}>
                        <Toolbar className={classes.toolbar}>
                            <Link href={'/'} color='inherit' className={`${classes.link} ${classes.linkLogo}`}>
                                <img src='/static/assets/logo-online.svg' alt='logo' className={classes.logo} />
                            </Link>
                            <Link href={'/'} color='inherit' className={`${classes.link} ${classes.linkTagMenu}`}>
                                <Typography className={`${classes.menuTag} ${
                                    (window.location.pathname === '/') ? classes.activePage : undefined
                                    }`} variant='h6'>Home</Typography>
                            </Link>
                            <Link href={'/sobre'} color='inherit' className={`${classes.link} ${classes.linkTagMenu}`}>
                                <Typography className={`${classes.menuTag} ${
                                    (window.location.pathname === '/sobre') ? classes.activePage : undefined
                                    }`} variant='h6'>Quem Somos</Typography>
                            </Link>
                            <Link href={'/planos'} color='inherit' className={`${classes.link} ${classes.linkTagMenu}`}>
                                <Typography className={`${classes.menuTag} ${
                                    (window.location.pathname === '/planos') ? classes.activePage : undefined
                                    }`} variant='h6'>Planos e Preços</Typography>
                            </Link>
                            <Link href={'/abrir-empresa'} color='inherit' className={`${classes.link} ${classes.linkButton}`}>
                                <Button aria-label='Delete' className={classes.companyButton}>
                                    Abrir Empresa
                                </Button>
                            </Link>
                            <Button variant='outlined'
                                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                                    aria-haspopup='true'
                                    onClick={this.handleClick}
                                    className={classes.menuButton}>
                                Entrar
                                <Icon className={classes.iconMenuButton}>{Boolean(anchorEl) ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</Icon>
                            </Button>
                            <Menu id='simple-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                                <MenuItem onClick={this.handleClose}>
                                    <Link target='_blank' href={'https://app.contaazul.com.br/auth/'} color='inherit' className={classes.link}>
                                        <img src='/static/assets/coin.svg' alt='logo' className={classes.iconMenu}/>
                                        Gestor Financeiro
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link target='_blank' href={'http://arquivos.arithmos.com.br'} color='inherit' className={classes.link}>
                                        <img src='/static/assets/archive.svg' alt='logo' className={classes.iconMenu}/>
                                        Central de Arquivos
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link target='_blank' href={'http://atendimento.arithmos.com.br'} color='inherit' className={classes.link}>
                                        <img src='/static/assets/phone.svg' alt='logo' className={classes.iconMenu}/>
                                        Central de Atendimento
                                    </Link>
                                </MenuItem>
                            </Menu>

                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        );
    }
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(MenuBar);