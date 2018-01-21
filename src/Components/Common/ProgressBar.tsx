import * as React         from 'react';
import { LinearProgress } from 'material-ui/Progress';

interface ProgressBarProps {
    value: number;
}

class ProgressBar extends React.Component<ProgressBarProps> {
    render() {
        return (
            <div className="Progress">
                <LinearProgress mode="determinate" value={this.props.value}/>
            </div>
        );
    }
}

export default ProgressBar;
