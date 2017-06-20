import React, {Component} from 'react';
import {Row, Container} from "react-grid-system";
import {Switch, Route, NavLink} from 'react-router-dom';
import PointSpender from "./PointSpender";
import PartyBuilder from "./PartyBuilder";
import {MuiThemeProvider, AppBar, Drawer, MenuItem, Menu} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CharacterCreator from './CharacterCreator';

injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleToggleDrawer = () => {
        this.setState({
            ...this.state,
            open: !this.state.open,
        })
    };

    handleDrawerMenuClick = (location) => {
        this.handleToggleDrawer();
    };

    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title={<h1>React Demos</h1>}

                            onLeftIconButtonTouchTap={() => this.handleToggleDrawer()}/>
                        <Drawer docked={false} open={this.state.open} onRequestChange={() => this.handleToggleDrawer()}>
                            <AppBar
                                style={{cursor: "pointer"}}
                                title={"Demos"}
                                showMenuIconButton={false}
                                onTitleTouchTap={() => this.handleToggleDrawer()}/>
                            <Menu>
                                <NavLink to="/point-spender"><MenuItem onClick={() => this.handleDrawerMenuClick()}>Point Spender</MenuItem></NavLink>
                                <NavLink to="/party-builder"><MenuItem onClick={() => this.handleDrawerMenuClick()}>Party Builder</MenuItem></NavLink>
                                <NavLink to="/character-creator"><MenuItem onClick={() => this.handleDrawerMenuClick()}>Character Creator</MenuItem></NavLink>
                            </Menu>
                        </Drawer>
                        <Container>
                            <Row>
                                <Switch>
                                    <Route exact path={"/"} component={() => (<PointSpender/>)}/>
                                    <Route path={"/point-spender"} component={PointSpender}/>
                                    <Route path={"/party-builder"} component={PartyBuilder}/>
                                    <Route path={"/character-creator"} component={CharacterCreator}/>
                                    <Route render={function () {
                                        return <h1>No Page Found</h1>
                                    }}/>
                                </Switch>
                            </Row>
                        </Container>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
