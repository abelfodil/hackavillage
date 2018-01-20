import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

class LandingPage extends React.Component {
    render() {
        return (
            <div id="landpage">
                <AppBar position="fixed">
                    <Toolbar>
                        <span id="landingPagetitle">Common Goal</span>
                        <Button id="register" color="contrast">Register</Button>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}

export default LandingPage;
