import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import Carousel from 'nuka-carousel';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../../styles/index.scss';
import { colors } from '../../../styles/styles';
import HireCard from './hire-card.component';

const styles = (theme: MuiTheme) => ({
    root: {
        backgroundColor: colors.white,
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    hireSection: {
        marginTop: 48,
        marginBottom: 16,
    },
    hireText: {
        color: colors.backgroundSecondary,
        [theme.breakpoints.down('md')]: {
            fontSize: 24,
        },
    },
    doubtSection: {
        marginTop: 16,
        marginBottom: 48,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 16,
        },
    },
    doubtText: {
        color: colors.backgroundSecondary,
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: 24,
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
            width: 300,
            height: 36,
        },
    },
    linkGrid: {
        marginBottom: 48,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 24,
        },
    },
    link: {
        borderRadius: 200,
        '&:hover': {
            textDecoration: 'none',
        },
    },
    carousel: {
        height: '530px !important',
    },
    cardContainer: {
        '&:focus': {
            outline: 'none',
        }
    },
});



class HireSection extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;
        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='center'>
                        <Paper className={classes.hireSection} elevation={0}>
                            <Typography variant='h4' className={classes.hireText}>
                                Porque você deve contratar a Arithmos
                            </Typography>
                        </Paper>
                        <Grid container className={classes.grid} justify='center'>
                            <Hidden only={['xs']}>
                                <HireCard title={'Atendimento Personalizado'} imageSrc={'/static/assets/hire-section/icon1.svg'}
                                          content={`Conte com um atendimento exclusivo que só a Arithmos Online oferece a seus clientes.
                                Nossa equipe de contadores está pronta para te ajudar de forma rápida e eficiente.`}/>
                                <HireCard title={'Gestão Financeira'} imageSrc={'/static/assets/hire-section/icon2.svg'}
                                          content={`Com poucos cliques você faz suas vendas, gera boletos e alimenta o financeiro.
                                      Planeje o futuro da sua empresa, visualizando informações estratégicas.
                                      Tenha gráficos para mostrar como estão as vendas e relatórios sobre seus resultados financeiros.`}/>
                                <HireCard title={'Emissão de Nota Fiscal'} imageSrc={'/static/assets/hire-section/icon3.svg'}
                                          content={`Emita suas notas fiscais eletrônicas de serviço de forma simples e segura em nossa plataforma.
                                      Suas notas são enviadas automaticamente para seus clientes,
                                       e se integra diretamente com suas contas a receber. `}/>
                                <HireCard title={'Gestão de pró-labore, folha de pagamento'} imageSrc={'/static/assets/hire-section/icon4.svg'}
                                          content={`Realizamos todas as obrigações trabalhistas da sua empresa.
                                      Cuidamos dos processos de admissão, demissão, apuração de folha de pagamento e demais rotinas trabalhistas.`}/>
                                <HireCard title={'Gestão de Impostos'} imageSrc={'/static/assets/hire-section/icon5.svg'}
                                          content={`Receba lembretes de suas guias na véspera dos vencimentos.
                                      Com alguns cliques, você tem acesso a seus arquivos, em nossa plataforma,
                                      de qualquer lugar a qualquer momento.`}/>
                                <HireCard title={'Entrega de Balancete'} imageSrc={'/static/assets/hire-section/icon6.svg'}
                                          content={`Recebe mensalmente o balancete da sua empresa. Anualmente fazemos o fechamento contábil
                                      da sua empresa e emitimos o balanço e DRE, devidamente assinados por contador
                                      registrado junto ao Conselho de Contabilidade.`}/>
                            </Hidden>
                            <Hidden only={['lg', 'xl', 'md', 'sm']}>
                                <Carousel className={classes.carousel}>
                                    <Grid container justify='center' className={classes.cardContainer}>
                                        <HireCard title={'Atendimento Personalizado'}
                                                  imageSrc={'/static/assets/hire-section/icon1.svg'}
                                                  imageAlt={'Atendimento Personalizado'}
                                                  content={`Conte com um atendimento exclusivo que só a Arithmos Online oferece a seus clientes.
                                                  Nossa equipe de contadores está pronta para te ajudar de forma rápida e eficiente.`}/>
                                    </Grid>
                                    <Grid container justify='center' className={classes.cardContainer}>
                                        <HireCard title={'Gestão Financeira'}
                                                  imageSrc={'/static/assets/hire-section/icon2.svg'}
                                                  imageAlt={'Gestão Financeira'}
                                                  content={`Com poucos cliques você faz suas vendas, gera boletos e alimenta o financeiro.
                                                  Planeje o futuro da sua empresa, visualizando informações estratégicas.
                                                  Tenha gráficos para mostrar como estão as vendas
                                                  e relatórios sobre seus resultados financeiros.`}/>
                                    </Grid>
                                    <Grid container justify='center' className={classes.cardContainer}>
                                        <HireCard title={'Emissão de Nota Fiscal'}
                                                  imageSrc={'/static/assets/hire-section/icon3.svg'}
                                                  imageAlt={'Emissão de Nota Fiscal'}
                                                  content={`Emita suas notas fiscais eletrônicas de serviço de forma simples
                                                  e segura em nossa plataforma. Suas notas são enviadas automaticamente para seus clientes,
                                                  e se integra diretamente com suas contas a receber. `}/>
                                    </Grid>
                                    <Grid container justify='center' className={classes.cardContainer}>
                                        <HireCard title={'Gestão de pró-labore, folha de pagamento'}
                                                  imageSrc={'/static/assets/hire-section/icon4.svg'}
                                                  imageAlt={'Gestão de pró-labore'}
                                                  content={`Realizamos todas as obrigações trabalhistas da sua empresa.
                                                  Cuidamos dos processos de admissão, demissão, apuração de folha
                                                  de pagamento e demais rotinas trabalhistas.`}/>
                                    </Grid>
                                    <Grid container justify='center' className={classes.cardContainer}>
                                        <HireCard title={'Gestão de Impostos'} imageSrc={'/static/assets/hire-section/icon5.svg'}
                                                  imageAlt={'Gestão de Impostos'}
                                                  content={`Receba lembretes de suas guias na véspera dos vencimentos.
                                                  Com alguns cliques, você tem acesso a seus arquivos, em nossa plataforma,
                                                  de qualquer lugar a qualquer momento.`}/>
                                    </Grid>
                                    <Grid container justify='center' className={classes.cardContainer}>
                                        <HireCard title={'Entrega de Balancete'}
                                                  imageSrc={'/static/assets/hire-section/icon6.svg'}
                                                  imageAlt={'Entrega de Balancete'}
                                                  content={`Recebe mensalmente o balancete da sua empresa. Anualmente fazemos o fechamento contábil
                                                  da sua empresa e emitimos o balanço e DRE, devidamente assinados por contador
                                                  registrado junto ao Conselho de Contabilidade.`}/>
                                    </Grid>
                                </Carousel>
                            </Hidden>
                            <Grid container className={classes.grid} justify='center'>
                                <Paper className={classes.doubtSection} elevation={0}>
                                    <Typography variant='h4' className={classes.doubtText}>
                                        Ficou com alguma dúvida?
                                    </Typography>
                                    <Typography variant='h4' className={classes.doubtText}>
                                        Venha falar com a gente agora mesmo!
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid container className={`${classes.grid} ${classes.linkGrid}`} justify='center'>
                                <Link href={'/planos'} color='inherit' className={classes.link}>
                                    <Button variant='contained' className={classes.companyButton}>
                                        Venha para Arithmos
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

HireSection.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(HireSection);