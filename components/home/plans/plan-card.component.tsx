import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import { Validator } from 'prop-types';
import React from 'react';
import { ArithmosServiceType } from '../../../src/constants/arithmos-service-types';
import { colors } from '../../../styles/styles';

const styles = (theme: MuiTheme) => ({
    card: {
        width: 300,
        height: 228,
        [theme.breakpoints.down('md')]: {
            width: 292,
            marginBottom: 12,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    cardTitle: {
        color: colors.backgroundSecondary,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16,
    },
    cardText: {
        height: 48,
        color: colors.backgroundSecondary,
        textAlign: 'center',
        marginBottom: 8,
        [theme.breakpoints.down('xs')]: {
            width: 296,
        },
    },
    cardPrice: {
        color: colors.primary,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 24,
    },
    cardButton: {
        borderRadius: 200,
    },
    primaryContent: {
        color: colors.primary,
    },
    secondaryContent: {
        color: colors.secondary,
    },
    enterprisePlanLogo: {
        marginTop: -90,
        marginBottom: 26,
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
});

interface Props {
    planId: string;
    planTitle: string;
    planDescription: string;
    price: string;
    buttonContent: string;
    type: ArithmosServiceType;
}

class PlanCard extends React.Component<Props> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <Card className={`${'flex-column-center'} ${classes.card}`} elevation={2}>
                <Typography variant='h6' className={classes.cardTitle}>
                    {this.props.planTitle}
                </Typography>
                <Typography variant='subtitle2' className={classes.cardText}>
                    {this.props.planDescription}
                </Typography>
                <Typography variant='h4' className={`${classes.cardPrice}
                    ${this.props.type === ArithmosServiceType.TRADITIONAL ? classes.secondaryContent : null}`}>
                    {this.props.price}
                </Typography>
                {this.props.type === ArithmosServiceType.TRADITIONAL
                    ? <img src='/static/assets/enterprise-plan.svg' draggable={false}
                           alt='Empresas Maiores' className={classes.enterprisePlanLogo} />: null}
                <Link href={`/${this.props.type === ArithmosServiceType.TRADITIONAL
                        ? 'contato' : 'cadastro'}?refer=${this.props.planId} - Card - Pagina Inicial`}
                      color='inherit' className={classes.link}>
                    <Button className={`${this.props.type === ArithmosServiceType.TRADITIONAL ? classes.secondaryContent : classes.primaryContent}
                    ${classes.cardButton}`}>
                        {this.props.buttonContent}
                    </Button>
                </Link>
            </Card>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(PlanCard);