import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';

const styles = (theme: MuiTheme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${'static/assets/bg1.jpg'})`,
        height: 840,
        userDrag: 'none',
        paddingTop: 262,
        [theme.breakpoints.down('md')]: {
            height: 597,
            paddingTop: 104,
        },
        [theme.breakpoints.only('sm')]: {
            height: 540,
        },
        [theme.breakpoints.down('xs')]: {
            height: 299,
            marginTop: 56,
            paddingTop: 40,
            backgroundSize: 'cover',
        },
    },
    firstSection: {
        width: 1236,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 104,
        },
        [theme.breakpoints.down('md')]: {
            width: 900,
        },
        [theme.breakpoints.only('sm')]: {
            width: 580,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    firstSectionTitle: {
        width: 379,
        fontWeight: 500,
        color: colors.backgroundSecondary,
        marginBottom: 48,
        [theme.breakpoints.down('xs')]: {
            width: 131,
            fontSize: 20,
            marginBottom: 10,
        },
    },
    firstSectionSubtitle: {
        width: 570,
        color: colors.backgroundSecondary,
        marginBottom: 60,
        [theme.breakpoints.down('xs')]: {
            width: 174,
            fontSize: 16,
            marginBottom: 16,
            lineHeight: '28px',
        },
    },
    firstSectionTag: {
        color: colors.primary,
    },
    firstSectionButton: {
        backgroundColor: colors.primary,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
        width: 300,
        height: 48,
        color: colors.white,
        marginRight: 24,
        borderRadius: 200,
        [theme.breakpoints.down('xs')]: {
            width: 200,
            height: 36,
        },
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
});



class HomeFirstSection extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div className={`${'flex-column-center bg'} ${classes.root}`} title='Arithmos Online'>
                <div className={classes.firstSection}>
                    <Typography component='h1' variant='h2' gutterBottom className={classes.firstSectionTitle}>
                        Originalidade.
                        Praticidade.
                    </Typography>
                    <Typography component='h2' variant='h4' gutterBottom className={classes.firstSectionSubtitle}>
                        Você nunca teve tanta <label className={classes.firstSectionTag}> liberdade </label>
                        com sua contabilidade
                    </Typography>
                    <Link href={'/planos'} color='inherit' className={classes.link}>
                        <Button variant='contained' className={classes.firstSectionButton}>
                            Veja Nossos Planos
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

HomeFirstSection.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(HomeFirstSection);