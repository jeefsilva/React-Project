import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
        backgroundImage: `url(${'/static/assets/forms/contact.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom',
        backgroundSize: 500,
        [theme.breakpoints.down('xl')]: {
            minHeight: 780,
        },
        [theme.breakpoints.down('lg')]: {
            '@media (max-width: 1570px)': {
                minHeight: 1250,
            },
            minHeight: 1000,
        },
        [theme.breakpoints.down('md')]: {
            '@media (max-width: 1130px)': {
                minHeight: 1250,
            },
            minHeight: 1150,
            backgroundSize: 400,
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: 1070,
            backgroundSize: 300,
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: 1170,
            backgroundSize: 258,
        },
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
        height: 'fit-content',
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
        [theme.breakpoints.only('sm')]: {
            width: 600,
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
    textArea: {
        width: 788,
        minHeight: 100,
        marginBottom: 22,
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
        [theme.breakpoints.only('sm')]: {
            width: 570,
        },
    },
    spaceField: {
        marginRight: 300,
    },
    iconHelper: {
        color:colors.backgroundSecondary,
    },
    icon: {
        color: colors.backgroundSecondary,
        marginRight: 12,
        width: 24,
        height: 24,
    },
    address: {
        width: 294,
        display: 'flex',
        marginBottom: 16,
    },
    link: {
        marginBottom: 4,
        '&:hover': {
            color: colors.secondaryHover,
            textDecoration: 'none',
        },
    },
    cssLabel: {
        '&$cssFocused': {
            color: colors.secondary,
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: colors.secondary,
        },
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: colors.secondary,
        },
    },
    notchedOutline: {},
});

interface Props {
    refer: string;
    formId: string;
}

class ContactForm extends React.Component<Props> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    formRef = null;
    state = {
        firstname: '',
        lastname: '',
        email: '',
        tellphone: '',
        corpName: '',
        subject: '',
        message: ''
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
                            Formulário de Contato
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
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
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
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
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
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
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
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    required={true}
                                    onChange={e => this.changeValue(e, 'tellphone')}
                                />
                                <TextField
                                    id='outlined-name'
                                    label='Nome da Empresa'
                                    value={this.state.corpName}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    onChange={e => this.changeValue(e, 'corpName')}
                                />
                                <TextField
                                    id='outlined-name'
                                    label='Assunto'
                                    value={this.state.subject}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    onChange={e => this.changeValue(e, 'subject')}
                                />
                                <TextField
                                    id='textarea-message'
                                    label='Mensagem'
                                    value={this.state.message}
                                    className={classes.textArea}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    type='text'
                                    margin='normal'
                                    variant='outlined'
                                    multiline
                                    rows='4'
                                    rowsMax='4'
                                    onChange={e => this.changeValue(e, 'message')}
                                />

                                <Typography variant='h6' className={`${'flex-row-center'} ${classes.address}`}>
                                    <Icon className={classes.icon}>email</Icon>
                                    <Link href={'mailto:comercial@arithmos.com.br'} className={classes.link} color={'secondary'} >
                                        comercial@arithmos.com.br
                                    </Link>
                                </Typography>

                                <Typography variant='h6' className={`${'flex-row-center'} ${classes.address}`}>
                                    <img  className={classes.icon} src='/static/assets/whats-icon.svg' alt='logo' />
                                    <Link href={'http://wa.me/553125351781'}
                                          className={classes.link} color={'secondary'} >(31) 2535-1781</Link>
                                </Typography>

                                <Grid container justify='center'>
                                    <DialogForm formId={this.props.formId} refer={this.props.refer} formData={this.state}
                                                requiredFields={['firstname', 'lastname', 'email', 'tellphone']}/>
                                </Grid>
                            </form>
                        </Paper>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(ContactForm);
