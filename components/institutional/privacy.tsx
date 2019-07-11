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


class PrivacySection extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const {classes} = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='flex-start'>
                        <Paper className={classes.institutionalSection} elevation={0}>
                            <Typography variant='h4' className={classes.institutionalTitle}>
                                Política de Privacidade
                            </Typography>
                            <Paper className={classes.institutionalCard} elevation={2}>
                                <Typography component={'span'} variant='h6' className={classes.institutionalText}>
                                    <Hidden only={['xs']}>
                                        ARITHMOS CONTABILIDADE
                                    </Hidden>
                                    <div className={classes.paragraph} />
                                    A ARITHMOS tem como prioridade a manutenção de uma relação de confiança e no intuito de
                                    tornar claras as questões de privacidade da relação aos dados coletados e armazenados,
                                    este termo referente à “Política de privacidade” tem a intenção de esclarecer sobre quais
                                    informações coletamos e como as utilizamos, e este deve ser aceito, observado e cumprido por
                                    todos os clientes e usuários dos serviços da ARITHMOS. Por sua vez, desde já, a ARITHMOS se obriga,
                                    nos termos da legislação em vigor e do presente termo, a garantir a privacidade dos seus clientes.
                                </Typography>
                            </Paper>
                            <Hidden only={['xs']}>
                                <Typography variant='h5' className={classes.institutionalSubTitle}>
                                    Quais informações que coletamos?
                                </Typography>
                                <Paper className={classes.institutionalCard} elevation={2}>
                                    <Typography component={'span'} variant='h6' className={classes.institutionalText}>
                                        A ARITHMOS irá cadastrar e obter dados gerais do cliente (pessoa jurídica) contratante dos serviços contábeis,
                                        bem como os dados pessoais e documentais dos responsáveis legais pelas pessoas jurídicas contratantes de
                                        nossos serviços,
                                        bem como dados financeiros e fiscais.
                                        <div className={classes.paragraph} />
                                        A ARITHMOS se resguarda o direito de gravar seu IP, tipo de navegador, aparelho e operadora de celular,
                                        posição geográfica e outros dados relativos aos usuários.
                                        As informações coletadas e existentes em nossos sistemas são (i) informações que o usuário se prontifica a
                                        fornecer através de cadastro (dados pessoais, dados financeiros, dados de conta e dados de acesso), emissão de
                                        notas fiscais ou importação de extratos bancários e (ii) informações necessárias para a realização dos
                                        serviços
                                        contábeis, objeto do contrato entre as partes.
                                        <div className={classes.paragraph} />
                                        As informações que os usuários se prontificam a fornecer são aquelas definidas como dados pessoais, dados
                                        financeiros,
                                        dados de conta e dados de acesso e que são preenchidas no momento do cadastro necessário para utilização os
                                        sistemas da
                                        ARITHMOS, bem como aquelas preenchidas sempre que o usuário utiliza nossos serviços por meio eletrônico.
                                        <div className={classes.paragraph} />
                                        Nenhuma consequência poderá ocorrer da recusa em preencher tais informações, exceto que o usuário não poderá
                                        obter o
                                        benefício de utilização dos serviços objeto do contrato entre as partes.
                                        <div className={classes.paragraph} />
                                        As informações coletadas automaticamente não são informações pessoais, mas sim sobre os computadores,
                                        smartphones ou
                                        outros dispositivos que o usuário utiliza para acessar a plataforma, bem como o nome de domínio do seu
                                        provedor de
                                        acesso à internet, o endereço de protocolo IP utilizado para se conectar à Plataforma, o tipo e versão do
                                        browser do usuário,
                                        o sistema operacional, o tempo médio gasto na Plataforma, as páginas visitadas na Plataforma, as informações
                                        procuradas,
                                        os horários de acesso e outras estatísticas relevantes para o fornecimento de serviço.
                                    </Typography>
                                </Paper>
                                <Typography variant='h5' className={classes.institutionalSubTitle}>
                                    O que fazemos com as informações coletadas?
                                </Typography>
                                <Paper className={classes.institutionalCard} elevation={2}>
                                    <Typography component={'span'} variant='h6' className={classes.institutionalText}>
                                        A ARITHMOS não divulga nem comercializa com terceiros as informações de seus clientes, de forma que possam
                                        identificar os mesmos. Respeitando o código de ética contábil, respeitamos a privacidade e o sigilo da relação
                                        cliente x contador.
                                        <div className={classes.paragraph} />
                                        A ARITHMOS poderá utilizar as informações fornecidas ou obtidas automaticamente no intuito de realizar
                                        análises, estudos, melhorias do sistema ou por força de ordem judicial.
                                        Por isso, tanto as informações que o usuário se prontifica a fornecer quanto as informações coletadas
                                        automaticamente são utilizadas para mensurar o uso da plataforma, bem como para administrar os serviços
                                        prestados, aperfeiçoá-lo e identificar possíveis necessidades dos usuários.
                                        <div className={classes.paragraph} />
                                        A ARITHMOS envia e-mails, e o usuário desde já autoriza que ela o faça, com alertas e comunicados relacionados
                                        às funções da plataforma no intuito permitir que o usuário explore todas as suas funcionalidades, bem como com
                                        informações relevantes à contabilidade, planejamento financeiro ou questões referentes à gestão empresarial,
                                        entre outros tipos.
                                        <div className={classes.paragraph} />
                                        Na plataforma pode conter links a outros web sites. E a presente declaração de privacidade não abrange os
                                        referidos sites, não podendo a ARITHMOS ser responsabilizada pelas práticas de privacidade de outros sites.
                                        <div className={classes.paragraph} />
                                        A ARITHMOS reserva-se o direito de alterar a presente política a qualquer tempo, informando o usuário no prazo
                                        de 30 (trinta) dias antes do início de sua vigência para que o usuário tome ciência e expresse nova
                                        concordância.
                                        <div className={classes.paragraph} />
                                        Caso o usuário não concorde com a nova política, deve informar tão logo tome ciência da alteração, de modo a
                                        viabilizar uma regular rescisão contratual entre a empresa e o usuário, observados sempre o contrato de
                                        prestação de serviços e a política de armazenamento de informações vigentes no presente momento.
                                        <div className={classes.paragraph} />
                                    </Typography>
                                </Paper>
                                <Typography variant='h5' className={classes.institutionalSubTitle}>
                                    Do armazenamento e exclusão das informações e dados pessoais
                                </Typography>
                                <Paper className={classes.institutionalCard} elevation={2}>
                                    <Typography variant='h6' className={classes.institutionalText}>
                                        Quando o usuário exclui sua conta e rescinde o contrato, os dados pessoais serão excluídos,
                                        porém são mantidas as informações de guarda obrigatória, conforme determinação legal.
                                        Caso o usuário tenha qualquer dúvida quanto à presente política de privacidade,
                                        poderá entrar em contato com a ARITHMOS através da plataforma ou atendimento online.
                                    </Typography>
                                </Paper>
                            </Hidden>

                            <Hidden only={['lg', 'xl', 'md', 'sm']}>
                                <ExpansionPanel className={classes.panel} elevation={0}>
                                    <ExpansionPanelSummary className={classes.panelSummary}
                                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                                        <Typography variant='body1' className={classes.panelTitle}>
                                            Quais informações que coletamos?
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Typography component={'span'} variant='body2' className={classes.panelText}>
                                            A ARITHMOS irá cadastrar e obter dados gerais do cliente (pessoa jurídica) contratante dos serviços
                                            contábeis,
                                            bem como os dados pessoais e documentais dos responsáveis legais pelas pessoas jurídicas contratantes de
                                            nossos serviços,
                                            bem como dados financeiros e fiscais.
                                            <br/>
                                            A ARITHMOS se resguarda o direito de gravar seu IP, tipo de navegador, aparelho e operadora de celular,
                                            posição geográfica e outros dados relativos aos usuários.
                                            As informações coletadas e existentes em nossos sistemas são (i) informações que o usuário se prontifica a
                                            fornecer através de cadastro (dados pessoais, dados financeiros, dados de conta e dados de acesso),
                                            emissão de
                                            notas fiscais ou importação de extratos bancários e (ii) informações necessárias para a realização dos
                                            serviços
                                            contábeis, objeto do contrato entre as partes.
                                            <br/>
                                            As informações que os usuários se prontificam a fornecer são aquelas definidas como dados pessoais, dados
                                            financeiros,
                                            dados de conta e dados de acesso e que são preenchidas no momento do cadastro necessário para utilização
                                            os sistemas da
                                            ARITHMOS, bem como aquelas preenchidas sempre que o usuário utiliza nossos serviços por meio eletrônico.
                                            <br/>
                                            Nenhuma consequência poderá ocorrer da recusa em preencher tais informações, exceto que o usuário não
                                            poderá obter o
                                            benefício de utilização dos serviços objeto do contrato entre as partes.
                                            <br/>
                                            As informações coletadas automaticamente não são informações pessoais, mas sim sobre os computadores,
                                            smartphones ou
                                            outros dispositivos que o usuário utiliza para acessar a plataforma, bem como o nome de domínio do seu
                                            provedor de
                                            acesso à internet, o endereço de protocolo IP utilizado para se conectar à Plataforma, o tipo e versão do
                                            browser do usuário,
                                            o sistema operacional, o tempo médio gasto na Plataforma, as páginas visitadas na Plataforma, as
                                            informações procuradas,
                                            os horários de acesso e outras estatísticas relevantes para o fornecimento de serviço.
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <Divider variant='middle' className={classes.divider} />

                                <ExpansionPanel className={classes.panel} elevation={0}>
                                    <ExpansionPanelSummary className={classes.panelSummary}
                                                           expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                                        <Typography variant='body1' className={classes.panelTitle}>
                                            O que fazemos com as informações coletadas?
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.panelDetails}>
                                        <Typography component={'span'} variant='body2' className={classes.panelText}>
                                            A ARITHMOS não divulga nem comercializa com terceiros as informações de seus clientes, de forma que possam
                                            identificar os mesmos. Respeitando o código de ética contábil, respeitamos a privacidade e o sigilo da
                                            relação cliente x contador.
                                            <br/>
                                            A ARITHMOS poderá utilizar as informações fornecidas ou obtidas automaticamente no intuito de realizar
                                            análises, estudos, melhorias do sistema ou por força de ordem judicial.
                                            Por isso, tanto as informações que o usuário se prontifica a fornecer quanto as informações coletadas
                                            automaticamente são utilizadas para mensurar o uso da plataforma, bem como para administrar os serviços
                                            prestados, aperfeiçoá-lo e identificar possíveis necessidades dos usuários.
                                            <br/>
                                            A ARITHMOS envia e-mails, e o usuário desde já autoriza que ela o faça, com alertas e comunicados
                                            relacionados às funções da plataforma no intuito permitir que o usuário explore todas as suas
                                            funcionalidades, bem como com informações relevantes à contabilidade, planejamento financeiro ou questões
                                            referentes à gestão empresarial, entre outros tipos.
                                            <br/>
                                            Na plataforma pode conter links a outros web sites. E a presente declaração de privacidade não abrange os
                                            referidos sites, não podendo a ARITHMOS ser responsabilizada pelas práticas de privacidade de outros
                                            sites.
                                            <br/>
                                            A ARITHMOS reserva-se o direito de alterar a presente política a qualquer tempo, informando o usuário no
                                            prazo de 30 (trinta) dias antes do início de sua vigência para que o usuário tome ciência e expresse nova
                                            concordância.
                                            <br/>
                                            Caso o usuário não concorde com a nova política, deve informar tão logo tome ciência da alteração, de modo
                                            a viabilizar uma regular rescisão contratual entre a empresa e o usuário, observados sempre o contrato de
                                            prestação de serviços e a política de armazenamento de informações vigentes no presente momento.
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

PrivacySection.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(PrivacySection);