import React, {Component} from 'react';
import {Nav, NavItem, Row, Col} from 'react-bootstrap';
import PointSpender from "./PointSpender";
import PartyBuilder from "./PartyBuilder";
import {MuiThemeProvider} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CharacterCreator from './CharacterCreator';

injectTapEventPlugin();

class App extends Component {
    demoMap = {
        1: <PointSpender/>,
        2: <PartyBuilder maxPartySize={3}/>,
        3: <CharacterCreator/>,
    };

    constructor() {
        super();
        this.state = {
            content: this.demoMap[3],
        };
    }

    handleClick = (selectedKey) => {
        this.setState({
            ...this.state,
            content: this.demoMap[selectedKey],
        });
    };

    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <div className="container">
                        <Row>
                            <h1>React Demos</h1>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <h3>Demos</h3>
                                <Nav stacked activeKey={1} onSelect={this.handleClick}>
                                    <NavItem eventKey={1}>Point Spender</NavItem>
                                    <NavItem eventKey={2}>Party Builder</NavItem>
                                    <NavItem eventKey={3}>Character Creator</NavItem>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                {this.state.content}
                            </Col>
                        </Row>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
