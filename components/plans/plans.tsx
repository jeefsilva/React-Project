import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import Router from 'next/router';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';
import CardCompany from './card-company';
import CardPlan from './card-plan';
import ExpandCardCompany from './expand-card-company';
import ExpandCardPlan from './expand-card-plan';
import SliderPlanSection from './slider-plan';

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
    },
    gridCards: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
        [theme.breakpoints.only('md')]: {
            width: 748,
        },
        [theme.breakpoints.down('sm')]: {
            width: 596,
        },
    },
    titleSection: {
        marginTop: 48,
        marginBottom: 48,
        backgroundColor: 'transparent',
        [theme.breakpoints.down('xs')]: {
            marginBottom: 24,
        },
    },
    title: {
        width: 612,
        textAlign: 'center',
        color: colors.white,
        [theme.breakpoints.down('md')]: {
            fontSize: 24,
            width: 596,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    tabs: {
        width: 612,
        marginBottom: 48,
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    tab: {
        minWidth: 306,
        width: 306,
        color: colors.primary,
        [theme.breakpoints.down('xs')]: {
            minWidth: 160,
            width: 160,
        },
    },
    inactive: {
        color: colors.inactive,
    },
    indicator: {
        backgroundColor: colors.primary,
    },
});


interface Props {
    tab: number;
}

class Plans extends React.Component<Props> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    state = {
        tab: parseInt(String(this.props.tab), 0),
    };

    // @ts-ignore
    handleChange = async (event: any, tab: number) => {
        this.setState({ tab });
        await Router.push(`/planos?tab=${tab}`, `/planos?tab=${tab}`, {shallow: true});
    };

    render() {
        // @ts-ignore
        const { classes } = this.props;
        const { tab } = this.state;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='center'>
                        <Paper className={classes.titleSection} elevation={0}>
                            <Typography component='h1' variant='h4' className={classes.title}>
                                Contabilidade completa, com uma mensalidade que cabe no seu bolso.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid container className={classes.grid} justify='center'>
                        <Tabs value={tab} onChange={this.handleChange} className={classes.tabs} classes={{ indicator: classes.indicator}}>
                            <Tab className={`${classes.tab} ${tab === 1 ? classes.inactive : undefined}`} label='Mudar de Contabilidade' />
                            <Tab className={`${classes.tab} ${tab === 0 ? classes.inactive : undefined}`} label='Abrir Minha Empresa' />
                        </Tabs>


                    </Grid>
                    <Grid container className={classes.gridCards} justify='center'>
                        {tab === 0 &&
                        <div>
                            <Hidden only={['xs', 'sm', 'md']}>
                                <CardPlan/>
                            </Hidden>
                            <Hidden only={['xs', 'lg', 'xl']}>
                                <SliderPlanSection/>
                            </Hidden>
                            <Hidden only={['sm' ,'md', 'lg', 'xl']}>
                                <ExpandCardPlan/>
                            </Hidden>
                        </div>
                        }
                        {tab === 1 &&
                        <div>
                            <Hidden only={['xs']}>
                                <CardCompany/>
                            </Hidden>
                            <Hidden only={['sm' ,'md', 'lg', 'xl']}>
                                <ExpandCardCompany/>
                            </Hidden>
                        </div>
                        }

                    </Grid>
                </Grid>
            </div>
        );
    }

}

Plans.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(Plans);