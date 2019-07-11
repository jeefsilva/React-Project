import { withStyles } from '@material-ui/core/styles';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import '../styles/index.scss';

const styles = (theme: MuiTheme) => ({
    root: {
        height: 84,
        [theme.breakpoints.down('md')]: {
            height: 56,
        },
    },
});



class SpaceFixed extends React.Component {
    static propTypes: { classes: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div className={`${'flex-column-center bg'} ${classes.root}`} >
            </div>
        );
    }

}

SpaceFixed.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

// @ts-ignore
export default withStyles(styles)(SpaceFixed);