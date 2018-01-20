import * as React                                     from 'react';
import Drawer                                         from 'material-ui/Drawer';
import IconButton                                     from 'material-ui/IconButton';
import Toolbar                                        from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse                                       from 'material-ui/transitions/Collapse';
import ExpandLess                                     from 'material-ui-icons/ExpandLess';
import ExpandMore                                     from 'material-ui-icons/ExpandMore';
import Divider                                        from 'material-ui/Divider';
import AppBar                                         from 'material-ui/AppBar';
import Home                                           from 'material-ui-icons/Home';
import ChevronLeftIcon                                from 'material-ui-icons/ChevronLeft';
import MenuIcon                                       from 'material-ui-icons/Menu';
import Settings                                       from 'material-ui-icons/Settings';
import Lock                                           from 'material-ui-icons/Lock';
import AccountCircle                                  from 'material-ui-icons/AccountCircle';
import ExitApp                                        from 'material-ui-icons/ExitToApp';

interface DrawerState {
    open: boolean;
    settingsOpen: boolean;
}

interface DrawerProps {
    title: string;
}

class MemberSpaceDrawer extends React.Component<DrawerProps, DrawerState> {
    constructor(props: DrawerProps) {
        super(props);
        this.state = {
            open: false,
            settingsOpen: false
        };
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    }

    handleDrawerClose = () => {
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="contrast"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                        >
                            <MenuIcon/>
                        </IconButton>
                        {this.props.title}
                    </Toolbar>
                </AppBar>
                <Drawer
                    type="persistent"
                    anchor="left"
                    open={this.state.open}
                >
                    <div>
                        <div>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon/>
                            </IconButton>
                        </div>
                        <Divider/>
                        <List>
                            <ListItem
                                button={true}
                            >
                                <ListItemIcon>
                                    <Home/>
                                </ListItemIcon>
                                <ListItemText inset={true} primary="Home"/>
                            </ListItem>
                        </List>

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
                            <List disablePadding={true}>
                                <ListItem button={true}>
                                    <ListItemIcon>
                                        <Lock/>
                                    </ListItemIcon>
                                    <ListItemText inset={true} primary="Privacy"/>
                                </ListItem>
                                <ListItem button={true}>
                                    <ListItemIcon>
                                        <AccountCircle/>
                                    </ListItemIcon>
                                    <ListItemText inset={true} primary="Account"/>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button={true}>
                            <ListItemIcon>
                                <ExitApp/>
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
