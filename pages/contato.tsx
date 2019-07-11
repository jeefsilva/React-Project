import { withStyles } from '@material-ui/core/styles';
import { MuiTheme } from 'material-ui/styles';
import { NextContext } from 'next';
import NextHead from 'next/head';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import ContactForm from '../components/form/contact-form';


const styles = (theme: MuiTheme) => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

interface Props {
    refer: string;
    formId: string;
}

class Contato extends React.Component<Props> {
    static async getInitialProps({ query, pathname }: NextContext) {
        return {refer: query.refer, formId: pathname.substring(1, pathname.length)};
    }

    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <NextHead>
                    <title>{'Arithmos Contabilidade - Contabilidade completa, com uma mensalidade que cabe no seu bolso.'}</title>
                    <meta name='description' content='Arithmos Contabilidade é um escritório de Contabilidade Tradicional e Contabilidade Online.
                    O contador online para você abrir sua empresa de forma rápida e segura, economizando tempo e dinheiro.' />
                    <meta name='theme-color' content='#F10E6C' />
                </NextHead>
                <ContactForm refer={this.props.refer} formId={this.props.formId}/>
            </div>
        );
    }
}


Contato.propTypes = {
    classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(Contato);