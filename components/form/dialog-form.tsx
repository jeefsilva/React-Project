import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { MuiTheme } from 'material-ui/styles';
import Router from 'next/router';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import { endpoint } from '../../src/constants/endpoint';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';


const styles = (theme: MuiTheme) => ({
    button: {
        marginTop: 36,
        marginBottom: 16,
        color: colors.white,
        borderRadius: 200,
        width: 196,
        height: 48,
        [theme.breakpoints.down('sm')]: {
            height: 36,
            marginTop: 8,
        },
    },
});

interface Props {
    refer: string;
    formId: string;
    formData: object;
    requiredFields: string[];
}

class DialogForm extends React.Component<Props> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    state = {
        valid: false,
        open: false,
        errorMessage: '',
    };

    handleClickOpen = async () => {
        await this.sendForm();
        this.setState({ open: true });
    };

    handleClose = async () => {
        this.setState({ open: false });
        this.setState({ errorMessage: '' });
        await Router.push('/');
    };

    validate = () => {
        this.state.valid = this.props.requiredFields.filter(field => {
            // @ts-ignore
            return (this.props.formData[field]);
        }).length === this.props.requiredFields.length;
    };

    sendForm = async () => {
        try {
            axios.post(endpoint + '/form?id=' + this.props.formId, JSON.stringify(({refer: (this.props.refer), ...this.props.formData})),
                { headers: { 'Content-Type': 'application/json' } })
                .then(() => {
                    this.setState({errorMessage: ''});
                })
                .catch(() => {
                    this.setState({errorMessage: 'Infelizmente não foi possível enviar seus dados!'});
                });
        } catch (err) {
            console.error(err);
        }
    };


    render() {
        // @ts-ignore
        const { classes } = this.props;

        this.validate();

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Button type={'submit'} variant='contained' disabled={!this.state.valid}
                            className={classes.button} color={this.props.formId === 'contato' ? 'secondary' : 'primary'}
                            onClick={this.handleClickOpen}>
                        Enviar
                    </Button>
                    <Dialog
                        open={this.state.open}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby='alert-dialog-slide-title'
                        aria-describedby='alert-dialog-slide-description'
                    >
                        <DialogTitle id='alert-dialog-slide-title'>
                            {this.state.errorMessage === '' ? 'Obrigado!' : 'Ocorreu um erro!'}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id='alert-dialog-slide-description'>
                                {this.state.errorMessage === ''
                                    ? 'Em breve entraremos em contato com você!'
                                    : 'Infelizmente não foi possível enviar seus dados. Tente novamente mais tarde!'}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color={(this.state.errorMessage !== '' || this.props.formId === 'contato')
                                ? 'secondary' : 'primary'} >
                                Ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </div>
        );
    }
}

DialogForm.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(DialogForm);