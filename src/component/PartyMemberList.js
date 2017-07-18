import React, {Component} from 'react';

import PropTypes from 'prop-types';

class PartyMemberList extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.listTitle}</h2>
                <ul>{this.props.children}</ul>
            </div>
        );
    }
}

//noinspection JSUnresolvedVariable
PartyMemberList.propTypes = {
    listTitle: PropTypes.string.isRequired,
};

export default PartyMemberList;