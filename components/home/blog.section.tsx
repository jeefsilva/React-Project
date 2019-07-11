import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import Link from 'next/link';
import React from 'react';
import '../../styles/index.scss';
import { colors } from '../../styles/styles';
import BlogCard from './blog-card.component';

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
            width: 500,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
        },
    },
    blogSection: {
        backgroundColor: 'transparent',
        marginTop: 48,
        marginBottom: 48,
        [theme.breakpoints.down('xs')]: {
            marginTop: 24,
            marginBottom: 24,
        },
    },
    blogText: {
        color: colors.white,
        [theme.breakpoints.down('xs')]: {
            fontSize: 24,
            width: 328,
            textAlign: 'left',
        },
    },
    secondaryButton: {
        color: colors.white,
        borderRadius: 200,
    },
    buttonLink: {
        textDecoration: 'none',
        borderRadius: 200,
        marginTop: 24,
        marginBottom: 80,
        [theme.breakpoints.down('md')]: {
            marginBottom: 48,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: -4,
        },
        '&:hover': {
            textDecoration: 'none',
        },
    },
    link: {
        textDecoration: 'none',
    }
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

class BlogSection extends React.Component<Props> {
    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Grid container className={classes.grid} justify='center'>
                        <Paper className={classes.blogSection} elevation={0}>
                            <Typography variant='h4' className={classes.blogText}>
                                Destaques do Blog
                            </Typography>
                        </Paper>
                    </Grid>
                    {
                        (this.props.postsLoadingErrorMessage) ? (
                            <Grid container className={classes.grid} justify='center'>
                                <Typography variant='body1' className={classes.navBlog} style={{color: colors.inactive}}>
                                    {this.props.postsLoadingErrorMessage}
                                </Typography>
                            </Grid>
                        ) : (this.props.posts.length > 0 ? (
                            <div>
                                <Grid container className={classes.grid} justify='space-between'>
                                    {this.props.posts.map((post: Post, index: number) => (
                                        (index < 3) ?
                                            (
                                                <BlogCard key={index} title={post.title} thumbnail={post.thumbnail}
                                                          link={post.link} content={post.content} />
                                            ) : (
                                                <Hidden key={index} only={['md']}>
                                                    <BlogCard key={index} title={post.title} thumbnail={post.thumbnail}
                                                              link={post.link} content={post.content} />
                                                </Hidden>
                                            )
                                    ))}
                                </Grid>
                                <Grid container className={classes.grid} justify='flex-end'>
                                    <Link href={'http://blog.arithmos.com.br/'}>
                                        <a target={'_blank'} className={classes.buttonLink}>
                                            <Button className={classes.secondaryButton}>
                                                Veja Mais
                                            </Button>
                                        </a>
                                    </Link>
                                </Grid>
                            </div>
                        ) : (
                            <Grid container className={classes.grid} justify='center'>
                                <Typography variant='h5' className={classes.blogText}>
                                    Procurando por publicações...
                                </Typography>
                            </Grid>
                        ))
                    }
                </Grid>

            </div>
        );
    }
}

// @ts-ignore;
export default withStyles(styles)(BlogSection);