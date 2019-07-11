import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';
import DialogForm from './dialog-form';

const styles = (theme: MuiTheme) => ({
    root: {
        backgroundColor: colors.background,
        height: '100vh',
        backgroundImage: `url(${'/static/assets/forms/register.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: 560,
        [theme.breakpoints.down('xl')]: {
            minHeight: 660,
        },
        [theme.breakpoints.down('lg')]: {
            '@media (max-width: 1450px)': {
                minHeight: 1100,
            },
            minHeight: 1000,
        },
        [theme.breakpoints.down('md')]: {
            minHeight: 1050,
            backgroundSize: 500,
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: 930,
            backgroundSize: 400,
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: 950,
            backgroundSize: 258,
        },
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: 1028,
        },
        [theme.breakpoints.only('sm')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    registerSection: {
        backgroundColor: colors.background,
        height: 'fit-content',
    },
    registerTitle: {
        marginTop: 80,
        marginBottom: 48,
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            marginTop: 24,
            marginBottom: 24,
            fontSize: 24,
        },
    },
    formSection: {
        display: 'flex',
    },
    form: {
        width: 820,
        paddingLeft: 16,
        marginRight: 4,
        [theme.breakpoints.only('sm')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    textField: {
        width: 388,
        marginRight: 12,
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
        [theme.breakpoints.only('sm')]: {
            width: 280,
        },
    },
    spaceField: {
        marginRight: 300,
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
        },
    },
    iconHelper: {
        color:colors.backgroundSecondary,
    },
    dialogMargin: {
        marginTop: 26,
    },
});

interface Props {
    refer: string;
    formId: string;
}

class RegisterForm extends React.Component<Props> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    formRef = null;
    state = {
        firstname: '',
        lastname: '',
        email: '',
        tellphone: '',
        city: '',
        corpName: '',
        cnpj: ''
    };


    changeValue = (element: any, propName: string) => {
        const value = element.target.value;
        const nextState: any = {};
        nextState[propName] = value;
        this.setState(nextState);
    };


    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Paper className={classes.registerSection} elevation={0}>
                        <Typography variant='h4' className={classes.registerTitle}>
                            Formulário de Cadastro
                        </Typography>
                        <Paper className={classes.formSection} elevation={1}>
                            <form ref={(ref) => {
                                // @ts-ignore
                                return this.formRef = ref;
                            }} className={classes.form} noValidate autoComplete='off' onSubmit={event => {
                                event.preventDefault();

                                // @ts-ignore
                                this.formRef.reset();
                            }}>
                                <TextField
                                    id='outlined-name'
                                    label='Nome'
                                    value={this.state.firstname}
                                    className={classes.textField}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    required={true}
                                    onChange={e => this.changeValue(e, 'firstname')}
                                />
                                <TextField
                                    id='outlined-name'
                                    label='Sobrenome'
                                    value={this.state.lastname}
                                    className={classes.textField}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    required={true}
                                    onChange={e => this.changeValue(e, 'lastname')}
                                />
                                <TextField
                                    id='outlined-email-input'
                                    label='E-mail'
                                    value={this.state.email}
                                    className={classes.textField}
                                    type='email'
                                    name='email'
                                    autoComplete='email'
                                    margin='normal'
                                    variant='outlined'
                                    required={true}
                                    onChange={e => this.changeValue(e, 'email')}
                                />
                                <TextField
                                    id='outlined-name'
                                    label='Telefone'
                                    value={this.state.tellphone}
                                    className={classes.textField}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    required={true}
                                    onChange={e => this.changeValue(e, 'tellphone')}
                                />
                                <TextField
                                    id='outlined-name'
                                    label='Cidade'
                                    value={this.state.city}
                                    className={`${classes.spaceField} ${classes.textField}`}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    required={true}
                                    onChange={e => this.changeValue(e, 'city')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <Tooltip title='Verifique se a Cidade da sua empresa possui nosso suporte.'>
                                                    <Icon className={classes.iconHelper}>help</Icon>
                                                </Tooltip>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    id='outlined-name'
                                    label='Nome da Empresa'
                                    value={this.state.corpName}
                                    className={classes.textField}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    onChange={e => this.changeValue(e, 'corpName')}
                                />
                                <TextField
                                    id='outlined-name'
                                    label='CNPJ'
                                    value={this.state.cnpj}
                                    className={classes.textField}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    onChange={e => this.changeValue(e, 'cnpj')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <Tooltip title='Inserir seu CNPJ auxiliará a desenvolver uma proposta especial para seu negócio.'>
                                                    <Icon className={classes.iconHelper}>help</Icon>
                                                </Tooltip>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Grid container justify='center' className={classes.dialogMargin}>
                                    <Grid container justify='center'>
                                        <DialogForm formId={this.props.formId} refer={this.props.refer} formData={this.state}
                                                    requiredFields={['firstname', 'lastname', 'email', 'tellphone', 'city']}/>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(RegisterForm);
