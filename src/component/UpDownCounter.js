import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function UpDownCounter(props) {
    return (
        <div className="row">
            <div className="col-sm-6">
                <h3>{props.name} : {props.value}</h3>
            </div>
            <div className="col-sm-6">
                <div className="row" style={{height: "50px"}}>
                    <Button onClick={props.handleUpClick}>+</Button>
                </div>
                <div className="row" style={{height: "50px"}}>
                    <Button onClick={props.handleDownClick}>-</Button>
                </div>
            </div>
        </div>
    );
}

UpDownCounter.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    handleUpClick: PropTypes.func.isRequired,
    handleDownClick: PropTypes.func.isRequired,
};

export default UpDownCounter;