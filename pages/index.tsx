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
import HomeAboutSection from '../components/home/about-section';
import BlogSection from '../components/home/blog.section';
import CompanySection from '../components/home/company-section';
import HireSection from '../components/home/hire/hire.section';
import PlansSection from '../components/home/plans/plans.section';
import HomeFirstSection from '../components/home/primary-section';
import MenuBar from '../components/menu';
import MobileMenu from '../components/mobile-menu';
import { endpoint } from '../src/constants/endpoint';


const styles = (theme: MuiTheme) => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});


class Index extends React.Component {
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
                    <title>{'Arithmos - Escritório de Contabilidade Online'}</title>
                    <meta name='description' content='Arithmos Contabilidade Online alia a praticidade
                    e agilidade dos serviços digitais à experiência e qualificação de mais de 18 anos da Contabilidade tradicional.' />
                </NextHead>

                <HelperMenu/>
                <Hidden only={['xs', 'sm', 'md']}>
                    <MenuBar/>
                </Hidden>
                <Hidden only={['lg', 'xl']}>
                    <MobileMenu />
                </Hidden>
                <HomeFirstSection/>
                <HomeAboutSection/>
                <CompanySection/>
                <HireSection/>
                <PlansSection/>
                <BlogSection posts={this.state.posts} postsLoadingErrorMessage={this.state.postsLoadingErrorMessage}/>
                <Footer posts={this.state.posts} postsLoadingErrorMessage={this.state.postsLoadingErrorMessage}/>
                <FabWhats/>
            </div>
        );
    }
}


Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(Index);
