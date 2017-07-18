import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PartyMemberList from '../component/PartyMemberList';
import { addPartyMember, removePartyMember } from '../action/PartyBuilder.action';
import { connect } from "react-redux";
import PartyMemberCard from "../component/PartyMemberCard";

const styles = {
    cardStyle: {
        paddingBottom: "2rem",
    },
};

class PartyBuilder extends Component {
    renderPartyMemberCards = (partyMembers, actionOnClick, actionLabel) => {
        console.log(partyMembers);
        const a = partyMembers.map((partyMember) => {
            return (
                <PartyMemberCard
                    style={styles.cardStyle}
                    key={partyMember.id.toString()}
                    partyMember={partyMember}
                    actionOnClick={actionOnClick}
                    actionLabel={actionLabel}
                />
            );
        });
        return a;
    };

    removeFromParty = (partyMember) => {
        this.props.handleRemovePartyMember(partyMember);
    };

    addToParty = (partyMember) => {
        if (this.props.currentPartyMembers.length + 1 <= this.props.maxPartySize) {
            this.props.handleAddPartyMember(partyMember);
        }
    };

    render() {
        return (
            <div>
                <Row>
                    <h1>Party Slots Remaining: {this.props.maxPartySize - this.props.currentPartyMembers.length}</h1>
                </Row>
                <Row>
                    <Col sm={6}>
                        <PartyMemberList listTitle="Current Party Members">
                            {this.renderPartyMemberCards(
                                this.props.currentPartyMembers,
                                (partyMember) => this.removeFromParty(partyMember),
                                "Remove",
                            )}
                        </PartyMemberList>
                    </Col>
                    <Col sm={6}>
                        <PartyMemberList listTitle="Current Party Members">
                            {this.renderPartyMemberCards(
                                this.props.availablePartyMembers,
                                (partyMember) => this.addToParty(partyMember),
                                "Add",
                            )}
                        </PartyMemberList>
                    </Col>
                </Row>
            </div>
        );
    }
}

//noinspection JSUnresolvedVariable
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