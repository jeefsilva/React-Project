import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import StepConnector from '@material-ui/core/StepConnector';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';

const styles = (theme: MuiTheme) => ({
    root: {
        backgroundColor: colors.white,
        backgroundImage: `url(${'static/assets/home-company-bg.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        userDrag: 'none',
        '@media (max-width: 1425px)': {
            backgroundImage: `url(${'static/assets/home/piggie-mobile.svg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
        },
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${'static/assets/home/piggie-mobile.svg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
        },
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    gridMobile: {
        [theme.breakpoints.down('xs')]: {
            width: 220,
            marginLeft: 16,
        },
    },
    companySection: {
        marginTop: 48,
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'transparent',
            marginTop: 24,
            marginBottom: 52,
        },
    },
    companyCircle: {
        color: colors.backgroundSecondary,
    },
    companyText: {
        color: colors.backgroundSecondary,
        [theme.breakpoints.down('md')]: {
            fontSize: 24,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            textAlign: 'start',
        },
    },
    circle: {
        marginTop: 48,
        width: 92,
        height: 92,
        justifyContent: 'center',
        borderRadius: 200,
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
        },
    },
    line: {
        marginTop: 94,
        maxWidth: 276,
        [theme.breakpoints.down('md')]: {
            maxWidth: 214,
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: 150,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            marginLeft: 0,
            padding: 0,
        },
    },
    lineHeight: {
        minHeight: 60,
    },
    circleSection: {
        width: 300,
        margin: 24,
        marginRight: 32,
        marginLeft: 32,
        marginBottom: 52,
        backgroundColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            width: 292,
            marginRight: 4,
            marginLeft: 4,
        },
        [theme.breakpoints.only('sm')]: {
            width: 240,
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: 220,
            height: 112,
            marginRight: 0,
            marginLeft: 16,
            marginBottom: 48,
            marginTop: 0,
        },
    },
    circleText: {
        color: colors.backgroundSecondary,
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
        },
    },
    companyButton: {
        backgroundColor: colors.primary,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
        width: 300,
        height: 48,
        color: colors.white,
        borderRadius: 200,
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            height: 36,
        },
    },
    companySecondaryButton: {
        width: 300,
        height: 48,
        color: colors.backgroundSecondary,
        borderRadius: 200,
    },
    companySecondaryButtonLink: {
        height: 48,
        marginBottom: 48,
        borderRadius: 200,
    },
    divider: {
        width: 1236,
        [theme.breakpoints.down('md')]: {
            width: 900,
        },
        [theme.breakpoints.down('sm')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    link: {
        height: 48,
        borderRadius: 200,
        marginBottom: 16,
        '&:hover': {
            textDecoration: 'none',
        },
    },
    mobileSection: {
        [theme.breakpoints.down('xs')]: {
            height: 412,
        },
    },
    textSmall: {
        '@media (max-width: 745px)': {
            width: 190,
        },
    }
});



class CompanySection extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center' title='Abrir Empresa Grátis'>
                    <Grid container className={classes.grid} justify='center'>
                        <Paper className={classes.companySection} elevation={0}>
                            <Typography variant='h4' className={classes.companyText}>
                                Abrir empresa grátis
                            </Typography>
                        </Paper>
                    </Grid>
                    <Hidden only={['xs']}>
                        <Grid container className={classes.grid} justify='center'>
                            <Paper className={`${'flex-column-center'} ${classes.circle}`} elevation={4}>
                                <Typography variant='h4' className={classes.companyCircle}>
                                    1
                                </Typography>
                            </Paper>
                            <StepConnector className={classes.line}/>
                            <Paper className={`${'flex-column-center'} ${classes.circle}`} elevation={4}>
                                <Typography variant='h4' className={classes.companyCircle}>
                                    2
                                </Typography>
                            </Paper>
                            <StepConnector className={classes.line}/>
                            <Paper className={`${'flex-column-center'} ${classes.circle}`} elevation={4}>
                                <Typography variant='h4' className={classes.companyCircle}>
                                    3
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid container className={classes.grid} justify='center'>
                            <Paper className={`${'flex-column-center'} ${classes.circleSection} ${classes.textSmall}`} elevation={0}>
                                <Typography variant='body1' className={classes.circleText}>
                                    Vamos dar o empurrãozinho <br/> que faltava para você ter <br/> o próprio negócio!
                                </Typography>
                            </Paper>
                            <Paper className={`${'flex-column-center'} ${classes.circleSection} ${classes.textSmall}`} elevation={0}>
                                <Typography variant='body1' className={classes.circleText}>
                                    A Arithmos oferece a você 100% de <br/>  isenção para abertura de empresa em <br/> Belo Horizonte.
                                </Typography>
                            </Paper>
                            <Paper className={`${'flex-column-center'} ${classes.circleSection} ${classes.textSmall}`} elevation={0}>
                                <Typography variant='body1' className={classes.circleText}>
                                    A Arithmos oferece tudo o que <br/> você precisa para abrir a sua <br/> empresa de forma simples e rápida.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Hidden>

                    <Hidden only={['lg', 'xl', 'md', 'sm']}>
                        <Grid container className={classes.grid} justify='flex-start'>
                            <Paper className={`${'flex-column-center'} ${classes.mobileSection}`} elevation={0}>
                                <Paper className={`${'flex-column-center'} ${classes.circle}`} elevation={4}>
                                    <Typography variant='h4' className={classes.companyCircle}>
                                        1
                                    </Typography>
                                </Paper>
                                <StepConnector className={classes.line} orientation='vertical' classes={{ lineVertical: classes.lineHeight}}/>
                                <Paper className={`${'flex-column-center'} ${classes.circle}`} elevation={4}>
                                    <Typography variant='h4' className={classes.companyCircle}>
                                        2
                                    </Typography>
                                </Paper>
                                <StepConnector className={classes.line} orientation='vertical' classes={{ lineVertical: classes.lineHeight}}/>
                                <Paper className={`${'flex-column-center'} ${classes.circle}`} elevation={4}>
                                    <Typography variant='h4' className={classes.companyCircle}>
                                        3
                                    </Typography>
                                </Paper>
                            </Paper>
                            <Grid container className={classes.gridMobile} justify='flex-end'>
                                <Paper className={`${'flex-column-center'} ${classes.circleSection}`} elevation={0}>
                                    <Typography variant='body1' className={classes.circleText}>
                                        Vamos dar o empurrãozinho que faltava para você ter o próprio negócio!
                                    </Typography>
                                </Paper>
                                <Paper className={`${'flex-column-center'} ${classes.circleSection}`} elevation={0}>
                                    <Typography variant='body1' className={classes.circleText}>
                                        A Arithmos oferece a você 100% de isenção para abertura de empresa em Belo Horizonte.
                                    </Typography>
                                </Paper>
                                <Paper className={`${'flex-column-center'} ${classes.circleSection}`} elevation={0}>
                                    <Typography variant='body1' className={classes.circleText}>
                                        A Arithmos oferece tudo o que você precisa para abrir a sua empresa de forma simples e rápida.
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Hidden>

                    <Grid container className={classes.grid} justify='center'>
                        <Link href={'/planos?tab=1'} color='inherit' className={classes.link}>
                            <Button variant='contained' className={classes.companyButton}>
                                Abra sua Empresa
                            </Button>
                        </Link>
                    </Grid>
                    <Grid container className={classes.grid} justify='center'>
                        <Link href={'/abrir-empresa'} color='inherit' className={`${classes.link} ${classes.companySecondaryButtonLink}`}>
                            <Button className={classes.companySecondaryButton}>
                                Saiba como Funciona
                            </Button>
                        </Link>
                    </Grid>
                    <Grid container className={classes.grid} justify='center'>
                        <Divider variant='middle' className={classes.divider} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

CompanySection.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(CompanySection);