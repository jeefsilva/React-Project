import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import Carousel from 'nuka-carousel';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';

const styles = (theme: MuiTheme) => ({
    root: {
        backgroundColor: colors.background,
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    timeSection: {
        width: 404,
        height: 200,
        marginTop: 48,
        backgroundColor: colors.background,
        [theme.breakpoints.down('md')]: {
            width: 292,
            height: 142,
        },
        [theme.breakpoints.down('xs')]: {
            width: 300,
            height: 94,
        },
    },
    timeText: {
        textAlign: 'right',
        color: colors.backgroundSecondary,
        [theme.breakpoints.down('md')]: {
            fontSize: 24,
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
            fontSize: 20,
        },
    },
    weightText: {
        fontWeight: 500,
        textAlign: 'center',
        color: colors.backgroundSecondary,
    },
    weightTextH3: {
        [theme.breakpoints.down('md')]: {
            fontSize: 34,
        },
    },
    weightTextH4: {
        [theme.breakpoints.down('md')]: {
            fontSize: 24,
        },
    },
    yearSection: {
        width: 136,
        height: 136,
        marginTop: 112,
        marginLeft: 40,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: colors.background,
        [theme.breakpoints.down('md')]: {
            width: 108,
            height: 108,
            marginTop: 100,
            marginLeft: 12,
        },
    },
    companySection: {
        width: 200,
        height: 200,
        marginTop: 48,
        marginLeft: 40,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: colors.background,
        [theme.breakpoints.down('md')]: {
            width: 160,
            height: 160,
            marginTop: 48,
            marginLeft: 24,
        },
    },
    titleText: {
        color: colors.backgroundSecondary,
        marginTop: 48,
        marginBottom: 48,
        [theme.breakpoints.down('md')]: {
            fontSize: 24,
        },
    },
    card: {
        width: 300,
        height: 245,
        marginRight: 32,
        marginLeft: 32,
        marginBottom: 60,
        backgroundColor: colors.background,
        [theme.breakpoints.down('md')]: {
            width: 292,
            height: 259,
            marginRight: 0,
            marginLeft: 0,
            marginBottom: 48,
        },
        [theme.breakpoints.only('sm')]: {
            width: 262,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
        '&:focus': {
            outline: 'none',
        }
    },
    cardTitle: {
        color: colors.backgroundSecondary,
        textAlign: 'center',
        minHeight: 47,
    },
    icon: {
        marginTop: 12,
        marginBottom: 24,
        userDrag: 'none',
    },
    cardText: {
        color: colors.backgroundSecondary,
        textAlign: 'center',
        height: 84,
        justifyContent: 'center',
    },
});



class HomeAboutSection extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='center'>
                        <Hidden only={['xs']}>
                            <Paper className={classes.timeSection} elevation={0}>
                                <Typography component='h3' variant='h4' className={classes.timeText}>
                                    São mais de <b>18 anos</b>
                                </Typography>
                                <Typography component='h3' variant='h4' className={classes.timeText}>
                                    de experiência
                                </Typography>
                                <Typography component='h3' variant='h4' className={classes.timeText}>
                                    de atuação e mais de <b>200 empresas</b> atendidas em todo o Brasil.
                                </Typography>
                            </Paper>
                        </Hidden>
                        <Hidden only={['lg', 'xl', 'md', 'sm']}>
                            <Paper className={classes.timeSection} elevation={0}>
                                <Typography component='h3' variant='h4' className={classes.timeText}>
                                    São mais de <b>18 anos</b> de
                                </Typography>
                                <Typography component='h3' variant='h4' className={classes.timeText}>
                                    experiência de atuação e mais
                                </Typography>
                                <Typography component='h3' variant='h4' className={classes.timeText}>
                                    de <b>200 empresas</b> atendidas em
                                </Typography>
                                <Typography component='h3' variant='h4' className={classes.timeText}>
                                    todo o Brasil.
                                </Typography>
                            </Paper>
                        </Hidden>
                        <Hidden only={['xs']}>
                            <Paper className={`${'flex-column-center'} ${classes.yearSection}`} elevation={4}>
                                <Typography component='h3' variant='h3' className={`${classes.weightText} ${classes.weightTextH3}`}>
                                    18
                                </Typography>
                                <Typography component='h3' variant='h4' className={`${classes.weightText} ${classes.weightTextH4}`}>
                                    anos
                                </Typography>
                            </Paper>
                            <Paper className={`${'flex-column-center'} ${classes.companySection}`} elevation={4}>
                                <Typography component='h3' variant='h3' className={`${classes.weightText} ${classes.weightTextH3}`}>
                                    +200
                                </Typography>
                                <Typography component='h3' variant='h4' className={`${classes.weightText} ${classes.weightTextH4}`}>
                                    empresas
                                </Typography>
                            </Paper>
                        </Hidden>
                    </Grid>
                    <Grid container className={classes.grid} justify='center'>
                        <Typography variant='h4' className={classes.titleText}>
                            A nossa gestão contábil online é perfeita para
                        </Typography>
                        <Grid container className={classes.grid} justify='center'>
                            <Hidden only={['xs']}>
                                <Paper className={`${'flex-column-center'} ${classes.card}`} elevation={0}>
                                    <Typography variant='h6' className={classes.cardTitle}>
                                        Micro Empreendedores Individuais
                                    </Typography>
                                    <img src='/static/assets/home/icon-accounting.svg' draggable={false} alt='Micro Empreendedores Individuais'
                                         className={classes.icon}/>
                                    <Typography variant='body1' className={classes.cardText}>
                                        Todos os empresários regularizados como MEIs.
                                    </Typography>
                                </Paper>
                                <Paper className={`${'flex-column-center'} ${classes.card}`} elevation={0}>
                                    <Typography variant='h6' className={classes.cardTitle}>
                                        Prestadores de Serviço (PJs)
                                    </Typography>
                                    <img src='/static/assets/home/icon-company.svg' draggable={false} alt='Prestadores de Serviço'
                                         className={classes.icon}/>
                                    <Typography variant='body1' className={classes.cardText}>
                                        Pessoas que trabalham como <br/>
                                        Pessoa Jurídica, para <br/>
                                        outras empresas.
                                    </Typography>
                                </Paper>
                                <Paper className={`${'flex-column-center'} ${classes.card}`} elevation={0}>
                                    <Typography variant='h6' className={classes.cardTitle}>
                                        Micro Empresas
                                    </Typography>
                                    <img src='/static/assets/home/icon-micro.svg' draggable={false} alt='Micro Empresas' className={classes.icon}/>
                                    <Typography variant='body1' className={classes.cardText}>
                                        Micro empresas, exclusivamente <br/>
                                        de prestação de serviço, com até <br/>
                                        5 funcionários.
                                    </Typography>
                                </Paper>
                            </Hidden>
                            <Hidden only={['lg', 'xl', 'md', 'sm']}>
                                <Carousel>
                                    <Paper className={`${'flex-column-center'} ${classes.card}`} elevation={0}>
                                        <Typography variant='h6' className={classes.cardTitle}>
                                            Micro Empreendedores Individuais
                                        </Typography>
                                        <img src='/static/assets/home/icon-accounting.svg' draggable={false} alt='Micro Empreendedores Individuais'
                                             className={classes.icon}/>
                                        <Typography variant='body1' className={classes.cardText}>
                                            Todos os empresários regularizados como MEIs.
                                        </Typography>
                                    </Paper>
                                    <Paper className={`${'flex-column-center'} ${classes.card}`} elevation={0}>
                                        <Typography variant='h6' className={classes.cardTitle}>
                                            Prestadores de Serviço (PJs)
                                        </Typography>
                                        <img src='/static/assets/home/icon-company.svg' draggable={false} alt='Prestadores de Serviço'
                                             className={classes.icon}/>
                                        <Typography variant='body1' className={classes.cardText}>
                                            Pessoas que trabalham como <br/>
                                            Pessoa Jurídica, para <br/>
                                            outras empresas.
                                        </Typography>
                                    </Paper>
                                    <Paper className={`${'flex-column-center'} ${classes.card}`} elevation={0}>
                                        <Typography variant='h6' className={classes.cardTitle}>
                                            Micro Empresas
                                        </Typography>
                                        <img src='/static/assets/home/icon-micro.svg' draggable={false} alt='Micro Empresas'
                                             className={classes.icon}/>
                                        <Typography variant='body1' className={classes.cardText}>
                                            Micro empresas, exclusivamente <br/>
                                            de prestação de serviço, com até <br/>
                                            5 funcionários.
                                        </Typography>
                                    </Paper>
                                </Carousel>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

HomeAboutSection.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(HomeAboutSection);