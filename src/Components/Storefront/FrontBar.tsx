import * as React        from 'react';
import AppBar            from 'material-ui/AppBar';
import Toolbar           from 'material-ui/Toolbar';
import Button            from 'material-ui/Button';
import { DisplayedPage } from '../Common/Vars';

interface BarProps {
    handleChange(page: DisplayedPage): void;
}

class FrontBar extends React.Component<BarProps> {
    render() {
        return (
            <AppBar position="fixed">
                <Toolbar>
                    <Button
                        id="landingPagetitle"
                        color="contrast"
                        onClick={() => this.props.handleChange(DisplayedPage.Home)}
                    >
                        Common Goal
                    </Button>
                    <Button
                        id="login"
                        color="contrast"
                        onClick={() => this.props.handleChange(DisplayedPage.Login)}
                    >
                        Login
                    </Button>
                    <Button
                        id="register"
                        color="contrast"
                        onClick={() => this.props.handleChange(DisplayedPage.Register)}
                    >
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default FrontBar;
