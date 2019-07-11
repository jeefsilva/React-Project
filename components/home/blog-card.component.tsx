import { Link } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as htmlToText from 'html-to-text';
import { MuiTheme } from 'material-ui/styles';
import { Validator } from 'prop-types';
import React from 'react';
import { colors } from '../../styles/styles';

const styles = (theme: MuiTheme) => ({
    card: {
        width: 300,
        height: 349,
        [theme.breakpoints.down('md')]: {
            width: 292,
        },
        [theme.breakpoints.only('sm')]: {
            width: 240,
            marginBottom: 16,
        },
        [theme.breakpoints.down('xs')]: {
            width: 156,
            height: 190,
            marginBottom: 16,
        },
    },
    cardTitle: {
        color: colors.backgroundSecondary,
        width: 268,
        height: 47,
        marginTop: 16,
        marginBottom: 8,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            width: 124,
            height: 32,
            marginTop: 8,
            marginBottom: 8,
            lineHeight: '16px',
            overflow: 'hidden',
        },
        [theme.breakpoints.only('sm')]: {
            width: 220,
            fontSize: 16,
        },
    },
    cardText: {
        color: colors.backgroundSecondary,
        width: 268,
        height: 112,
        marginBottom: 8,
        [theme.breakpoints.only('sm')]: {
            width: 220,
            fontSize: 14,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            width: 124,
            height: 48,
            marginBottom: 16,
            lineHeight: '16px',
            overflow: 'hidden',
        },
    },
    img: {
        width: 300,
        height: 150,
        objectFit: 'cover',
        [theme.breakpoints.down('xs')]: {
            width: 156,
            height: 78,
        },
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        },
    }
});

interface Props {
    title: string;
    content: string;
    link: string;
    thumbnail: string;
}

class BlogCard extends React.Component<Props> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;


        const formattedContent = htmlToText.fromString(this.props.content, {uppercaseHeadings: false, ignoreHref: true});
        const shortenedContent = formattedContent.substring(0, 110);
        const content = (shortenedContent).substr(0, Math.min(shortenedContent.length,
            shortenedContent.lastIndexOf(' '))) + '...';

        let title;
        if(this.props.title.length <= 45)
            title = this.props.title;
        else {
            const shortenedTitle = this.props.title.substring(0, 45);
            title = (shortenedTitle).substr(0, Math.min(shortenedTitle.length, shortenedTitle.lastIndexOf(' '))) + '...';
        }

        return (
            <Link target={'_blank'} href={this.props.link} className={classes.link}>
                <Card className={`${'flex-column-center'} ${classes.card}`} elevation={2}>
                    <img src={this.props.thumbnail} draggable={false} alt={this.props.title} className={classes.img}/>
                    <Typography variant='h6' className={classes.cardTitle}>
                        {title}
                    </Typography>
                    <Typography variant='body1' className={classes.cardText}>
                        {content}
                    </Typography>
                </Card>
            </Link>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(BlogCard);