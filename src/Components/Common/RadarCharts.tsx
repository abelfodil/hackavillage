import * as React from 'react';
import { RadarChart, PolarGrid, PolarRadiusAxis, PolarAngleAxis, Radar } from 'recharts';

interface RadarChartsProps {
    data: Array<object>;
}

class RadarCharts extends React.Component<RadarChartsProps> {
    render() {
        return (
            <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={600}
                height={500}
                data={this.props.data}
            >
                <PolarGrid/>
                <PolarAngleAxis dataKey="subject" tickFormatter={(value) => {return; }}/>
                <PolarRadiusAxis tickFormatter={(value) => {return; }}/>
                <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
            </RadarChart>
        );
    }
}

export default RadarCharts;
