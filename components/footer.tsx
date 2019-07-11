import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import { emailRegex } from '../src/constants/emailRegex';
import { endpoint } from '../src/constants/endpoint';
import '../styles/index.scss';
import { colors } from '../styles/styles';

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
        [theme.breakpoints.only('sm')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    gridIcon: {
        [theme.breakpoints.up('lg')]: {
            width: 1236,
        },
        [theme.breakpoints.down('md')]: {
            width: 900,
        },
        [theme.breakpoints.down('xs')]: {
            width: 264,
        },
    },
    logoImg: {
        width: 140,
        height: 55,
        userDrag: 'none',
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            width: 200,
            height: 80,
        },
    },
    logo: {
        marginTop: 36,
        marginRight: 346,
        [theme.breakpoints.down('md')]: {
            marginRight: 178,
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            width: 200,
            height: 80,
        },
    },
    socialIcons: {
        width: 40,
        height: 40,
        userDrag: 'none',
    },
    socialIconsLink: {
        width: 40,
        height: 40,
        marginTop: 36,
        marginRight: 16,
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
        },
    },
    footerAbout: {
        width: 260,
        height: 168,
        marginTop: 82,
        marginRight: 52,
        color: colors.white,
        [theme.breakpoints.down('md')]: {
            width: 900,
            height: 56,
            textAlign: 'center',
            marginTop: 24,
        },
        [theme.breakpoints.only('sm')]: {
            height: 100,
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            width: 328,
            height: 140,
        },
    },
    navTitle: {
        width: 300,
        height: 24,
        marginTop: 32,
        marginBottom: 24,
        marginRight: 12,
        color: colors.white,
        [theme.breakpoints.down('md')]: {
            width: 292,
        },
        [theme.breakpoints.only('sm')]: {
            width: 180,
            marginTop: 24,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            textAlign: 'center',
            marginRight: 0,
        },
    },
    navTag: {
        width: 'fit-content',
        height: 28,
        marginBottom: 16,
        color: colors.white,
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            justifyContent: 'center',
            marginRight: 0,
        },
    },
    navColumn: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
        },
    },
    blogTitle: {
        width: 300,
        height: 24,
        marginTop: 32,
        marginBottom: 24,
        color: colors.white,
        [theme.breakpoints.down('md')]: {
            width: 292,
        },
        [theme.breakpoints.only('sm')]: {
            width: 180,
            marginTop: 24,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            textAlign: 'center',
        },
    },
    navBlog: {
        width: 300,
        height: 'fit-content',
        marginBottom: 16,
        color: colors.white,
        [theme.breakpoints.down('md')]: {
            width: 292,
        },
        [theme.breakpoints.only('sm')]: {
            width: 180,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            textAlign: 'center',
        },
    },
    made: {
        color: colors.white,
        height: 24,
        marginBottom: 16,
        marginTop: 50,
        [theme.breakpoints.down('xs')]: {
            width: 328,
            textAlign: 'center',
            marginTop: 24,
        },
    },
    icon: {
        color: 'red',
        userDrag: 'none',
    },
    copyright: {
        color: colors.white,
        width: 508,
        height: 20,
        marginRight: 428,
        [theme.breakpoints.down('md')]: {
            marginRight: 100,
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            height: 40,
            textAlign: 'center',
            marginRight: 0,
        },
    },
    newsletter: {
        width: 300,
        marginTop: 50,
        backgroundColor: colors.white,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            width: 292,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            marginTop: 0,
        },
    },
    newsletterGrid: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 8,
        },
    },
    newsletterHelperText: {
        backgroundColor: colors.backgroundSecondary,
        margin: 0,
        padding: '8px 12px 0px 12px',
        marginBottom: '-20px'
    },
    secondaryButton: {
        color: colors.white,
        alignItems: 'flex-end',
        width: 71,
        height: 36,
        marginTop: 4,
        borderRadius: 200,
    },
    disabledButton: {
        color: colors.disabled
    },
    iconNewsletter: {
        color: colors.backgroundSecondary,
        userDrag: 'none',
    },
    divider: {
        width: 1236,
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: colors.lineWhite,
        [theme.breakpoints.down('md')]: {
            width: 900,
        },
        [theme.breakpoints.only('sm')]: {
            width: 600,
            marginRight: '16px 0px 16px 0px',
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    copyrightText: {
        color: colors.white,
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },
    copyrightMargin: {
        marginTop: 26,
        marginBottom: 40,
    },
    reverse: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },

    },
    link: {
        width: 'fit-content',
        display: 'flex',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    panel: {
        width: 328,
        backgroundColor: colors.backgroundSecondary,
        color: colors.white,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 86,
        },
    },
    panelSummary: {
        padding: 0,
        marginTop: 4,
        marginBottom: 4,
    },
    panelTitle: {
        color: colors.white,
        fontWeight: 500,
    },
    panelDetails: {
        padding: 0,
    },
    panelText: {
        color: colors.white,
        marginBottom: 8,
        textAlign: 'center',
        lineHeight: '28px',
    },
    expandIcon: {
        right: 0,
        color: colors.white,
        userDrag: 'none',
    },
});


interface Post {
    link: string;
    title: string;
    content: string;
    thumbnail: string;
}

interface Props {
    posts: Post[];
    postsLoadingErrorMessage: string;
}

class Footer extends React.Component<Props> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    state = {
        email: '',
        openedSnackbar: false,
        errorText: '',
        snackbarErrorMessage: '',
    };

    changeValue = (element: any, propName: string) => {
        const value = element.target.value;
        const nextState: any = {};
        nextState[propName] = value;
        this.setState(nextState);

        if (emailRegex.test(value) || value === '') {
            this.setState({errorText: ''});
        } else {
            this.setState({errorText: 'E-mail inválido!'});
        }
    };

    handleClick = () => {
        this.setState({openedSnackbar: true});
    };

    handleClose = (_event: any, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({openedSnackbar: false});
        this.setState({snackbarErrorMessage: ''});
    };


    render() {
        // @ts-ignore
        const {classes} = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Hidden only={['xs']}>
                        <Grid container className={`${'flex-row'} ${classes.grid}`}>
                            <div className={classes.logo}>
                                <Link target='_blank' href={'/'} color='inherit' className={classes.link}>
                                    <img src='/static/assets/logo-online-white.svg' alt='logo' className={classes.logoImg}/>
                                </Link>
                            </div>
                            <Link target='_blank' href={'https://www.facebook.com/arithmos/'} color='inherit' className={classes.socialIconsLink}>
                                <img src='/static/assets/footer/face.svg' alt='logo' className={classes.socialIcons}/>
                            </Link>
                            <Link target='_blank' href={'https://twitter.com/arithmosonline'} color='inherit' className={classes.socialIconsLink}>
                                <img src='/static/assets/footer/twitter.svg' alt='logo' className={classes.socialIcons}/>
                            </Link>
                            <Link target='_blank' href={'http://wa.me/553125351781'} color='inherit' className={classes.socialIconsLink}>
                                <img src='/static/assets/footer/whats.svg' alt='logo' className={classes.socialIcons}/>
                            </Link>
                            <Link target='_blank' href={'https://www.instagram.com/arithmosonline/'} color='inherit'
                                  className={classes.socialIconsLink}>
                                <img src='/static/assets/footer/insta.svg' alt='logo' className={classes.socialIcons}/>
                            </Link>
                            <Link target='_blank' href={'https://www.linkedin.com/company/arithmosgestao/'} color='inherit'
                                  className={classes.socialIconsLink}>
                                <img src='/static/assets/footer/linkedin.svg' alt='logo' className={classes.socialIcons}/>
                            </Link>
                        </Grid>
                    </Hidden>
                    <Hidden only={['lg', 'xl', 'md', 'sm']}>
                        <Grid container className={`${'flex-column-center'} ${classes.grid}`}>
                            <Grid container className={`${'flex-row-center'} ${classes.gridIcon}`} justify='space-between'>
                                <Link target='_blank' href={'https://www.facebook.com/arithmos/'} color='inherit'
                                      className={classes.socialIconsLink}>
                                    <img src='/static/assets/footer/face.svg' alt='logo' className={classes.socialIcons}/>
                                </Link>
                                <Link target='_blank' href={'https://twitter.com/arithmosonline'} color='inherit'
                                      className={classes.socialIconsLink}>
                                    <img src='/static/assets/footer/twitter.svg' alt='logo' className={classes.socialIcons}/>
                                </Link>
                                <Link target='_blank' href={'http://wa.me/553125351781'}
                                      color='inherit' className={classes.socialIconsLink}>
                                    <img src='/static/assets/footer/whats.svg' alt='logo' className={classes.socialIcons}/>
                                </Link>
                                <Link target='_blank' href={'https://www.instagram.com/arithmosonline/'}
                                      color='inherit' className={classes.socialIconsLink}>
                                    <img src='/static/assets/footer/insta.svg' alt='logo' className={classes.socialIcons}/>
                                </Link>
                                <Link target='_blank' href={'https://www.linkedin.com/company/arithmosgestao/'}
                                      color='inherit' className={classes.socialIconsLink}>
                                    <img src='/static/assets/footer/linkedin.svg' alt='logo' className={classes.socialIcons}/>
                                </Link>
                            </Grid>
                            <Link href={'/'} color='inherit' className={classes.link}>
                                <img src='/static/assets/logo-online-white.svg' alt='logo' className={classes.logo}/>
                            </Link>
                        </Grid>
                    </Hidden>
                    <Grid container className={`${'flex-row'} ${classes.grid}`}>
                        <Hidden only={['lg', 'xl']}>
                            <Grid container className={classes.grid} justify='center'>
                                <Typography variant='body1' className={classes.footerAbout}>
                                    Somos uma empresa de contabilidade, com mais de 18 anos de experiência no mercado nacional,
                                    devidamente registrada junto ao Conselho de Contabilidade de Minas Gerais.
                                </Typography>
                            </Grid>
                        </Hidden>
                        <Hidden only={['xs', 'sm', 'md']}>
                            <Grid item>
                                <Typography variant='body1' className={classes.footerAbout}>
                                    Somos uma empresa de contabilidade, com mais de 18 anos de experiência no
                                    mercado nacional, devidamente registrada junto ao Conselho de Contabilidade de Minas Gerais.
                                </Typography>
                            </Grid>
                        </Hidden>
                        <Grid item className={classes.navColumn}>
                            <Typography variant='h6' className={classes.navTitle}>
                                Arithmos
                            </Typography>
                            <Link href={'/sobre'} color='inherit' className={classes.link}>
                                <Typography variant='body1' className={classes.navTag}>
                                    Nossa História
                                </Typography>
                            </Link>
                            <Link href={'/politica-de-privacidade'} color='inherit' className={classes.link}>
                                <Typography variant='body1' className={classes.navTag}>
                                    Política de Privacidade
                                </Typography>
                            </Link>
                            <Link href={'/contato?refer=Contato Footer'} color='inherit' className={classes.link}>
                                <Typography variant='body1' className={classes.navTag}>
                                    Contato
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item className={classes.navColumn}>
                            <Typography variant='h6' className={classes.navTitle}>
                                Online
                            </Typography>
                            <Link target='_blank' href={'https://arithmos.octadesk.com/kb/'} className={classes.link}>
                                <Typography variant='body1' className={classes.navTag}>
                                    Funcionalidades
                                </Typography>
                            </Link>
                            <Link href={'/planos'} color='inherit' className={classes.link}>
                                <Typography variant='body1' className={classes.navTag}>
                                    Quanto Custa
                                </Typography>
                            </Link>
                            <Link target='_blank' href={'http://atendimento.arithmos.com.br'} className={classes.link}>
                                <Typography variant='body1' className={classes.navTag}>
                                    Central de Ajuda
                                </Typography>
                            </Link>
                            <Link target='_blank' href={'/static/termos-de-uso.pdf'} className={classes.link}>
                                <Typography variant='body1' className={classes.navTag}>
                                    Termos de Uso
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' className={classes.blogTitle}>
                                Blog
                            </Typography>
                            {
                                (this.props.postsLoadingErrorMessage) ? (
                                    <Typography variant='body1' className={classes.navBlog} style={{color: colors.inactive}}>
                                        {this.props.postsLoadingErrorMessage}
                                    </Typography>
                                ) : ((this.props.posts && this.props.posts.length > 0) ? (
                                    this.props.posts.map((post: Post, index: number) => {
                                        let title;
                                        if (post.title.length <= 55)
                                            title = post.title;
                                        else {
                                            const shortenedTitle = post.title.substring(0, 55);
                                            title = (shortenedTitle).substr(0,
                                                Math.min(shortenedTitle.length, shortenedTitle.lastIndexOf(' '))) + '...';
                                        }

                                        return (
                                            (index < 3)
                                                ? (
                                                    <Link target='_blank' key={index} href={post.link} className={classes.link}>
                                                        <Typography variant='body1' className={classes.navBlog}>
                                                            {title}
                                                        </Typography>
                                                    </Link>
                                                )
                                                : undefined
                                        );
                                    })
                                ) : (
                                    <Typography variant='body1' className={classes.navBlog} style={{color: colors.inactive}}>
                                        Procurando por publicações...
                                    </Typography>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid container className={`${'flex-row'} ${classes.grid} ${classes.reverse}`}>
                        <Grid item className={'flex-column'}>
                            <Typography variant='h6' className={`${'flex-row-center'} ${classes.made}`}>
                                Feito com <Icon className={classes.icon}>favorite_border</Icon> em BH
                            </Typography>
                            <Typography variant='body2' className={classes.copyright}>
                                © 2019. Arithmos Gestão Contábil. Todos os Direitos Reservados.
                            </Typography>
                            <Typography variant='body2' className={classes.copyright}>
                                Proibida reprodução total ou parcial.
                            </Typography>
                        </Grid>
                        <Grid item className={`flex-column-end ${classes.newsletterGrid}`}>
                            <TextField
                                className={classes.newsletter}
                                variant='filled'
                                value={this.state.email}
                                error={this.state.errorText !== ''}
                                helperText={this.state.errorText}
                                FormHelperTextProps={{classes: {root: classes.newsletterHelperText}}}
                                type={'email'}
                                label='Cadastrar na Newsletter'
                                onChange={e => this.changeValue(e, 'email')}
                                InputProps={{
                                    endAdornment: <InputAdornment position='end'>
                                        <Icon className={classes.iconNewsletter}>email</Icon>
                                    </InputAdornment>,
                                }}
                            />
                            <Button className={`${classes.secondaryButton}
                                    ${(this.state.errorText !== '' || this.state.email === '') ? classes.disabledButton : undefined}`}
                                    disabled={(this.state.errorText !== '' || this.state.email === '')}
                                    onClick={() => {
                                        try {
                                            axios.post(endpoint + '/form?id=newsletter',
                                                {refer: 'Newsletter do Footer', email: this.state.email})
                                                .then(() => {
                                                    this.setState({snackbarErrorMessage: ''});
                                                })
                                                .catch(() => {
                                                    this.setState({snackbarErrorMessage: 'Não foi possível realizar o cadastro!'});
                                                });
                                        } catch (err) {
                                            console.error(err);
                                        }

                                        this.setState({email: ''});
                                        this.handleClick();
                                    }}
                            >
                                Enviar
                            </Button>
                        </Grid>
                        <Hidden only={['xs']}>
                            <Grid container className={classes.grid} justify='center'>
                                <Divider variant='middle' className={classes.divider}/>
                            </Grid>
                            <Grid container className={classes.grid} justify='flex-start'>
                                <Typography variant='body1' className={classes.copyrightText}>
                                    Arithmos Contabilidade é um escritório de Contabilidade Tradicional e
                                    Contabilidade Online que fica em Belo Horizonte/MG. O contador online para você
                                    abrir sua empresa de forma rápida e segura, economizando tempo e dinheiro.
                                    Com a Arithmos você tem disponível sua contabilidade online, emite Notas fiscais de
                                    serviço eletrônicas (NFS-e), gerencia sua folha de pagamento e de
                                    pró-labore, controla seus impostos e relatórios contábeis e gerenciais.
                                </Typography>
                                <Typography variant='body1' className={`${classes.copyrightMargin} ${classes.copyrightText}`}>
                                    Nossa Sede – Belo Horizonte: <br/>
                                    Arithmos Gestão Contábil: Av Francisco Sá, 750, 2º andar,
                                    Bairro Prado, Belo Horizonte, MG, CEP 30.411-174 - CNPJ: 10.859.123/0001-36 <br/>
                                    Conselho Regional de Contabilidade: MG-007767/O <br/>
                                    Responsável Técnico Contábil: Felipe Gontijo Drummond
                                </Typography>
                            </Grid>
                        </Hidden>

                    </Grid>
                    <Hidden only={['lg', 'xl', 'md', 'sm']}>
                        <Grid container className={classes.grid} justify='center'>
                            <Divider variant='middle' className={classes.divider}/>
                            <ExpansionPanel className={`${'panel-plans'} ${classes.panel}`} elevation={0}>
                                <ExpansionPanelSummary className={classes.panelSummary}
                                                       expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}>
                                    <Typography variant='body1' className={classes.panelTitle}>
                                        Conheça um pouco sobre nós
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.panelDetails}>
                                    <Typography variant='body2' className={classes.panelText}>
                                        Arithmos Contabilidade é um escritório de Contabilidade Tradicional e
                                        Contabilidade Online que fica em Belo Horizonte/MG.
                                        O contador online para você abrir sua empresa de forma rápida e segura,
                                        economizando tempo e dinheiro. Com a Arithmos você tem disponível sua
                                        contabilidade online, emite Notas fiscais de serviço eletrônicas (NFS-e),
                                        gerencia sua folha de pagamento e de pró-labore, controla seus impostos e relatórios contábeis e gerenciais.
                                        <br/><br/>
                                        Nossa Sede – Belo Horizonte:
                                        Arithmos Gestão Contábil: Av Francisco Sá, 750, 2º andar, Bairro Prado,
                                        Belo Horizonte, MG, CEP 30.411-174 - CNPJ: 10.859.123/0001-36
                                        Conselho Regional de Contabilidade: MG-007767/O
                                        Responsável Técnico Contábil: Felipe Gontijo Drummond
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Hidden>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={this.state.openedSnackbar}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id='message-id'>{this.state.snackbarErrorMessage === ''
                            ? 'Cadastro realizado com sucesso!' : this.state.snackbarErrorMessage}</span>}
                        action={[
                            <Button key='undo' color={this.state.snackbarErrorMessage === '' ? 'primary' : 'secondary'}
                                    size='small' onClick={this.handleClose}>
                                OK
                            </Button>,
                        ]}
                    />
                </Grid>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(Footer);