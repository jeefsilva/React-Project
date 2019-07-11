import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { MuiTheme } from 'material-ui/styles';
import { NextContext } from 'next';
import NextHead from 'next/head';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import FabWhats from '../components/fab-whats';
import Footer from '../components/footer';
import HelperMenu from '../components/helpermenu';
import MenuBar from '../components/menu';
import MobileMenu from '../components/mobile-menu';
import Cities from '../components/plans/city';
import Doubts from '../components/plans/doubt';
import PlansCard from '../components/plans/plans';
import SpaceFixed from '../components/space-fixed';
import { endpoint } from '../src/constants/endpoint';


const styles = (theme: MuiTheme) => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

interface Props {
    tab: number;
}

class PlanosPrecos extends React.Component<Props> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    // @ts-ignore
    static async getInitialProps(ctx: NextContext) {
        return {tab: ctx.query.tab};
    }

    state = {
        posts: [],
        postsLoadingErrorMessage: ''
    };

    async componentDidMount() {
        let res;
        try {
            // @ts-ignore
            res = await axios.get('https://' + window.location.host + endpoint + '/wordpress?qty=4');
            this.setState({postsLoadingErrorMessage: ''});

        } catch (err) {
            res = {data: []};
            this.setState({postsLoadingErrorMessage: 'Não foi possível carregar as publicações do blog :('});
        }

        this.setState({
            posts: res.data
        });
    }

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <NextHead>
                    <title>{'Arithmos - Escritório de Contabilidade Online'}</title>
                    <meta name='description' content='Arithmos tem mais de 18 anos de experiência em Gestão Contábil,
                    Fiscal e de Pessoal. Atua no mercado nacional e é registrada no Conselho de Contabilidade de MG.' />
                </NextHead>

                <HelperMenu/>
                <Hidden only={['xs', 'sm', 'md']}>
                    <MenuBar/>
                </Hidden>
                <Hidden only={['lg', 'xl']}>
                    <MobileMenu />
                </Hidden>
                <SpaceFixed/>
                <PlansCard tab={this.props.tab || 0}/>
                <Cities/>
                <Doubts/>
                <Footer posts={this.state.posts} postsLoadingErrorMessage={this.state.postsLoadingErrorMessage}/>
                <FabWhats/>
            </div>
        );
    }
}


PlanosPrecos.propTypes = {
    classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(PlanosPrecos);
