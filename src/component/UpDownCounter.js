import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {RaisedButton} from 'material-ui';
import PropTypes from 'prop-types';

const UpDownCounter = (props) => {
    return (
        <Row>
            <Col sm={6}>
                <h3>{props.name} : {props.value}</h3>
            </Col>
            <Col sm={6}>
                <Row style={{height: "50px"}}>
                    <RaisedButton label={props.upLabel} onClick={props.handleUpClick}/>
                </Row>
                <Row style={{height: "50px"}}>
                    <RaisedButton label={props.downLabel} onClick={props.handleDownClick}/>
                </Row>
            </Col>
        </Row>
    );
};

UpDownCounter.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    handleUpClick: PropTypes.func.isRequired,
    handleDownClick: PropTypes.func.isRequired,
    upLabel: PropTypes.string,
    downLabel: PropTypes.string,
};

UpDownCounter.defaultProps = {
    upLabel: "+",
    downLabel: "-",
};

export default UpDownCounter;