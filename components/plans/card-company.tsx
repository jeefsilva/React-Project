import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';

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
        [theme.breakpoints.down('md')]: {
            '@media (max-width: 775px)': {
                width: 600,
                justifyContent: 'center',
            },
            width: 748,
            justifyContent: 'space-between',
        },
    },
    card: {
        width: 404,
        marginBottom: 48,
        height: 'fit-content',
        marginRight: 12,
        [theme.breakpoints.down('md')]: {
            width: 368,
            marginRight: 0,
            height: 670,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            marginRight: 0,
        },
    },
    cardTitle: {
        marginTop: 16,
        marginBottom: 16,
        color: colors.backgroundSecondary,
    },
    cardPriceDescription: {
        marginBottom: -8,
        width: 172,
        color: colors.primary,
        textTransform: 'uppercase',
    },
    cardPrice: {
        marginBottom: 8,
        color: colors.primary,
        textTransform: 'uppercase',
    },
    cardDescription: {
        width: 372,
        marginBottom: 8,
        minHeight: 40,
        color: colors.disabled,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            width: 336,
            minHeight: 54,
        },
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    cardText: {
        width: 372,
        marginBottom: 16,
        textAlign: 'center',
        color: colors.backgroundSecondary,
        [theme.breakpoints.down('md')]: {
            width: 336,
        },
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    cardTextSecondary: {
        width: 372,
        height: 80,
        marginBottom: 24,
        textAlign: 'center',
        color: colors.backgroundSecondary,
        [theme.breakpoints.down('md')]: {
            width: 336,
        },
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    divider: {
        width: 372,
    },
    cardIndicatedTitle: {
        width: 372,
        marginBottom: 8,
        marginTop: 16,
        color: colors.backgroundSecondary,
        textTransform: 'uppercase',
        [theme.breakpoints.down('md')]: {
            width: 336,
        },
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    cardIndicatedText: {
        width: 372,
        color: colors.backgroundSecondary,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 12,
        [theme.breakpoints.down('md')]: {
            width: 336,
        },
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    cardIndicatedTextSecondary: {
        width: 372,
        height: 120,
        color: colors.backgroundSecondary,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16,
        [theme.breakpoints.down('md')]: {
            width: 336,
        },
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    cardIncludeText: {
        display: 'flex',
        width: 372,
        marginBottom: 12,
        [theme.breakpoints.down('md')]: {
            width: 336,
        },
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    icon: {
        color: colors.primary,
        marginRight: 8,
    },
    iconClear: {
        color: colors.error,
        marginRight: 8,
    },
    iconSecondary: {
        color: colors.secondary,
        marginRight: 8,
    },
    iconCard: {
        fontSize: 100,
        marginBottom: 62,
        marginTop: 44,
        color: colors.secondary,
    },
    button: {
        borderRadius: 200,
        color: colors.white,
        backgroundColor: colors.primary,
        width: 280,
        height: 36,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
    },
    buttonSecondary: {
        borderRadius: 200,
        color: colors.white,
        backgroundColor: colors.secondary,
        width: 220,
        height: 36,
    },
    buttonMarginPrimary: {
        height: 'fit-content',
        marginTop: 100,
        marginBottom: 16,
    },
    buttonMarginSecondary: {
        height: 'fit-content',
        marginTop: 12,
        marginBottom: 16,
    },
    link: {
        height: 'fit-content',
        '&:hover': {
            textDecoration: 'none',
        },
    },
});



class CardCompany extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <Grid container className={classes.grid} justify='center'>
                <Card className={`${'flex-column-center'} ${classes.card}`} elevation={2}>
                    <Typography variant='h6' className={classes.cardTitle}>
                        Abrir Empresa em BH
                    </Typography>
                    <Typography variant='h4' className={classes.cardPrice}>
                        grátis*
                    </Typography>
                    <Typography variant='caption' className={classes.cardDescription}>
                        * Contrate um plano contábil e não cobraremos nada para abrir a sua empresa.
                        Condição válida exclusivamente para empresas com sede na cidade de Belo Horizonte/MG
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitle}>
                        Indicado Na Abertura Grátis:
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Elaboração de documento contratual
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Orientação no melhor enquadramento fiscal, conforme sua atividade
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Emissão das Guias Processuais
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Orientação para que os sócios emitam seus certificados digitais
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitle}>
                        O que não está incluso:
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconClear}>clear</Icon>Taxas públicas referentes ao processo
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconClear}>clear</Icon>Certificado Digital dos Sócios
                    </Typography>
                    <div className={classes.buttonMarginPrimary}>
                        <Link href={'/cadastro?refer=Abrir empresa em BH - Card - Pagina de Planos'} color='inherit' className={classes.link}>
                            <Button className={classes.button}>
                                Venha para arithmos
                            </Button>
                        </Link>
                    </div>
                </Card>

                <Card className={`${'flex-column-center'} ${classes.card}`} elevation={2}>
                    <Typography variant='h6' className={classes.cardTitle}>
                        Abrir Empresa Demais Cidades
                    </Typography>
                    <Typography variant='caption' className={classes.cardPriceDescription}>
                        a partir de
                    </Typography>
                    <Typography variant='h4' className={classes.cardPrice}>
                        R$450,00*
                    </Typography>
                    <Typography variant='caption' className={classes.cardDescription}>
                        * Nossos valores variam conforme a cidade e estado que será sede da empresa
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitle}>
                        Indicado Na Abertura:
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Elaboração de documento contratual
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Orientação no melhor enquadramento fiscal, conforme sua atividade
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Emissão das Guias Processuais
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Orientação para que os sócios emitam seus certificados digitais
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitle}>
                        O que não está incluso:
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconClear}>clear</Icon>Taxas públicas referentes ao processo
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconClear}>clear</Icon>Certificado Digital dos Sócios
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconClear}>clear</Icon>Protocolo físico na Junta Comercial, para empresas com sede fora de MG
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconClear}>clear</Icon>Protocolo físico do alvará de localização
                    </Typography>
                    <div className={classes.buttonMarginSecondary}>
                        <Link href={'/cadastro?refer=Abrir empresa Demais Cidades - Card - Pagina de Planos'}
                              color='inherit' className={classes.link}>
                            <Button className={classes.button}>
                                Venha para arithmos
                            </Button>
                        </Link>
                    </div>
                </Card>
            </Grid>
        );
    }
}

CardCompany.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(CardCompany);
