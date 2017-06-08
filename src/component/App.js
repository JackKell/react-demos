import React, { Component } from 'react';
import { Nav, NavItem, Row, Col } from 'react-bootstrap';
import PointSpender from "./PointSpender";
// import PartyMemberList from "./PartyMemberList";
import PartyMemberCard from "./PartyMemberCard";
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class App extends Component {
    constructor() {
        super();
        this.state = {
            content: <PointSpender/>
        }
    }

    handleClick = (selectedKey) => {
        const demoMap = {
            1: <PointSpender/>,
            2: <PartyMemberCard/>,
            3: <h1>Demo 3 coming soonish</h1>
        };

        this.setState({
                content: demoMap[selectedKey],
            }
        );
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
                                    <NavItem eventKey={2}>Random Card</NavItem>
                                    <NavItem eventKey={3}>Some Text</NavItem>
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
