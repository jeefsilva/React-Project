import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import { ArithmosServiceType } from '../../../src/constants/arithmos-service-types';
import '../../../styles/index.scss';
import { colors } from '../../../styles/styles';
import PlanCard from './plan-card.component';

const styles = (theme: MuiTheme) => ({
    root: {
        backgroundColor: colors.white,
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
        [theme.breakpoints.down('md')]: {
            width: 900,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    cardSection: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
        [theme.breakpoints.down('md')]: {
            width: 596,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    plansSection: {
        marginTop: 48,
        marginBottom: 48,
        [theme.breakpoints.down('xs')]: {
            marginTop: 24,
            marginBottom: 24,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    plansText: {
        color: colors.backgroundSecondary,
        [theme.breakpoints.down('md')]: {
            width: 596,
            fontSize: 24,
            textAlign: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    button: {
        backgroundColor: colors.primary,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
        width: 196,
        height: 48,
        color: colors.white,
        borderRadius: 200,
        [theme.breakpoints.down('xs')]: {
            marginTop: 24,
            height: 36,
        },
    },
    link: {
        marginTop: 48,
        marginBottom: 48,
        borderRadius: 200,
        '&:hover': {
            textDecoration: 'none',
        },
    },
});



class PlansSection extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='center'>
                        <Paper className={classes.plansSection} elevation={0}>
                            <Typography variant='h4' className={classes.plansText}>
                                Venha para a Arithmos
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid container className={classes.cardSection} justify='space-between'>
                        <PlanCard planTitle={'Migrar de MEI para ME'} planId={'Migrar de MEI para ME'}
                                  planDescription={'Contrate um plano contábil anual e o processo de migração será:'}
                                  price={'grátis*'}
                                  buttonContent={'Venha para Arithmos'} />
                        <PlanCard planTitle={'Contabilidade para MEI´s'} planId={'Contabilidade para MEIs'}
                                  planDescription={'MENSALIDADES A PARTIR DE:'}
                                  price={'R$90,00'}
                                  buttonContent={'Venha para Arithmos'} />
                        <PlanCard planTitle={'Empresas de Serviços'} planId={'Empresas de Servicos'}
                                  planDescription={'MENSALIDADES A PARTIR DE:'}
                                  price={'R$150,00'}
                                  buttonContent={'Venha para Arithmos'} />
                        <PlanCard planTitle={'Empresas Maiores'} planId={'Empresas Maiores'}
                                  buttonContent={'Fale Conosco'} type={ArithmosServiceType.TRADITIONAL} />
                    </Grid>
                    <Grid container className={classes.grid} justify='center'>
                        <Link href={'/planos'} color='inherit' className={classes.link}>
                            <Button variant='contained' className={classes.button}>
                                Saiba Mais
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

PlansSection.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(PlansSection);