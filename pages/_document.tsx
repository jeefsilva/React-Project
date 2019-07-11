import Document, { Head, Main, NextDocumentContext, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import flush from 'styled-jsx/server';

interface IProps {
  pageContext: any;
  pageProps: any;
}

class _Document extends Document<IProps> {
  render() {
    // @ts-ignore
    const { pageContext } = this.props;

    return (
        <html lang='pt-BR' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='robots' content='index, follow'/>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
          <meta name='theme-color' content='#36E324' />
          <link href='https://fonts.googleapis.com/css?family=Maven+Pro:400,500' rel='stylesheet'/>
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>

          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/static/favicon/site.webmanifest' />
          <link rel='mask-icon' href='/static/favicon/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/static/favicon/favicon.ico' />
          <meta name='msapplication-TileColor' content='#2b5797' />
          <meta name='msapplication-config' content='/static/favicon/browserconfig.xml' />

          <meta property='og:title' content='Arithmos - Escritório de Contabilidade Online'/>
          <meta property='og:description' content='Arithmos Contabilidade Online alia a praticidade
          e agilidade dos serviços digitais à experiência e qualificação de mais de 18 anos da Contabilidade tradicional.'/>
          <meta property='og:type' content='website'/>
          <meta property='og:image' content='https://arithmos.com.br/static/assets/og-logo.png'/>

          <meta name='robots' content='index,follow' />

        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
        </html>
    );
  }
}

_Document.getInitialProps = (ctx: NextDocumentContext) => {
  let pageContext: any;

  const page = ctx.renderPage(Component => {
    const WrappedComponent = (props: any) => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired
    };

    return WrappedComponent;
  });

  let css;

  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,

    styles: (
        <Fragment>
          <style
              id='jss-server-side'
              dangerouslySetInnerHTML={{ __html: css }}
          />
          {flush() || null}
        </Fragment>
    )
  };
};

export default _Document;
