import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import PointSpender from "./PointSpender";

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
            2: <h1>Demo 2 coming soon</h1>,
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
                <div className="container">
                    <div className="row">
                        <h1>React Demos</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h3>Demos</h3>
                            <Nav stacked activeKey={1} onSelect={this.handleClick}>
                                <NavItem eventKey={1}>Demo 1</NavItem>
                                <NavItem eventKey={2}>Demo 2</NavItem>
                                <NavItem eventKey={3}>Demo 3</NavItem>
                            </Nav>
                        </div>
                        <div className="col-sm-9">
                            {this.state.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
