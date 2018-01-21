import * as React  from 'react';
import Avatar      from 'material-ui/Avatar';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText
}                  from 'material-ui/List';
import Grid        from 'material-ui/Grid';
import FlashOn     from 'material-ui-icons/FlashOn';
import Cloud       from 'material-ui-icons/Cloud';
import BandCharts  from '../Common/BandCharts';
import RadarCharts from '../Common/RadarCharts';
import LineCharts from '../Common/LineCharts';

const data = [
    {name: 'Août', uv: 300},
    {name: 'Sept', uv: 200},
    {name: 'Oct', uv: 278},
    {name: 'Nov', uv: 189},
    {name: 'Dec', uv: 239},
    {name: 'Jan', uv: 349}
];

const data1 = [
    {subject: 'Public Transport', A: 120},
    {subject: 'Bicycle', A: 98},
    {subject: 'Recycling', A: 30},
    {subject: 'Energy Saving', A: 99},
    {subject: 'Street Cleaning', A: 85},
    {subject: 'Water Saving', A: 65}
];

const data2 = [
    {name: 'mon', uv: 13},
    {name: 'tue', uv: 24},
    {name: 'wed', uv: 12},
    {name: 'thu', uv: 8},
    {name: 'fri', uv: 9},
    {name: 'sat', uv: 31},
    {name: 'sun', uv: 27},
];

class Home extends React.Component {
    render() {
        return (
            <div className="temp">
                <h1 style={{fontSize: '300%'}}>David Garnier</h1>
                <div style={{textAlign: 'left'}}>
                    <p style={{fontSize: '75%', fontColor: 'grey'}}>"Keep close to Nature's heart... and break clear
                        away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit
                        clean."</p>
                </div>
                <div style={{paddingTop: '55px'}}>
                    <h1><strong>My Bio</strong></h1>
                    <div style={{textAlign: 'left'}}>
                        <p>Hello, my name is David Garnier. I am studying in computer science which is a domain i love
                            to study. I want to make my mark on the world with some new way to live your everyday.
                            Technologies are the future of human kind. I want to take every opportunities to create a
                            new and better world.</p>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <br/>
                    <div>
                        <br/>
                        <br/>
                        Monthly dolar-converted social impact
                        <span style={{fontSize: '15px'}}><BandCharts data={data}/></span>
                    </div>
                    <div>
                        <br/>
                        <Avatar
                            style={{width: '100%', height: '60%', left: '0%'}}
                            src={require('../../Resources/garnier.jpg')}
                        />
                        <br/>
                        <Grid item={true} xs={false} md={12} style={{marginLeft: '0%'}}>
                            Stats of the month:
                            <div>
                                <List dense={false}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <FlashOn/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="103$ saved on your electricity bill!"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Cloud/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="C02 emissions reduced by 70 kg!"
                                        />
                                    </ListItem>

                                </List>
                            </div>
                        </Grid>
                    </div>
                </div>
                <div>
                    <h1><strong>My Contribution</strong></h1>
                    <p>My contribution in this society. My goal is to save resources as much as possible and to keep the
                        environment free from the human pollution.</p>
                    <div style={{marginLeft: '13%'}}>
                        <RadarCharts data={data1}/>
                    </div>
                    <h2>Travel distance by bicycle (Km)</h2>
                    <LineCharts data={data2}/>
                </div>
            </div>
        );
    }
}

export default Home;
