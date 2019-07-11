import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import { Validator } from 'prop-types';
import React from 'react';
import { colors } from '../../../styles/styles';

const styles = (theme: MuiTheme) => ({
    card: {
        width:300,
        height: 476,
        marginLeft: 6,
        marginRight: 6,
        marginTop: 32,
        marginBottom: 32,
        [theme.breakpoints.down('md')]: {
            marginTop: 12,
            marginBottom: 12,
        },
        [theme.breakpoints.down('xs')]: {
            width: 328,
            marginLeft: 6,
            marginRight: 6,
        },
    },
    icon: {
        marginLeft: 24,
        marginBottom: 16,
    },
    cardTitle: {
        width: 268,
        minHeight: 40,
        fontWeight: 500,
        color: colors.backgroundSecondary,
        textAlign: 'left',
    },
    cardText: {
        width: 268,
        marginTop: 16,
    },
});


interface Props {
    title: string;
    imageSrc: string;
    imageAlt: string;
    content: string;
}

class HireCard extends React.Component<Props> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <Card className={`${'flex-column-center'} ${classes.card}`} elevation={2}>
                <CardContent>
                    <img src={this.props.imageSrc} draggable={false} alt={this.props.imageAlt} className={classes.icon}/>
                    <Typography variant='h6' className={classes.cardTitle}>
                        {this.props.title}
                    </Typography>
                    <Typography variant='body1' className={classes.cardText}>
                        {this.props.content}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(HireCard);