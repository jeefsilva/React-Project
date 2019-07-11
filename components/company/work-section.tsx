import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
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
    workTitleSection: {
        marginTop: 139,
        marginLeft: 104,
        marginBottom: 12,
        backgroundColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            marginTop: 48,
            marginLeft: 0,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            marginBottom: 0,
        },
    },
    workSection: {
        marginLeft: 104,
        backgroundColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            marginBottom: 0,
        },
    },
    workTitle: {
        color: colors.white,
        fontWeight: 500,
        [theme.breakpoints.down('xs')]: {
            marginTop: 24,
            marginBottom: 0,
            fontSize: 34,
        },
    },
    workTypeSection: {
        backgroundColor: 'transparent',
        [theme.breakpoints.only('sm')]: {
            width: 600,
        },
    },
    workTypeTitle: {
        display: 'flex',
        width: 231,
        textAlign: 'left',
        color: colors.primary,
        fontWeight: 500,
        marginTop: 80,
        marginBottom: 48,
        [theme.breakpoints.down('xs')]: {
            fontSize: 34,
            marginTop: 24,
            marginBottom: 16,
        },
    },
    icon: {
        paddingRight: 16,
        [theme.breakpoints.down('xs')]: {
            width: 40,
            height: 40,
            paddingRight: 0,
            marginRight: 16,
        },
    },
    workTypeText: {
        color: colors.white,
        width: 924,
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
        [theme.breakpoints.only('sm')]: {
            width: 600,
        },
    },
    buttonTitle: {
        color: colors.primary,
        fontWeight: 500,
        marginTop: 80,
        marginBottom: 48,
        [theme.breakpoints.down('xs')]: {
            marginTop: 48,
            marginBottom: 24,
        },
    },
    buttonText: {
        color: colors.white,
        marginBottom: 56,
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            marginBottom: 24,
        },
    },
    button: {
        backgroundColor: colors.primary,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
        width: 300,
        height: 48,
        color: colors.white,
        borderRadius: 200,
        [theme.breakpoints.down('xs')]: {
            height: 36,
        },
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
    buttonMargin: {
        marginBottom: 70,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 60,
        },
    },
});



class WorkSection extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;
        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='flex-start'>
                        <Paper className={classes.workTitleSection} elevation={0}>
                            <Typography variant='h3' className={classes.workTitle}>
                                Como funciona?
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid container className={classes.grid} justify='flex-start'>
                        <Grid item className={`${'flex-column'} ${classes.workSection}`}>
                            <Paper className={`${'flex-column'} ${classes.workTypeSection}`} elevation={0}>
                                <Typography variant='h3' className={`${'flex-row-center'} ${classes.workTypeTitle}`}>
                                    <img src='/static/assets/work-section/icon1.svg' alt='Defina' className={classes.icon} />
                                    Defina.
                                </Typography>
                                <Typography variant='h5' className={classes.workTypeText}>
                                    Escolha se você terá sócios, o nome da empresa, o <br/>
                                    endereço sede e as atividades que a empresa exercerá.
                                </Typography>
                            </Paper>
                            <Paper className={`${'flex-column'} ${classes.workTypeSection}`} elevation={0}>
                                <Typography variant='h3' className={`${'flex-row-center'} ${classes.workTypeTitle}`}>
                                    <img src='/static/assets/work-section/icon2.svg' alt='Aguarde' className={classes.icon} />
                                    Aguarde.
                                </Typography>
                                <Typography variant='h5' className={classes.workTypeText}>
                                    Agora seu processo passará por uma préaprovação da Receita Federal.
                                    Se em seu Estado os processos forem eletrônicos, como em MG,
                                    aproveite o tempo para fazer seu certificado digital eCPF A3.
                                    Tudo pré-aprovado, agora vamos ao contrato social da sua empresa.
                                </Typography>
                            </Paper>
                            <Paper className={`${'flex-column'} ${classes.workTypeSection}`} elevation={0}>
                                <Typography variant='h3' className={`${'flex-row-center'} ${classes.workTypeTitle}`}>
                                    <img src='/static/assets/work-section/icon3.svg' alt='Finalize' className={classes.icon} />
                                    Finalize.
                                </Typography>
                                <Typography variant='h5' className={classes.workTypeText}>
                                    Hora de assinar tudo e protocolar na Junta Comercial do seu Estado.
                                    Contrato registrado, agora já teremos o seu CNPJ e Inscrição Municipal, hora de partir para o Alvará.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.grid} justify='center'>
                        <Grid item className={'flex-column-center'}>
                            <Typography variant='h2' className={classes.buttonTitle}>
                                Pronto!
                            </Typography>
                            <Typography variant='h5' className={classes.buttonText}>
                                Hora de trabalhar e emitir notas fiscais!
                            </Typography>
                            <div className={classes.buttonMargin}>
                                <Link href={'/planos?tab=1'} color='inherit' className={classes.link}>
                                    <Button variant='contained' className={classes.button}>
                                        Abrir Empresa
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

WorkSection.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(WorkSection);