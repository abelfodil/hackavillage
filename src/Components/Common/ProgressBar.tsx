import * as React from 'react';
import { LinearProgress } from 'material-ui/Progress';

class ProgressBar extends React.Component {
    render() {
        return (
            <div className="Progress">
                <LinearProgress mode="determinate" value={70} />
            </div>
        );
    }
}

export default ProgressBar;
