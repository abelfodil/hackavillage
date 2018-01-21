import * as React                       from 'react';
import BandCharts                       from '../../Components/Common/BandCharts';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider                          from 'material-ui/Divider';
import ProgressBar                      from '../../Components/Common/ProgressBar';

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
    {name: 'Dec', uv: 4}
];

let margin: string = '33%';

class Transport extends React.Component {

    render() {
        return (
            <div className="temp">
                <h1><u><strong>Social Investments</strong></u></h1>
                <BandCharts data={data}/>
                <h1><u><strong>Montly Objective</strong></u></h1>
                <div>
                    <List style={{maxHeight: 500, overflow: 'auto', borderStyle: 'solid'}}>
                        <ListItem>
                            <ListItemText primary="Genetec Eco-Program "/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Minecraft tree planting program"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Trash robbing education"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Hacking trafficker Program"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Walk every day Program"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Vegan ecosystem"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Anes Belfoufoune Programme"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Research Day w/ NASA"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Use the bus for the first time!"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Ride a bicycle to the nearest subway"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Run 5km a day"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Use the public system everyday a week consecutively"/>
                        </ListItem>
                        <Divider/>
                    </List>
                </div>
                <div>
                    <h1>
                        <u><strong>Reward</strong></u>
                    </h1>
                    <p>TOHU Montreal Objective: 100/100 completed</p>
                    <div style={{marginLeft: margin}}>
                        <ProgressBar value={100}/>
                    </div>
                    <p>Hydro Quebec Objective: 72/100 completed</p>
                    <div style={{marginLeft: margin}}>
                        <ProgressBar value={72}/>
                    </div>
                    <p>STM Objective: 60/100 completed</p>
                    <div style={{marginLeft: margin}}>
                        <ProgressBar value={60}/>
                    </div>
                    <p>Parc-Extension Objective: 57/100 completed</p>
                    <div style={{marginLeft: margin}}>
                        <ProgressBar value={57}/>
                    </div>
                    <p>Parc des Bulles Objectives: 30/100 completed</p>
                    <div style={{marginLeft: margin}}>
                        <ProgressBar value={30}/>
                    </div>
                    <p>Parc des Hirondelles Objective: 5/100 completed</p>
                    <div style={{marginLeft: margin}}>
                        <ProgressBar value={5}/>
                    </div>
                    <p>Urbain Space Objective: 0/100 completed</p>
                    <div style={{marginLeft: margin}}>
                        <ProgressBar value={0}/>
                    </div>
                    <p>Ubisoft Montreal Objective: 0/100 completed</p>
                    <div style={{marginLeft: margin}}>
                        <ProgressBar value={0}/>
                    </div>
                    <p>Polytechnique Objective: 0/100 completed</p>
                    <div style={{marginLeft: margin}}>
                        <ProgressBar value={0}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Transport;
