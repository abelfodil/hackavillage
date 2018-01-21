import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface LineChartsProps {
    data: Array<object>;
}

class LineCharts extends React.Component<LineChartsProps> {
    render() {
        return (

            <LineChart
                width={730}
                height={250}
                data={this.props.data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
                <CartesianGrid strokeDasharray="1 10000"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="uv" stroke="#619689"/>
            </LineChart>
        );
    }
}

export default LineCharts;
