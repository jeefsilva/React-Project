import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MuiTheme } from 'material-ui/styles';
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
            width: 1028,
        },
        [theme.breakpoints.down('md')]: {
            width: 900,
        },
        [theme.breakpoints.only('sm')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    institutionalSection: {
        backgroundColor: colors.background,
        marginTop: 40,
        marginBottom: 54,
        [theme.breakpoints.down('xs')]: {
            marginTop: 24,
        },
    },
    institutionalCard: {
        padding: 20,
        marginBottom: 44,
        [theme.breakpoints.down('xs')]: {
            boxShadow: 'none',
            backgroundColor: colors.background,
            padding: 0,
        },
    },
    institutionalTitle: {
        color: colors.backgroundSecondary,
        fontWeight: 500,
        marginBottom: 24,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 16,
            fontSize: 20,
        },
    },
    institutionalSubTitle: {
        color: colors.backgroundSecondary,
        fontWeight: 500,
        marginBottom: 24,
    },
    institutionalText: {
        color: colors.backgroundSecondary,
        fontWeight: 'normal',
        [theme.breakpoints.down('xs')]: {
            lineHeight: '28px',
        },
    },
    panel: {
        width: 820,
        backgroundColor: colors.background,
        color: colors.backgroundSecondary,
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    panelSummary: {
        padding: 0,
        marginTop: 0,
        marginBottom: 0,
    },
    panelTitle: {
        color: colors.backgroundSecondary,
        fontWeight: 500,
        [theme.breakpoints.down('xs')]: {
            width: 292,
        },
    },
    panelDetails: {
        padding: 0,
    },
    panelText: {
        color: colors.backgroundSecondary,
        marginBottom: 8,
    },
    expandIcon: {
        right: 0,
        color: colors.backgroundSecondary,
    },
    paragraph: {
        marginTop: 25,
        marginBottom: 16,
    },
    divider: {
        marginLeft: 0,
        marginRight: 0,
    }
});



class HistorySection extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='flex-start'>
                        <Paper className={classes.institutionalSection} elevation={0}>
                            <Typography variant='h4' className={classes.institutionalTitle}>
                                Nossa História
                            </Typography>
                            <Paper className={classes.institutionalCard} elevation={2}>
                                <Typography variant='h6' className={classes.institutionalText}>
                                    São quase 20 anos de atuação no mercado contábil brasileiro. Centenas de clientes atendidos, dos
                                    mais diversos segmentos. E o propósito de sempre oferecer serviços qualificados, ágeis e que
                                    estejam adequados às necessidades das empresas. Foi assim, sempre pensando em melhorar continuamente,
                                    que a Arithmos se consolidou em sua área de atuação.
                                    <div className={classes.paragraph} />
                                    Essa história teve início em 2001, ainda com o nome de Premium Contabilidade. Sete anos depois, em
                                    março de 2008, foi que a empresa passou a adotar a razão social de Arithmos Gestão Contábil, sob a
                                    responsabilidade técnica de seu fundador, Felipe Drummond.
                                    <div className={classes.paragraph} />
                                    O que era apenas um escritório simples e pequeno, hoje conta com uma grande equipe, composta
                                    por profissionais especializados em Ciências Contábeis e Administração de Empresas, que
                                    periodicamente passam por processos de reciclagem e qualificação.
                                    <div className={classes.paragraph} />
                                    O crescimento da empresa propiciou a expansão de seu atendimento para dois núcleos de atuação:
                                    <div className={classes.paragraph} />
                                    Arithmos contabilidade: oferece gestão contábil, fiscal e pessoal, com foco no atendimento
                                    consultivo e mais próximo com os clientes, de todos os setores econômicos. Atualmente atende
                                    empresas que desempenham atividades nas cidades de Belo Horizonte, Nova Lima, Contagem,
                                    Ouro Preto, Rio de Janeiro e São Paulo.
                                    <div className={classes.paragraph} />
                                    Arithmos contabilidade online: esse novo serviço alia a experiência da contabilidade
                                    tradicional com a praticidade do mundo virtual. O foco é usar a tecnologia para oferecer serviços
                                    online, ágeis e simplificados, mas mantendo a proximidade com Contador, para garantir o suporte
                                    exclusivo e a confiabilidade que a empresa precisa. Atualmente esse serviço está disponível para
                                    as cidades das regiões metropolitanas de Belo Horizonte, Rio de Janeiro e São Paulo.
                                </Typography>
                            </Paper>
                            <Hidden only={['xs']}>
                                <Typography variant='h5' className={classes.institutionalSubTitle}>
                                    Atendimento consultivo
                                </Typography>
                                <Paper className={classes.institutionalCard} elevation={2}>
                                    <Typography variant='h6' className={classes.institutionalText}>
                                        Um dos principais diferenciais da Arithmos é a proximidade com os seus clientes. Seja no
                                        modelo tradicional ou online, a gestão contábil preza pelo atendimento consultivo e mais personalizado.
                                        <div className={classes.paragraph} />
                                        Assim, conseguimos oferecer informações e orientações que podem contribuir para que as
                                        empresas façam uma gestão contábil, fiscal e pessoal mais estratégica e possam tomar decisões
                                        mais assertivas, seja para manter o negócio em dia (regularizado), planejar investimentos e
                                        crescimento ou prevenir contra possíveis problemas (multas, penalidades, prejuízos financeiros, etc).
                                    </Typography>
                                </Paper>
                                <Typography variant='h5' className={classes.institutionalSubTitle}>
                                    Parceiros jurídicos
                                </Typography>
                                <Paper className={classes.institutionalCard} elevation={2}>
                                    <Typography variant='h6' className={classes.institutionalText}>
                                        A Arithmos conta com uma parceria jurídica com o Ribeiro Lobato Advogados, que permite
                                        oferecer aos clientes pacotes de serviços mais amplos, incluindo uma assessoria jurídica,
                                        de forma a dar total segurança nas suas operações.
                                    </Typography>
                                </Paper>
                                <Typography variant='h5' className={classes.institutionalSubTitle}>
                                    Expertise no cenário cultural
                                </Typography>
                                <Paper className={classes.institutionalCard} elevation={2}>
                                    <Typography variant='h6' className={classes.institutionalText}>
                                        A Arithmos possui mais de 10 anos de atuação no mercado Cinematográfico e Cultural Brasileiro,
                                        com ampla experiência e conhecimento das leis de incentivo à cultura e leis do audiovisual.
                                    </Typography>
                                </Paper>
                                <Typography variant='h5' className={classes.institutionalSubTitle}>
                                    Planos e condições adequados para o tamanho do seu negócio
                                </Typography>
                                <Paper className={classes.institutionalCard} elevation={2}>
                                    <Typography variant='h6' className={classes.institutionalText}>
                                        A Arithmos oferece opções de planos e valores diferenciados, de acordo com o
                                        tamanho/porte da empresa e as suas demandas contábeis.
                                    </Typography>
                                </Paper>
                            </Hidden>

                            <Hidden only={['lg', 'xl', 'md', 'sm']}>
                                <ExpansionPanel className={classes.panel} elevation={0}>
                                    <ExpansionPanelSummary className={classes.panelSummary}
                                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}>
                                        <Typography variant='body1' className={classes.panelTitle}>
                                            Atendimento consultivo
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Typography variant='body2' className={classes.panelText}>
                                            A Arithmos conta com uma parceria jurídica com o Ribeiro Lobato Advogados,
                                            que permite oferecer aos clientes pacotes de serviços mais amplos, incluindo uma
                                            assessoria jurídica, de forma a dar total segurança nas suas operações.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <Divider variant='middle' className={classes.divider} />

                                <ExpansionPanel className={classes.panel} elevation={0}>
                                    <ExpansionPanelSummary className={classes.panelSummary}
                                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}>
                                        <Typography variant='body1' className={classes.panelTitle}>
                                            Parceiros jurídicos
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Typography component={'span'} variant='body2' className={classes.panelText}>
                                            Um dos principais diferenciais da Arithmos é a proximidade com os seus clientes.
                                            Seja no modelo tradicional ou online, a gestão contábil preza pelo atendimento
                                            consultivo e mais personalizado.
                                            <div className={classes.paragraph} />
                                            Assim, conseguimos oferecer informações e orientações que podem contribuir para
                                            que as empresas façam uma gestão contábil, fiscal e pessoal mais estratégica e possam
                                            tomar decisões mais assertivas, seja para manter o negócio em dia (regularizado),
                                            planejar investimentos e crescimento ou prevenir contra possíveis problemas
                                            (multas, penalidades, prejuízos financeiros, etc).
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <Divider variant='middle' className={classes.divider} />

                                <ExpansionPanel className={classes.panel} elevation={0}>
                                    <ExpansionPanelSummary className={classes.panelSummary}
                                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}>
                                        <Typography variant='body1' className={classes.panelTitle}>
                                            Expertise no cenário cultural
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Typography variant='body2' className={classes.panelText}>
                                            A Arithmos possui mais de 10 anos de atuação no mercado Cinematográfico e
                                            Cultural Brasileiro,  com ampla experiência e conhecimento das leis
                                            de incentivo à cultura e leis do audiovisual.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <Divider variant='middle' className={classes.divider} />

                                <ExpansionPanel className={classes.panel} elevation={0}>
                                    <ExpansionPanelSummary className={classes.panelSummary}
                                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}>
                                        <Typography variant='body1' className={classes.panelTitle}>
                                            Planos e condições adequados para o tamanho do seu negócio
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Typography variant='body2' className={classes.panelText}>
                                            A Arithmos oferece opções de planos e valores diferenciados, de
                                            acordo com o tamanho/porte da empresa e as suas demandas contábeis.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Hidden>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

HistorySection.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(HistorySection);