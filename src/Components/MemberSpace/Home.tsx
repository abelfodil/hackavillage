import * as React from 'react';
import Avatar     from 'material-ui/Avatar';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText
}                 from 'material-ui/List';
import Grid       from 'material-ui/Grid';
import FlashOn    from 'material-ui-icons/FlashOn';
import Cloud      from 'material-ui-icons/Cloud';
import BandCharts from '../Common/BandCharts';

const data = [
    {name: 'Août', uv: 3000 },
    {name: 'Sept', uv: 2000 },
    {name: 'Oct', uv: 2780 },
    {name: 'Nov', uv: 1890 },
    {name: 'Dec', uv: 2390 },
    {name: 'Jan', uv: 3490 },
];

class Home extends React.Component {
    render() {
        return (
            <div className="temp" >
                <h1>David Garnier</h1>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <br/>
                <div>
                    <br/>
                    <br/>
                    Title
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
            </div>
        );
    }
}

export default Home;
