import * as React from 'react';
import Drawer     from './Drawer';

interface MemberState {
    title: string;
}

interface MemberProps {

}

class MemberSpace extends React.Component<MemberProps, MemberState> {
    constructor(props: MemberProps) {
        super(props);
        this.state = {
            title: 'Home'
        };
    }

    render() {
        return (
            <div className="temp">
                <Drawer title={this.state.title} />
            </div>
        );
    }
}

export default MemberSpace;
