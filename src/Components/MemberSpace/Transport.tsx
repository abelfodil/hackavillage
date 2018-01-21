import * as React from 'react';
import BandCharts from '../../Components/Common/BandCharts';

const data = [
    {name: 'Jan', uv: 5},
    {name: 'Feb', uv: 2},
    {name: 'Mar', uv: 7},
    {name: 'Apr', uv: 1},
    {name: 'May', uv: 3},
    {name: 'Jun', uv: 2},
    {name: 'Jul', uv: 4},
    {name: 'Aug', uv: 6},
    {name: 'Sep', uv: 2},
    {name: 'Oct', uv: 1},
    {name: 'Nov', uv: 5},
    {name: 'Dec', uv: 4},
];

class Transport extends React.Component {
    render() {
        return (
            <div className="temp">
                <h1><strong>Achievements</strong></h1>
                <BandCharts data={data}/>
            </div>
        );
    }
}

export default Transport;
