import * as React        from 'react';
import Drawer, { Pages } from './Drawer';
import Transport         from './Transport';
import Privacy           from './Privacy';
import Home              from './Home';
import Energy            from './Energy';
import Account           from './Account';

import '../../Styles/MemberSpace.css';

interface MemberState {
    choice: Pages;
}

interface MemberProps {

}

class MemberSpace extends React.Component<MemberProps, MemberState> {
    constructor(props: MemberProps) {
        super(props);
        this.state = {
            choice: Pages.Home
        };
    }

    handlePageChange = (choice: Pages) => {
        this.setState({
            choice: choice
        });
    }

    render() {
        let renderedElement;
        let elementTitle;
        switch (this.state.choice) {
            case Pages.Energy:
                renderedElement = <Energy/>;
                elementTitle = 'Energy';
                break;
            case Pages.Privacy:
                renderedElement = <Privacy/>;
                elementTitle = 'Privacy';
                break;
            case Pages.Account:
                renderedElement = <Account/>;
                elementTitle = 'Account';
                break;
            case Pages.Transport:
                renderedElement = <Transport/>;
                elementTitle = 'Transport';
                break;
            default:
                renderedElement = <Home/>;
                elementTitle = 'Home';
        }

        return (
            <div>
                <Drawer
                    title={elementTitle}
                    handlePageChange={this.handlePageChange}
                />
                <main>{renderedElement}</main>
            </div>
        );
    }
}

export default MemberSpace;
