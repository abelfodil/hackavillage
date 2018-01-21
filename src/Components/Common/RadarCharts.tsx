import * as React                                                        from 'react';
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
                <PolarAngleAxis tick={true} dataKey="subject" tickFormatter={(value) => {return value; }}/>
                <PolarRadiusAxis tickFormatter={(value) => {return value; }}/>
                <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
            </RadarChart>
        );
    }
}

export default RadarCharts;
