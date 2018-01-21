import * as React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

interface PieChartsProps {
    data1: Array<object>;
}

class PieCharts extends React.Component<PieChartsProps> {
    render() {
        return (
            <PieChart
                width={800}
                height={400}
            >
                <Pie
                    isAnimationActive={false}
                    data={this.props.data1}
                    dataKey="value"
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label={true}
                />
             <Tooltip/>
            </PieChart>
        );
    }
}

export default PieCharts;
