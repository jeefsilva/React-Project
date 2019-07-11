import { SheetsRegistry } from 'jss';
import {
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#36E324',
    },
    secondary: {
      main: '#F10E6C',
    },
    error: {
      main: '#EB5757',
    },
  },

  typography: {
    useNextVariants: true,
    fontFamily: ['Maven Pro', 'sans-serif'].join(','),
    overline: {
      fontSize: 10,
      letterSpacing: 1.5,
    },
    h1: {
      letterSpacing: -1.5,
    },
    h2: {
      letterSpacing: -0.5,
      lineHeight: 'normal',
    },
    h3: {
      lineHeight: 'normal',
    },
    h4: {
      letterSpacing: 0.25,
    },
    h5: {
      lineHeight: 'normal',
    },
    h6: {
      letterSpacing: 0.15,
      lineHeight: 'normal',
    },
    body1: {
      letterSpacing: 0.5,
      lineHeight: 1.8,
    },
    body2: {
      letterSpacing: 0.25,
      lineHeight: '20px',
    },
    subtitle1: {
      letterSpacing: 0.15,
      lineHeight: '24px',
    },
    subtitle2: {
      lineHeight: '24px',
    },
    caption: {
      letterSpacing: 0.4,
      lineHeight: '16px',
    },
    button: {
      letterSpacing: 0.75,
    },
  },
  spacing: {
    unit: 10,
  },
});

const createPageContext = () => {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  }
};

let pageContext: any;

const getPageContext = () => {
  // @ts-ignore
  if (!process.browser) {
    return createPageContext();
  }

  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
};

export default getPageContext;