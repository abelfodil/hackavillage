import * as React from 'react';
import './Styles/App.css';
import Drawer from './Components/MemberSpace/Drawer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Drawer title="Lol"/>
            </div>
        );
    }
}

export default App;
