import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PartyMemberList from '../component/PartyMemberList';
import {addPartyMember, removePartyMember} from '../action/PartyBuilder.action';
import {connect} from "react-redux";

class PartyBuilder extends Component {
    // removeFromParty = (partyMember) => {
    //     let index = this.state.currentPartyMembers.indexOf(partyMember);
    //     let newCurrentPartyMembers = this.state.currentPartyMembers;
    //     newCurrentPartyMembers.splice(index, 1);
    //     let newAvailablePartyMembers = this.state.availablePartyMembers;
    //     newAvailablePartyMembers.push(partyMember);
    //     this.setState({
    //         currentPartyMembers: newCurrentPartyMembers,
    //         availablePartyMembers: newAvailablePartyMembers,
    //     });
    // };

    removeFromParty = (partyMember) => {
        this.props.handleRemovePartyMember(partyMember);
    };

    // addToParty = (partyMember) => {
    //     if (this.state.currentPartyMembers.length + 1 <= this.props.maxPartySize) {
    //         let index = this.state.availablePartyMembers.indexOf(partyMember);
    //         let newAvailablePartyMembers = this.state.availablePartyMembers;
    //         newAvailablePartyMembers.splice(index, 1);
    //         let newCurrentPartyMembers = this.state.currentPartyMembers;
    //         newCurrentPartyMembers.push(partyMember);
    //
    //         this.setState({
    //             currentPartyMembers: newCurrentPartyMembers,
    //             availablePartyMembers: newAvailablePartyMembers,
    //         });
    //     }
    // };

    addToParty = (partyMember) => {
        if (this.props.currentPartyMembers.length + 1 <= this.props.maxPartySize) {
            this.props.handleAddPartyMember(partyMember);
        }
    };

    render() {
        return (
            <div className="partybuilder">
                <Row>
                    <h1>Party Slots Remaining: {this.props.maxPartySize - this.props.currentPartyMembers.length}</h1>
                </Row>
                <Row>
                    <Col sm={6}>
                        <PartyMemberList
                            partyMembers={this.props.currentPartyMembers}
                            listTitle="Current Party Members"
                            actionLabel="Remove"
                            actionOnClick={(partyMember) => this.removeFromParty(partyMember)}
                        />
                    </Col>
                    <Col sm={6}>
                        <PartyMemberList
                            partyMembers={this.props.availablePartyMembers}
                            listTitle="Available Party Members"
                            actionLabel="Add"
                            actionOnClick={(partyMember) => this.addToParty(partyMember)}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

PartyBuilder.propTypes = {
    maxPartySize: PropTypes.number,
    currentPartyMembers: PropTypes.array.isRequired,
    availablePartyMembers: PropTypes.array.isRequired,
};

PartyBuilder.defaultProps = {
    maxPartySize: 3,
};

const mapStateToProps = (state) => {
    return {
        currentPartyMembers: state.partyBuilder.currentPartyMembers,
        availablePartyMembers: state.partyBuilder.availablePartyMembers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddPartyMember: (partyMember) => {
            dispatch(addPartyMember(partyMember))
        },

        handleRemovePartyMember: (partyMember) => {
            dispatch(removePartyMember(partyMember))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PartyBuilder);