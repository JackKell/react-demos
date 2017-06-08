import React from 'react';
import {  } from 'react-bootstrap';


function PartyMemberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default PartyMemberList;