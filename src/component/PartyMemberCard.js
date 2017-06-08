import React from 'react';
import { Card, CardHeader, CardActions, CardText} from 'material-ui';
import { FlatButton } from 'material-ui';

function PartyMemberCard(props) {
    return (
        <Card>
            <CardHeader
                title={"Without Avatar"}
                subtitle={"Subtitle"}
            />
            <CardText>
                Some stuff to say about the world in a few short words.
            </CardText>
            <CardActions>
                <FlatButton label={"Action1"}/>
                <FlatButton label={"Action2"}/>
            </CardActions>
        </Card>
        // <div className="card" style={{width: "20rem"}}>
        //     <div className="card-block">
        //         <h4 className="card-title">Card Title</h4>
        //         <h6 className="card-subtitle">Card Subtitle</h6>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         <a href="#" className="card-link">Card Link</a>
        //         <a href="#" className="card-link">Another</a>
        //     </div>
        // </div>
    );
}

export default PartyMemberCard;