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
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    titleSection: {
        marginTop: 40,
        marginBottom: 48,
        backgroundColor: 'transparent',
    },
    title: {
        textAlign: 'center',
        color: colors.white,
        [theme.breakpoints.down('xs')]: {
            fontSize: 24,
        },
    },
    cardPartner: {
        width: 404,
        borderRadius: 4,
        marginRight: 12,
        marginBottom: 64,
        [theme.breakpoints.down('xs')]: {
            width: 328,
            marginRight: 0,
            marginBottom: 16,
        },
    },
    partnerImg: {
        width: 404,
        height: 202,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        userDrag: 'none',
        [theme.breakpoints.down('xs')]: {
            width: 328,
            objectFit: 'cover',
        },
    },
    cardTitle: {
        width: 372,
        marginTop: 16,
        marginBottom: 8,
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    cardText: {
        width: 372,
        marginBottom: 16,
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    linkText: {
        marginBottom: 16,
        width: 372,
        textAlign: 'start',
        color: colors.link,
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
});



class Partner extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;
        return (
            <Grid container className={classes.grid} justify='center'>
                <Paper className={classes.titleSection} elevation={0}>
                    <Typography variant='h4' className={classes.title}>
                        Veja o que a Arithmos faz pelos empreendedores
                    </Typography>
                </Paper>
                <Grid container className={classes.grid} justify='center'>
                    <Paper className={`${'flex-column-center'} ${classes.cardPartner}`} elevation={0}>
                        <img src='/static/assets/partner/rafael.png' alt='Rafael Araújo' className={classes.partnerImg} />
                        <Typography variant='h6' className={classes.cardTitle}>
                            Rafael Araújo - Fundador e CEO da Árvore
                        </Typography>
                        <Typography variant='body1' className={classes.cardText}>
                            "Contabilidade não é uma assunto divertido. É por isso que temos a Arithmos por perto.
                            Com seriedade, ela cuida da nossa empresa, nos permitindo focar na geração de negócios. Confiança conta muito."
                        </Typography>
                        <Typography variant='body1' className={classes.linkText}>
                            <Link href={'http://arvore.cc/'} className={classes.link}>
                                arvore.cc
                            </Link>
                        </Typography>
                    </Paper>
                    <Paper className={`${'flex-column-center'} ${classes.cardPartner}`} elevation={0}>
                        <img src='/static/assets/partner/fernando.png' alt='Fernando Furtado' className={classes.partnerImg} />
                        <Typography variant='h6' className={classes.cardTitle}>
                            Fernando Furtado - Empresário do Skank
                        </Typography>
                        <Typography variant='body1' className={classes.cardText}>
                            “Por mais que esteja presente na vida de todos, contabilidade não é um tema fácil.
                            Com a equipe jovem da Arithmos temos acompanhamento eficiente e alinhado com as novas necessidades.”
                        </Typography>
                        <Typography variant='body1' className={classes.linkText}>
                            <Link href={'http://skank.com.br/'} className={classes.link}>
                                skank.com.br
                            </Link>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

Partner.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(Partner);
