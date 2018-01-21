import * as React  from 'react';
import './Styles/App.css';
import MemberSpace from './Components/MemberSpace/MemberSpace';
import FrontBar    from './Components/Storefront/FrontBar';
import Login       from './Components/Storefront/Login';
import Register    from './Components/Storefront/Register';
import LandingPage from './Components/Storefront/LandingPage';

enum DisplayedPage {
    Login,
    Register,
    Home,
    Member
}

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

    render() {
        let renderedElement;
        switch (this.state.display) {
            case DisplayedPage.Login:
                renderedElement = (
                    <div>
                        <FrontBar/>
                        <Login handleLogin={() => { return; }}/>
                    </div>
                );
                break;
            case DisplayedPage.Register:
                renderedElement = (
                    <div>
                        <FrontBar/>
                        <Register handleRegister={() => { return; }}/>
                    </div>
                );
                break;
            case DisplayedPage.Member:
                renderedElement = (
                    <div>
                        <FrontBar/>
                        <MemberSpace/>
                    </div>
                );
                break;
            default:
                renderedElement = (
                    <div>
                        <FrontBar/>
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
