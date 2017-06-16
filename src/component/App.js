import React, {Component} from 'react';
import {Row, Container} from "react-grid-system";
import {Router, Route} from 'react-router';
import PointSpender from "./PointSpender";
import PartyBuilder from "./PartyBuilder";
import {MuiThemeProvider, AppBar, Drawer, MenuItem, Menu} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CharacterCreator from './CharacterCreator';

injectTapEventPlugin();

class App extends Component {
    demoMap = [
        <PointSpender/>,
        <PartyBuilder maxPartySize={3}/>,
        <CharacterCreator/>,
    ];

    constructor() {
        super();
        this.state = {
            content: this.demoMap[2],
            open: false,
        };
    }

    handleClick = (selectedKey) => {
        this.setState({
            ...this.state,
            content: this.demoMap[selectedKey],
        });
    };

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
                                <MenuItem onTouchTap={() => this.setContent(0)}>Point Spender</MenuItem>
                                <MenuItem onTouchTap={() => this.setContent(1)}>Party Builder</MenuItem>
                                <MenuItem onTouchTap={() => this.setContent(2)}>Character Creator</MenuItem>
                            </Menu>
                        </Drawer>
                        <Container>
                            <Row>
                                {this.state.content}
                            </Row>
                        </Container>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
