import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NoSsr from '@material-ui/core/NoSsr';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from 'material-ui/styles';
import PropTypes, { Validator } from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { cities } from '../../src/constants/cities';
import { colors } from '../../styles/styles';
import SearchIcon from '@material-ui/icons/Search';

const suggestions = cities.map((suggestion: {label: string}) => ({
    value: suggestion.label,
    label: suggestion.label,
}));

const styles = (theme: MuiTheme) => ({
    root: {
        flexGrow: 1,
        height: 'fit-content',
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
    searchIcon: {
        width: 'fit-content',
        display: 'flex',
        margin: 'auto 16px auto 12px',
        color: colors.backgroundSecondary,
    },
    field: {
        display: 'flex',
    }
});

function NoOptionsMessage(props: any) {
    return (
        <Typography
            color='textSecondary'
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            Nenhuma cidade atendida encontrada
        </Typography>
    );
}

function inputComponent({ inputRef, ...props }: any) {
    return <div ref={inputRef} {...props}/>;
}

function Control(props: any) {
    return (
        <div className={props.selectProps.classes.field}>
            <div className={props.selectProps.classes.searchIcon}>
                <SearchIcon />
            </div>
            <TextField
                id={'citySearchInput'}
                fullWidth
                InputProps={{
                    disableUnderline: true,
                    inputComponent,
                    inputProps: {
                        className: props.selectProps.classes.input,
                        inputRef: props.innerRef,
                        children: props.children,
                        ...props.innerProps,
                    },
                }}
                {...props.selectProps.textFieldProps}
            />
        </div>
    );
}

function Option(props: any) {
    return (
        <div>
            <ListItem>
                <ListItemText primary={props.children} />
            </ListItem>
        </div>
    );
}

function Placeholder(props: any) {
    return (
        <Typography
            color='textSecondary'
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function ValueContainer(props: any) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function Menu(props: any) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

const components = {
    Control,
    Menu,
    NoOptionsMessage,
    Option,
    Placeholder,
    ValueContainer,
};

class CitiesSearchBar extends React.Component {
    state = {
        searchInput: null,
    };

    handleChange = (value: any) => {
        this.setState({ searchInput: value });
    };

    static propTypes: { classes: Validator<NonNullable<object>>; theme: Validator<NonNullable<object>> };

    render() {
        // @ts-ignore
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <NoSsr>
                    <Select
                        classes={classes}
                        className={classes.select}
                        styles={{
                            dropdownIndicator: () => ({display: 'none !important'}),
                            indicatorSeparator: () => ({display: 'none !important'}),
                        }}
                        options={suggestions}
                        components={components}
                        value={this.state.searchInput}
                        onChange={this.handleChange}
                        placeholder='Cidade'
                    />
                </NoSsr>
            </div>
        );
    }
}

CitiesSearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles, { withTheme: true })(CitiesSearchBar);
