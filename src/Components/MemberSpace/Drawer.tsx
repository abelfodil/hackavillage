import * as React                                     from 'react';
import Drawer                                         from 'material-ui/Drawer';
import IconButton                                     from 'material-ui/IconButton';
import Toolbar                                        from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse                                       from 'material-ui/transitions/Collapse';
import Divider                                        from 'material-ui/Divider';
import AppBar                                         from 'material-ui/AppBar';

import {
    ExpandLess, ExpandMore, Home, Menu, Settings,
    Lock, AccountCircle, ExitToApp, DirectionsTransit, Power
} from 'material-ui-icons';

interface DrawerState {
    open: boolean;
    settingsOpen: boolean;
}

interface DrawerProps {
    title: string;

    handlePageChange(page: Pages): void;
}

export enum Pages {
    Home,
    Transport,
    Energy,
    Account,
    Privacy
}

const drawerWidth = 240;

class MemberSpaceDrawer extends React.Component<DrawerProps, DrawerState> {
    constructor(props: DrawerProps) {
        super(props);
        this.state = {
            open: false,
            settingsOpen: false
        };
    }

    handleDrawerClose = () => {
        this.setState({open: false});
    }

    render() {
        let appBarWidth;
        if (this.state.open) {
            appBarWidth = {
                width: 'calc(100% - ' + drawerWidth + 'px)',
                transition: 'width 225ms'
            };
        } else {
            appBarWidth = {
                width: '100%'
            };
        }

        return (
            <div>
                <AppBar style={appBarWidth}>
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="contrast"
                            onClick={
                                () => {
                                    this.setState({open: !this.state.open});
                                }
                            }
                        >
                            <Menu/>
                        </IconButton>
                        {this.props.title}
                    </Toolbar>
                </AppBar>
                <Drawer
                    type="persistent"
                    style={{width: drawerWidth}}
                    anchor="left"
                    open={this.state.open}
                >
                    <div style={{width: drawerWidth}}>
                        <ListItem button={true} onClick={() => this.props.handlePageChange(Pages.Home)}>
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText
                                inset={true}
                                primary="Home"
                            />
                        </ListItem>
                        <Divider/>
                        <ListItem button={true} onClick={() => this.props.handlePageChange(Pages.Energy)}>
                            <ListItemIcon>
                                <Power/>
                            </ListItemIcon>
                            <ListItemText
                                inset={true}
                                primary="Energy"
                            />
                        </ListItem>
                        <ListItem button={true} onClick={() => this.props.handlePageChange(Pages.Transport)}>
                            <ListItemIcon>
                                <DirectionsTransit/>
                            </ListItemIcon>
                            <ListItemText
                                inset={true}
                                primary="Transport"
                            />
                        </ListItem>
                        <Divider/>
                        <ListItem
                            button={true}
                            onClick={() => {
                                this.setState({
                                    settingsOpen: !this.state.settingsOpen
                                });
                            }}
                        >
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText inset={true} primary="Settings"/>
                            {this.state.settingsOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse component="li" in={this.state.settingsOpen} timeout="auto" unmountOnExit={true}>
                            <List>
                                <ListItem button={true} onClick={() => this.props.handlePageChange(Pages.Privacy)}>
                                    <ListItemIcon>
                                        <Lock/>
                                    </ListItemIcon>
                                    <ListItemText inset={true} primary="Privacy"/>
                                </ListItem>
                                <ListItem button={true} onClick={() => this.props.handlePageChange(Pages.Account)}>
                                    <ListItemIcon>
                                        <AccountCircle/>
                                    </ListItemIcon>
                                    <ListItemText inset={true} primary="Account"/>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button={true}>
                            <ListItemIcon>
                                <ExitToApp/>
                            </ListItemIcon>
                            <ListItemText inset={true} primary="Sign out"/>
                        </ListItem>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default MemberSpaceDrawer;
