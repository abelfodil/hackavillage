import * as React from 'react';
import AppBar     from 'material-ui/AppBar';
import Toolbar    from 'material-ui/Toolbar';
import Button     from 'material-ui/Button';

class FrontBar extends React.Component {
    render() {
        return (
            <AppBar position="fixed">
                <Toolbar>
                    <span id="landingPagetitle">Common Goal</span>
                    <Button id="login" color="contrast">Login</Button>
                    <Button id="register" color="contrast">Register</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default FrontBar;
