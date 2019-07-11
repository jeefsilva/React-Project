import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { MuiTheme } from 'material-ui/styles';
import NextHead from 'next/head';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import FabWhats from '../components/fab-whats';
import Footer from '../components/footer';
import HelperMenu from '../components/helpermenu';
import HistorySection from '../components/institutional/history';
import MenuBar from '../components/menu';
import MobileMenu from '../components/mobile-menu';
import SpaceFixed from '../components/space-fixed';
import { endpoint } from '../src/constants/endpoint';

const styles = (theme: MuiTheme) => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});


class Sobre extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

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
                    <title>{'Arithmos Gestão Contábil - Experiência e Inovação'}</title>
                    <meta name='description' content='Arithmos Contabilidade tradicional e online é uma empresa inovadora,
                    com mais de 18 anos de qualificação contábil e centenas de clientes atendidos pelo país.' />
                </NextHead>
                <HelperMenu/>
                <Hidden only={['xs', 'sm', 'md']}>
                    <MenuBar/>
                </Hidden>
                <Hidden only={['lg', 'xl']}>
                    <MobileMenu />
                </Hidden>
                <SpaceFixed/>
                <HistorySection/>
                <Footer posts={this.state.posts} postsLoadingErrorMessage={this.state.postsLoadingErrorMessage}/>
                <FabWhats/>
            </div>
        );
    }
}


Sobre.propTypes = {
    classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(Sobre);
