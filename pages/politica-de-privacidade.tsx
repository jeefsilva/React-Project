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
import PrivacySection from '../components/institutional/privacy';
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


class PoliticaDePrivacidade extends React.Component {
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
                    <title>{'Política de Privacidade Arithmos Contabilidade'}</title>
                    <meta name='description' content='A Política de Privacidade esclarece os termos e padrões utilizados
                    em relação à coleta, armazenamento, segurança e privacidade das informações na plataforma.' />
                </NextHead>
                <HelperMenu/>
                <Hidden only={['xs', 'sm', 'md']}>
                    <MenuBar/>
                </Hidden>
                <Hidden only={['lg', 'xl']}>
                    <MobileMenu />
                </Hidden>
                <SpaceFixed/>
                <PrivacySection/>
                <Footer posts={this.state.posts} postsLoadingErrorMessage={this.state.postsLoadingErrorMessage}/>
                <FabWhats/>
            </div>
        );
    }
}


PoliticaDePrivacidade.propTypes = {
    classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(PoliticaDePrivacidade);
