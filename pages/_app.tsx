import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ReactGA from 'react-ga';
// @ts-ignore
import { hotjar } from 'react-hotjar';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider } from 'react-redux';
import store from '../src/store';
import getPageContext from '../src/utils/getPageContext';

interface IProps {
    Component: any;
    pageProps: any;
    store: any;
}

const _App = withRedux(store)(
    class _App extends App<IProps> {
        pageContext = getPageContext();


        // @ts-ignore
        static async getInitialProps({ Component, router, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            };
        }

        initGA = () => {
            ReactGA.initialize('UA-39795787-1');
        };

        logPageView = () => {
            ReactGA.set({ page: window.location.pathname });
            ReactGA.pageview(window.location.pathname);
        };

        componentDidMount() {
            const jssStyles = document.querySelector('#jss-server-side');

            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }

            hotjar.initialize(1302219, 6);
            this.initGA();
            this.logPageView();
        }

        render() {
            const {Component, pageProps, store} = this.props;

            return (
                <Container>
                    <Head>
                        <title>{'Arithmos Contabilidade' + ((pageProps.pageTitle) ? (' - ' + pageProps.pageTitle) : '')}</title>
                    </Head>
                    <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
                        <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
                            <CssBaseline/>
                            <Provider store={store}>
                                <Component
                                    {...pageProps}
                                    pageContext={this.pageContext}
                                />
                            </Provider>
                        </MuiThemeProvider>
                    </JssProvider>
                </Container>
            );
        }
    }
);

export default _App;