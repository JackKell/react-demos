import React, {Component} from 'react';
import {Row, Container} from "react-grid-system";
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import PointSpender from "./PointSpender";
import PartyBuilder from "./PartyBuilder";
import {MuiThemeProvider, AppBar, Drawer, MenuItem, Menu} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CharacterCreator from './CharacterCreator';

injectTapEventPlugin();

class App extends Component {
    demoMap = [
        <PointSpender/>,
        <PartyBuilder/>,
        <CharacterCreator/>,
    ];

    constructor() {
        super();
        this.state = {
            content: this.demoMap[2],
            open: false,
        };
    }

    handleToggleDrawer = () => {
        this.setState({
            ...this.state,
            open: !this.state.open,
        })
    };

    setContent = (index) => {
        this.setState({
            ...this.state,
            content: this.demoMap[index],
        })
    };

    render() {
        return (
            <BrowserRouter history={createBrowserHistory()}>
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
                                    <NavLink to="/point-spender"><MenuItem>Point Spender</MenuItem></NavLink>
                                    <NavLink to="/party-builder"><MenuItem>Party Builder</MenuItem></NavLink>
                                    <NavLink to="/character-creator"><MenuItem>Character Creator</MenuItem></NavLink>
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
            </BrowserRouter>
        );
    }
}

export default App;
