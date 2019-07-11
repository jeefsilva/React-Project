import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import { colors } from '../styles/styles';


const styles = () => ({
    fab: {
        backgroundColor: colors.primary,
        '&:hover': {
            backgroundColor: colors.primaryHover,
        },
        position: 'fixed',
        bottom: 16,
        right: 16,
    },
});

class FabWhats extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    state = {
        open: false,
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <Link target='_blank' href={'http://wa.me/553125351781'} color='inherit' className={classes.link}>
                <Tooltip title='Chat Whatsapp Web' aria-label='Chat Whatsapp Web'>
                <Fab color='primary' aria-label='Add' className={classes.fab}>
                    <img src='/static/assets/whats-fab.svg' draggable={false} alt='logo' className={classes.logo} />
                </Fab>
                </Tooltip>
            </Link>
        );
    }
}


FabWhats.propTypes = {
    classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(FabWhats);