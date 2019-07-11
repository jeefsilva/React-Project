declare module 'material-ui/styles' {
    export interface MuiTheme extends __MaterialUI.Styles.MuiTheme {
        spacing: Spacing;
        breakpoints: Breakpoint;
    }

    export interface Spacing extends __MaterialUI.Styles.Spacing {
        unit: number;
    }

    export interface Breakpoint {
        up(key: 'xs' | 'sm' | 'md' | 'lg' | 'xl');
        down(key: 'xs' | 'sm' | 'md' | 'lg' | 'xl');
        only(key: 'xs' | 'sm' | 'md' | 'lg' | 'xl');
        between(start: 'xs' | 'sm' | 'md' | 'lg' | 'xl', end: 'xs' | 'sm' | 'md' | 'lg' | 'xl');
    }
}