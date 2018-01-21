import * as React                       from 'react';
import BandCharts                       from '../../Components/Common/BandCharts';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider                          from 'material-ui/Divider';
import Avatar                           from 'material-ui/Avatar';
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

class Transport extends React.Component {
    render() {
        return (
            <div className="temp">
                <Avatar
                    style={{height: 300, width: 300, marginLeft: '30%'}}
                    alt="achievement history"
                    src={require('../../Resources/trophy.png')}
                />
                <h1><u><strong>Achievements</strong></u></h1>
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
                            <ListItemText primary="Hacking child porn trafficker Program"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Make a walk a day Program"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Vegan ecosystem"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Anes Belfoufoune programming Programme"/>
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
                            <ListItemText primary="gamification elements into their internal training programs"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="run 5km"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Do 100 push ups, 100 sit up, 100 squat, 10km run everyday"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Use the public system everyday"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="pick up the nearest trash on the ground and dump it"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="Buy chemical free veggies"/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText primary="save electricity after 5pm"/>
                        </ListItem><Divider/>
                        <ListItem>
                            <ListItemText primary="recycle paper"/>
                        </ListItem>
                    </List>
                </div>
                <div>
                    <h1>
                        <u><strong>Reward</strong></u>
                    </h1>
                    <p>TOHU Montreal Objective: 100/100 completed</p>
                    <ProgressBar value={100}/>
                    <p>Hydro Quebec Objective: 72/100 completed</p>
                    <ProgressBar value={72}/>
                    <p>STM Objective: 60/100 completed</p>
                    <ProgressBar value={60}/>
                    <p>Parc-Extension Objective: 57/100 completed</p>
                    <ProgressBar value={57}/>
                    <p>Parc des Bulles Objectives: 30/100 completed</p>
                    <ProgressBar value={30}/>
                    <p>Parc des Hirondelles Objective: 5/100 completed</p>
                    <ProgressBar value={5}/>
                    <p>Urbain Space Objective: 0/100 completed</p>
                    <ProgressBar value={0}/>
                    <p>Ubisoft Montreal Objective: 0/100 completed</p>
                    <ProgressBar value={0}/>
                    <p>Polytechnique Objective: 0/100 completed</p>
                    <ProgressBar value={0}/>
                </div>
            </div>
        );
    }
}

export default Transport;
