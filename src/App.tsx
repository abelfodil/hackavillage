import * as React           from 'react';
import './Styles/App.css';
import MemberSpace          from './Components/MemberSpace/MemberSpace';
import FrontBar             from './Components/Storefront/FrontBar';
import Login                from './Components/Storefront/Login';
import Register             from './Components/Storefront/Register';
import LandingPage          from './Components/Storefront/LandingPage';
import { DisplayedPage }    from './Components/Common/Vars';
import { MuiThemeProvider } from 'material-ui/styles';
import { createMuiTheme }   from 'material-ui/styles';
import { teal, grey, red }  from 'material-ui/colors';

export const theme = createMuiTheme({
   palette: {
        type: 'light',
        primary: teal,
        secondary: grey,
        error: red
    }
});

interface AppState {
    display: DisplayedPage;
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            display: DisplayedPage.Home
        };
    }

    handleLogin = (user: string, password: string) => {
        this.setState({
            display: DisplayedPage.Member
        });
    }

    handleRegister = (email: string, password: string, fn: string, ln: string) => {
        this.setState({
            display: DisplayedPage.Member
        });
    }

    handleStoreFrontChanges = (page: DisplayedPage) => {
        this.setState({
            display: page
        });
    }

    handleSignOut = () => {
        this.setState({
           display: DisplayedPage.Home
        });
    }

    render() {
        let renderedElement;
        switch (this.state.display) {
            case DisplayedPage.Login:
                renderedElement = (
                    <div>
                        <FrontBar handleChange={this.handleStoreFrontChanges}/>
                        <Login handleLogin={this.handleLogin}/>
                    </div>
                );
                break;
            case DisplayedPage.Register:
                renderedElement = (
                    <div>
                        <FrontBar handleChange={this.handleStoreFrontChanges}/>
                        <Register handleRegister={this.handleRegister}/>
                    </div>
                );
                break;
            case DisplayedPage.Member:
                renderedElement = (
                    <MemberSpace handleSignOut={this.handleSignOut}/>
                );
                break;
            default:
                renderedElement = (
                    <div>
                        <FrontBar handleChange={this.handleStoreFrontChanges}/>
                        <LandingPage/>
                    </div>
                );
        }

        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    {renderedElement}
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
