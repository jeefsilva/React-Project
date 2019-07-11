import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
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
    },
    card: {
        width: 300,
        marginBottom: 48,
        height: 847,
        [theme.breakpoints.down('md')]: {
            width: 292,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            marginBottom: 16,
        },
    },
    cardTitle: {
        marginTop: 16,
        marginBottom: 16,
        color: colors.backgroundSecondary,

    },
    cardSubtitle: {
        height: 48,
        color: colors.backgroundSecondary,
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    cardPrice: {
        marginTop: 8,
        marginBottom: 8,
        color: colors.primary,
        textTransform: 'uppercase',
    },
    cardDescription: {
        marginBottom: 8,
        color: colors.disabled,
        textAlign: 'center',
    },
    cardText: {
        marginBottom: 16,
        textAlign: 'center',
        color: colors.backgroundSecondary,
    },
    cardTextSecondary: {
        height: 80,
        marginBottom: 24,
        textAlign: 'center',
        color: colors.backgroundSecondary,
    },
    divider: {
        width: 268,
    },
    cardIndicatedTitle: {
        marginTop: 16,
        color: colors.backgroundSecondary,
        textTransform: 'uppercase',
    },
    cardIndicatedTitleSecondary: {
        marginTop: 16,
        marginBottom: 8,
        color: colors.backgroundSecondary,
        textTransform: 'uppercase',
    },
    cardIndicatedText: {
        height: 120,
        color: colors.backgroundSecondary,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    cardIndicatedTextSecondary: {
        height: 120,
        color: colors.backgroundSecondary,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    cardIncludeText: {
        display: 'flex',
        width: 268,
        marginBottom: 10,
    },
    icon: {
        color: colors.primary,
        marginRight: 4,
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
        width: 220,
        height: 36,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
    },
    planCardButtonMargin: {
        marginBottom: 16,
        marginTop: 12,
    },
    buttonSecondary: {
        borderRadius: 200,
        color: colors.white,
        backgroundColor: colors.secondary,
        width: 220,
        height: 36,
        '&:hover': {
            backgroundColor: colors.secondaryHover,
        },
    },
    buttonMarginPrimary: {
        marginTop: 350,
    },
    buttonMarginSecondary: {
        marginTop: 95,
    },
    link: {
        height: 'fit-content',
        borderRadius: 200,
        '&:hover': {
            textDecoration: 'none',
        },
    },
});



class CardPlan extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;
        return (
            <Grid container className={classes.grid} justify='space-between'>
                <Card className={`${'flex-column-center'} ${classes.card}`} elevation={2}>
                    <Typography variant='h6' className={classes.cardTitle}>
                        Migrar de MEI para ME
                    </Typography>
                    <Typography variant='subtitle2' className={`${'flex-column'} ${classes.cardSubtitle}`}>
                        Contrate um plano contábil anual e o processo de migração será:
                    </Typography>
                    <Typography variant='h4' className={classes.cardPrice}>
                        grátis*
                    </Typography>
                    <Typography variant='caption' className={classes.cardDescription}>
                        *Exclusivo para empresas com sede em BH. <br/> Demais cidades consulte-nos sobre preços.
                    </Typography>
                    <Typography variant='subtitle1' className={classes.cardText}>
                        Não precisa fechar sua MEI, <br/> convertemos ela em ME.
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitle}>
                        Indicado Para:
                    </Typography>
                    <Typography variant='body2' className={classes.cardIndicatedText}>
                        Profissionais que estão como MEI, e <br/> estão prestes a estourar o limite anual
                        <br/> de faturamento, ou que precisam <br/> exercer alguma atividade impeditiva no
                        <br/> MEI
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <div className={classes.buttonMarginPrimary}>
                        <Link href={'/cadastro?refer=Migrar de MEI para ME - Card - Pagina de Planos'} color='inherit' className={classes.link}>
                            <Button className={classes.button}>
                                Venha para arithmos
                            </Button>
                        </Link>
                    </div>
                </Card>


                <Card className={`${'flex-column-center'} ${classes.card}`} elevation={2}>
                    <Typography variant='h6' className={classes.cardTitle}>
                        Contabilidade para MEI´s
                    </Typography>
                    <Typography variant='subtitle2' className={`${'flex-column'} ${classes.cardSubtitle}`}>
                        MENSALIDADE A PARTIR DE:
                    </Typography>
                    <Typography variant='h4' className={classes.cardPrice}>
                        R$90,00
                    </Typography>
                    <Typography variant='body2' className={classes.cardTextSecondary}>
                        Tenha mais controle sobre a sua <br/> atividade e fique em dia com sua <br/> distribuição de lucros.
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitle}>
                        Indicado Para:
                    </Typography>
                    <Typography variant='body2' className={classes.cardIndicatedTextSecondary}>
                        Profissionais que estão no MEI, e <br/> querem ter controle financeiro e
                        <br/> contábil da sua atividade, e um <br/> acompanhamento profissional, pois
                        <br/> querem ficar livres de dores de cabeça <br/> com o fisco.
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitleSecondary}>
                        Incluso na Mensalidade
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Emissão mensal da guia de <br/> pagamento
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Sistema Financeiro Gratuito
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Emita suas notas fiscais por nossa <br/> plataforma
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Tenha segurança para fazer a
                        <br/> distribuição de seus lucros para sua <br/> pessoa física
                    </Typography>
                    <div className={classes.buttonMarginSecondary}>
                        <Link href={'/cadastro?refer=Contabilidade para MEIs - Card - Pagina de Planos'} color='inherit' className={classes.link}>
                            <Button className={classes.button}>
                                Venha para arithmos
                            </Button>
                        </Link>
                    </div>
                </Card>

                <Card className={`${'flex-column-center'} ${classes.card}`} elevation={2}>
                    <Typography variant='h6' className={classes.cardTitle}>
                        Empresas de Serviços
                    </Typography>
                    <Typography variant='subtitle2' className={`${'flex-column'} ${classes.cardSubtitle}`}>
                        MENSALIDADE A PARTIR DE:
                    </Typography>
                    <Typography variant='h4' className={classes.cardPrice}>
                        R$150,00
                    </Typography>
                    <Typography variant='body2' className={classes.cardTextSecondary}>
                        Nossos planos variam conforme o perfil <br/> da sua empresa, quanto a faturamento
                        <br/> médio mensal, quantidade de sócios e <br/> se a empresa tem funcionários.
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitle}>
                        Indicado Para:
                    </Typography>
                    <Typography variant='body2' className={classes.cardIndicatedTextSecondary}>
                        Empresas de Prestação de serviço de <br/> Tecnologia, Startups, Advogados,
                        <br/> Atividades da Área de Saúde e <br/> Profissionais que trabalham como PJ.
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitleSecondary}>
                        Incluso na Mensalidade
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Todas as obrigações legais Federais, Estaduais e Municipais
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Apuração de Impostos
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Envio de guias de impostos
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Pró-labore de sócios
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Atendimento via Chat, Telefone e <br/> E-mail
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Relatórios Contábeis assinados por <br/> contador
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.icon}>done</Icon>Sistema Financeiro Gratuito
                    </Typography>
                    <div className={classes.planCardButtonMargin}>
                        <Link href={'/cadastro?refer=Empresas de Servicos - Card - Pagina de Planos'} color='inherit' className={classes.link}>
                            <Button className={classes.button}>
                                Venha para arithmos
                            </Button>
                        </Link>
                    </div>
                </Card>


                <Card className={`${'flex-column-center'} ${classes.card}`} elevation={2}>
                    <Typography variant='h6' className={classes.cardTitle}>
                        Empresas Maiores
                    </Typography>
                    <BusinessCenterOutlinedIcon className={classes.iconCard}>business_center</BusinessCenterOutlinedIcon>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitle}>
                        Indicado Para:
                    </Typography>
                    <Typography variant='body2' className={classes.cardIndicatedTextSecondary}>
                        Empresas dos mais diversos segmentos, <br/> que atuam com prestação de serviço <br/>
                        e/ou comércio, com uma estrutura de <br/> maior porte e que precisam de um <br/>
                        atendimento mais consultivo e <br/> personalizado.
                    </Typography>
                    <Divider variant='middle' className={classes.divider} />
                    <Typography variant='subtitle2' className={classes.cardIndicatedTitleSecondary}>
                        Incluso na Mensalidade
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconSecondary}>done</Icon>Todas as obrigações legais Federais, Estaduais e Municipais
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconSecondary}>done</Icon>Apuração de Impostos
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconSecondary}>done</Icon>Envio de guias de impostos
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconSecondary}>done</Icon>Pró-labore de sócios
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconSecondary}>done</Icon>Atendimento via Chat, Telefone e <br/> E-mail
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconSecondary}>done</Icon>Relatórios Contábeis assinados por <br/> contador
                    </Typography>
                    <Typography variant='body2' className={`${'flex-row-center'} ${classes.cardIncludeText}`}>
                        <Icon className={classes.iconSecondary}>done</Icon>Sistema Financeiro Gratuito
                    </Typography>
                    <div className={classes.planCardButtonMargin}>
                        <Link href={'/contato?refer=Empresas Maiores - Card - Pagina de Planos'} color='inherit' className={classes.link}>
                            <Button className={classes.buttonSecondary}>
                                Fale Conosco
                            </Button>
                        </Link>
                    </div>
                </Card>
            </Grid>
        );
    }
}

CardPlan.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(CardPlan);