import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

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
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="pv" stroke="#8884d8"/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
            </LineChart>
        );
    }
}

export default LineCharts;
