import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { MuiTheme } from 'material-ui/styles';
import NextHead from 'next/head';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import OpenSection from '../components/company/open-section';
import WorkSection from '../components/company/work-section';
import FabWhats from '../components/fab-whats';
import Footer from '../components/footer';
import HelperMenu from '../components/helpermenu';
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


class AbrirEmpresa extends React.Component {
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
                    <title>{'Abertura de Empresa Arithmos Contabilidade'}</title>
                    <meta name='description' content='Pensando em abrir uma empresa? A Arithmos conta com equipe
                    especializada para ajudar você na abertura de empresa e na gestão contábil, fiscal e de pessoal.' />
                </NextHead>

                <HelperMenu/>
                <Hidden only={['xs', 'sm', 'md']}>
                    <MenuBar/>
                </Hidden>
                <Hidden only={['lg', 'xl']}>
                    <MobileMenu />
                </Hidden>
                <SpaceFixed/>
                <OpenSection/>
                <WorkSection/>
                <Footer posts={this.state.posts} postsLoadingErrorMessage={this.state.postsLoadingErrorMessage}/>
                <FabWhats/>
            </div>
        );
    }
}


AbrirEmpresa.propTypes = {
    classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(AbrirEmpresa);
