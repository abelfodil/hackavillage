import * as React        from 'react';
import './Styles/App.css';
import MemberSpace       from './Components/MemberSpace/MemberSpace';
import FrontBar          from './Components/Storefront/FrontBar';
import Login             from './Components/Storefront/Login';
import Register          from './Components/Storefront/Register';
import LandingPage       from './Components/Storefront/LandingPage';
import { DisplayedPage } from './Components/Common/Vars';

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
                    <MemberSpace/>
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
                {renderedElement}
            </div>
        );
    }
}

export default App;
