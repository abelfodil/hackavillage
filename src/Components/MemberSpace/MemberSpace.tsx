import * as React        from 'react';
import Drawer, { Pages } from './Drawer';
import Transport         from './Transport';
import Privacy           from './Privacy';
import Home              from './Home';
import Energy            from './Energy';

import '../../Styles/MemberSpace.css';
import Account           from './Account';

interface MemberState {
    title: string;
    choice: Pages;
}

interface MemberProps {

}

class MemberSpace extends React.Component<MemberProps, MemberState> {
    constructor(props: MemberProps) {
        super(props);
        this.state = {
            title: 'Home',
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
        switch (this.state.choice) {
            case Pages.Energy:
                renderedElement = <Energy/>;
                break;
            case Pages.Privacy:
                renderedElement = <Privacy/>;
                break;
            case Pages.Account:
                renderedElement = <Account/>;
                break;
            case Pages.Transport:
                renderedElement = <Transport/>;
                break;
            default:
                renderedElement = <Home/>;
        }

        return (
            <div id="member-space">
                <Drawer
                    title={this.state.title}
                    handlePageChange={this.handlePageChange}
                />
                <main>{renderedElement}</main>
            </div>
        );
    }
}

export default MemberSpace;