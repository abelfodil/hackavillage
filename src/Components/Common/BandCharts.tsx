import * as React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';

interface BandChartsProps {
    data: Array<object>;

}

class BandCharts extends React.Component<BandChartsProps> {
    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={this.props.data}
                margin={{top: 30, right: 30, left: 20, bottom: 5}}
            >
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="1 10000"/>
                <Tooltip/>
                <Bar dataKey="uv" fill="#619689"/>
            </BarChart>
        );
    }
}

export default BandCharts;
