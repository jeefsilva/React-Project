import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
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

const styles =  (theme: MuiTheme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
        [theme.breakpoints.only('sm')]: {
            width: 580,
        },
    },
    appBar: {
        backgroundColor: colors.background,
    },
    toolbar: {
        width: 900,
        height: 56,
        minHeight: 56,
        backgroundColor: colors.background,
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
        [theme.breakpoints.only('sm')]: {
            width: 580,
        },
    },
    logo: {
        width: 60,
        height: 56,
        userDrag: 'none',
    },
    logoDrawer: {
        width: 80,
        height: 30,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 16,
        userDrag: 'none',
    },
    menuTag: {
        color:colors.backgroundSecondary,
        marginRight: 48,
    },
    companyButton: {
        width: 150,
        height: 36,
        color: colors.white,
        backgroundColor: colors.primary,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
        marginRight: 24,
        borderRadius: 200,
    },
    iconMenu: {
        marginRight: 8,
        marginBottom: 4,
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
        userDrag: 'none',
    },
    link: {
        display: 'flex',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    linkText: {
        display: 'flex',
        marginLeft: 16,
        marginBottom: 24,
        '&:hover': {
            textDecoration: 'none',
        },
    },
    mobileIcon: {
        color: colors.backgroundSecondary,
    },
    buttonMenu: {
        width: 24,
        height: 24,
        minWidth: 24,
        padding: 0,
        marginRight: 24,
    },
    drawerSection: {
        width: 304,
    },
    menuTagTitle: {
        marginLeft: 16,
        marginBottom: 24,
        color:colors.disabled,
    },
    divider: {
        marginBottom: 24,
        marginLeft: 0,
        width: 304,
    },
    menuTagGreen: {
        color:colors.primary,
    },
});



class MobileMenu extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    state = {
        anchorEl: null,
        left: false,
    };

    handleClick = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    toggleDrawer = (side: any, open: boolean) => () => {
        this.setState({
            [side]: open,
        });
    };


    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} justify='center'>
                <Grid container className={classes.grid} justify='center'>
                    <AppBar position='fixed' className={`${'flex-column-center position-top'} ${classes.appBar}`}>
                        <Toolbar className={classes.toolbar}>
                            <Button className={classes.buttonMenu} onClick={this.toggleDrawer('left', true)}>
                                <Icon className={classes.mobileIcon} >menu</Icon>
                            </Button>
                            <Link href={'/'} color='inherit' className={classes.link}>
                                <img src='/static/assets/logo-online.svg' alt='logo' className={classes.logo} />
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <Drawer className={`${'flex-column'} ${classes.drawer}`}
                            open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                        <div
                            tabIndex={0}
                            role='button'
                            onClick={this.toggleDrawer('left', false)}
                            onKeyDown={this.toggleDrawer('left', false)}
                            className={classes.drawerSection}
                        >
                            <Link href={'/'} color='inherit' className={classes.link}>
                                <img src='/static/assets/logo-online.svg' alt='logo' className={classes.logoDrawer} />
                            </Link>
                            <Divider variant='middle' className={classes.divider} />
                            <Link href={'/'} color='inherit' className={classes.linkText}>
                                <Typography className={classes.menuTag} variant='h6' gutterBottom>Home</Typography>
                            </Link>
                            <Link href={'/sobre'} color='inherit' className={classes.linkText}>
                                <Typography className={classes.menuTag} variant='h6' gutterBottom>Quem Somos</Typography>
                            </Link>
                            <Link href={'/planos'} color='inherit' className={classes.linkText}>
                                <Typography className={classes.menuTag} variant='h6' gutterBottom>Planos e Preços</Typography>
                            </Link>
                            <Link href={'/abrir-empresa'} color='inherit' className={classes.linkText}>
                                <Typography className={classes.menuTagGreen} variant='h6' gutterBottom>Abrir Empresa</Typography>
                            </Link>
                            <Divider variant='middle' className={classes.divider} />
                            <Typography className={classes.menuTagTitle} variant='h6' gutterBottom>Entrar</Typography>
                            <Link target='_blank' href={'https://app.contaazul.com.br/auth/'}
                                  color='inherit' className={`${'flex-row-center'} ${classes.linkText}`}>
                                <img src='/static/assets/coin.svg' alt='logo' className={classes.iconMenu}/>
                                <Typography className={classes.menuTagBlack} variant='h6' gutterBottom>Gestor Financeiro</Typography>
                            </Link>
                            <Link target='_blank' href={'http://arquivos.arithmos.com.br'}
                                  color='inherit' className={`${'flex-row-center'} ${classes.linkText}`}>
                                <img src='/static/assets/archive.svg' alt='logo' className={classes.iconMenu}/>
                                <Typography className={classes.menuTagBlack} variant='h6' gutterBottom>Central de Arquivos</Typography>
                            </Link>
                            <Link target='_blank' href={'http://atendimento.arithmos.com.br'}
                                  color='inherit' className={`${'flex-row-center'} ${classes.linkText}`}>
                                <img src='/static/assets/phone.svg' alt='logo' className={classes.iconMenu}/>
                                <Typography className={classes.menuTagBlack} variant='h6' gutterBottom>Central de Atendimento</Typography>
                            </Link>
                        </div>
                    </Drawer>
                </Grid>
            </Grid>
        );
    }
}

MobileMenu.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(MobileMenu);