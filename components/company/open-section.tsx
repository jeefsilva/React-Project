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
            justifyContent: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    openSection: {
        width: 404,
        height: 262,
        marginTop: 188,
        marginLeft: 104,
        marginRight: 116,
        backgroundColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            marginTop: 48,
            width: 403,
            marginRight: 93,
            marginLeft: 0,
        },
        [theme.breakpoints.only('sm')]: {
            marginRight: 0,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            height: 'fit-content',
        },
    },
    openText: {
        textAlign: 'left',
        marginBottom: 16,
        color: colors.white,
        [theme.breakpoints.only('sm')]: {
            textAlign: 'center',
        },
    },
    openTextH5: {
        width: 304,
        [theme.breakpoints.only('sm')]: {
            margin: '0px auto 16px auto',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
            width: 328,
        },
    },
    openTextH3: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 24,
        },
    },
    openTextBody2: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
            marginBottom: 24,
        },
    },
    cardSection: {
        width: 404,
        height: 300,
        marginTop: 188,
        [theme.breakpoints.down('md')]: {
            marginTop: 48,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            height: 316,
            marginTop: 0,
        },
    },
    cardTitle: {
        marginTop: 24,
        marginBottom: 32,
        [theme.breakpoints.down('xs')]: {
            width: 260,
            textAlign: 'center',
        },
        color: colors.backgroundSecondary,
    },
    cardOldPrice: {
        marginBottom: 8,
        textDecorationLine: 'line-through',
        color: colors.backgroundSecondary,
    },
    cardFree: {
        height: 57,
        color: colors.primary,
        textTransform: 'uppercase',
        marginBottom: 24,
        fontWeight: 500,
    },
    button: {
        backgroundColor: colors.primary,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
        width: 220,
        height: 36,
        color: colors.white,
        borderRadius: 200,
    },
    cardHelper: {
        width: 260,
        height: 48,
        color: colors.backgroundSecondary,
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
    buttonMargin: {
        marginBottom: 12,
    },
});



class OpenSection extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='flex-start'>
                        <Paper className={classes.openSection} elevation={0}>
                            <Typography component='h2' variant='h5' className={`${classes.openTextH5} ${classes.openText}`}>
                                Pretende ser um empreendedor de sucesso?
                            </Typography>
                            <Typography component='h1' variant='h3' className={`${classes.openTextH3} ${classes.openText}`}>
                                Abra sua empresa na Arithmos!
                            </Typography>
                            <Typography component='h3' variant='body2' className={`${classes.openTextBody2} ${classes.openText}`}>
                                A Arithmos tem uma equipe especializada em abertura de empresas e em uma gestão contábil
                                exclusiva, afinal acreditamos que nossos clientes MERECEM ter sucesso!
                            </Typography>
                        </Paper>
                        <Paper className={`${'flex-column-center'} ${classes.cardSection}`} elevation={2}>
                            <Typography variant='h6' className={classes.cardTitle}>
                                Serviços de Abertura de empresa
                            </Typography>
                            <Typography variant='h6' className={classes.cardOldPrice}>
                                de: R$900,00
                            </Typography>
                            <Typography variant='h3' className={classes.cardFree}>
                                grátis*
                            </Typography>
                            <div className={classes.buttonMargin}>
                                <Link href={'/planos?tab=1'} color='inherit' className={classes.link}>
                                    <Button className={classes.button}>
                                        abrir empresa
                                    </Button>
                                </Link>
                            </div>
                            <Typography variant='caption' className={classes.cardHelper}>
                                * Preço válido apenas para BH, consulte-nos sobre valores cobrados para outras cidades
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

OpenSection.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(OpenSection);