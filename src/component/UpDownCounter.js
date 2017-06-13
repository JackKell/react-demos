import React from 'react';
import {Row, Col} from 'react-grid-system';
import {RaisedButton} from 'material-ui';
import PropTypes from 'prop-types';

const UpDownCounter = (props) => {
    return (
        <div>
            <Col sm={6} md={6}>
                <Row>
                    <h4>{props.name}: {props.value}</h4>
                </Row>
            </Col>
            <Col sm={6} md={6}>
                <RaisedButton label={props.upLabel} onClick={props.handleUpClick}/>
                <RaisedButton label={props.downLabel} onClick={props.handleDownClick}/>
            </Col>
        </div>
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