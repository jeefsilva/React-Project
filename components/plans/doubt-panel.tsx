import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
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
    titleSection: {
        marginTop: 48,
        marginBottom: 48,
        backgroundColor: 'transparent',
    },
    title: {
        textAlign: 'center',
        color: colors.white,
    },
    panel: {
        width: 820,
        backgroundColor: colors.backgroundSecondary,
        color: colors.white,
        [theme.breakpoints.only('sm')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    panelSummary: {
        padding: 0,
        marginTop: 4,
        marginBottom: 4,
    },
    panelTitle: {
        color: colors.white,
        fontWeight: 500,
    },
    panelDetails: {
        padding: 0,
    },
    panelText: {
        color: colors.white,
        marginBottom: 8,
    },
    expandIcon: {
        padding: '0 !important',
        right: '0 !important',
        color: colors.white
    },
    expandedIcon: {
        right: '0 !important'
    },
    divider: {
        width: 820,
        backgroundColor: colors.white,
        [theme.breakpoints.only('sm')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
});


class DoubtPanel extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <Grid container className={classes.grid} justify='center'>
                <ExpansionPanel className={classes.panel} elevation={0}>
                    <ExpansionPanelSummary className={classes.panelSummary}
                                           classes={{
                                               expandIcon: classes.expandIcon,
                                               expanded: classes.expandedIcon,
                                           }}
                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                        <Typography variant='body1' className={classes.panelTitle}>
                            Entrega de todas as obrigações legais.
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <Typography variant='body2' className={classes.panelText}>
                            Fazemos a entrega de todas as obrigações legais obrigatórias, tanto da Receita Federal, Estado e Município.
                            Fique tranquilo que sua empresa ficará sempre em dia com a burocracia.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Divider variant='middle' className={classes.divider}/>

                <ExpansionPanel className={classes.panel} elevation={0}>
                    <ExpansionPanelSummary className={classes.panelSummary}
                                           classes={{
                                               expandIcon: classes.expandIcon,
                                               expanded: classes.expandedIcon,
                                           }}
                                           expandIcon={<ExpandMoreIcon classes={{root: classes.expandIconSection}}
                                                                       className={classes.expandIcon}/>}>
                        <Typography variant='body1' className={classes.panelTitle}>
                            Emissão de guias de impostos.
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <Typography variant='body2' className={classes.panelText}>
                            Fazemos a apuração dos impostos da sua empresa, e enviamos para você as guias dos impostos devidos.
                            Tudo de forma simples e rápida. Você recebe as guias por e-mail,
                            além de ter acesso a elas a qualquer momento em nossa plataforma.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Divider variant='middle' className={classes.divider}/>

                <ExpansionPanel className={classes.panel} elevation={0}>
                    <ExpansionPanelSummary className={classes.panelSummary}
                                           classes={{
                                               expandIcon: classes.expandIcon,
                                               expanded: classes.expandedIcon,
                                           }}
                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                        <Typography variant='body1' className={classes.panelTitle}>
                            Orientação para emissão de nota fiscal.
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <Typography variant='body2' className={classes.panelText}>
                            Fique tranquilo, que nosso time de contadores, irá lhe orientar
                            na hora que você precisar emitir suas notas fiscais.
                            Será muito simples, pois nossa plataforma, faz a emissão de suas notas de forma simples e rápida.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Divider variant='middle' className={classes.divider}/>

                <ExpansionPanel className={classes.panel} elevation={0}>
                    <ExpansionPanelSummary className={classes.panelSummary}
                                           classes={{
                                               expandIcon: classes.expandIcon,
                                               expanded: classes.expandedIcon,
                                           }}
                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                        <Typography variant='body1' className={classes.panelTitle}>
                            Documentos assinados por contador.
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <Typography variant='body2' className={classes.panelText}>
                            Sempre que precisar, fique tranquilo, pois nossa empresa é
                            devidamente registrada junto ao Conselho de Contabilidade.
                            Emitimos os documentos que precisar, devidamente assinados por um contador legalmente registrado.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Divider variant='middle' className={classes.divider}/>

                <ExpansionPanel className={classes.panel} elevation={0}>
                    <ExpansionPanelSummary className={classes.panelSummary}
                                           classes={{
                                               expandIcon: classes.expandIcon,
                                               expanded: classes.expandedIcon,
                                           }}
                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                        <Typography variant='body1' className={classes.panelTitle}>
                            Pró-labore de sócios.
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <Typography variant='body2' className={classes.panelText}>
                            Sabemos que a legislação previdenciária obriga os empresários a
                            fazerem mensalmente uma retirada de pró-labore com o devido recolhimento de INSS.
                            Orientamos os sócios sobre esta obrigação, e cuidamos da parte burocrática envolvida.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Divider variant='middle' className={classes.divider}/>

                <ExpansionPanel className={classes.panel} elevation={0}>
                    <ExpansionPanelSummary className={classes.panelSummary}
                                           classes={{
                                               expandIcon: classes.expandIcon,
                                               expanded: classes.expandedIcon,
                                           }}
                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                        <Typography variant='body1' className={classes.panelTitle}>
                            Folha de pagamento de funcionários*.
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <Typography variant='body2' className={classes.panelText}>
                            Conforme o plano contratado, cumprimos com todas as obrigações referente
                            à folha de pagamento de seus funcionários.
                            Orientamos e cuidamos dos processos de folha de pagamento, férias,
                            13º salário, processos de admissão, demissão e entrega do eSocial.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Divider variant='middle' className={classes.divider}/>

                <ExpansionPanel className={classes.panel} elevation={0}>
                    <ExpansionPanelSummary className={classes.panelSummary}
                                           classes={{
                                               expandIcon: classes.expandIcon,
                                               expanded: classes.expandedIcon,
                                           }}
                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                        <Typography variant='body1' className={classes.panelTitle}>
                            Relatórios contábeis.
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <Typography variant='body2' className={classes.panelText}>
                            Emitimos mensalmente o balancete da sua empresa, conforme a movimentação
                            financeira e contábil da sua empresa.
                            Além disto, fazemos o fechamento contábil da sua empresa, com a
                            emissão e registro de Balanço, DRE e Índices Contábeis, entre outros.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <Divider variant='middle' className={classes.divider}/>

                <ExpansionPanel className={classes.panel} elevation={0}>
                    <ExpansionPanelSummary className={classes.panelSummary}
                                           classes={{
                                               expandIcon: classes.expandIcon,
                                               expanded: classes.expandedIcon,
                                           }}
                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                        <Typography variant='body1' className={classes.panelTitle}>
                            Plataforma financeira gratuita.
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <Typography variant='body2' className={classes.panelText}>
                            Somos parceiros da ContaAzul, maior software financeiro
                            para Micro e Pequenas Empresas do Brasil.
                            Com isto, disponibilizamos para nossos clientes, um acesso gratuito
                            à plataforma, para que você faça uma completa gestão financeira da sua empresa.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        );
    }
}

DoubtPanel.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(DoubtPanel);
