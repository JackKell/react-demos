import {combineReducers} from 'redux';
import CharacterCreatorReducer from './CharacterCreator.reducer';
import PointSpenderReducer from './PointSpender.reducer';
import PartyBuilderReducer from './PartyBuilder.reducer';

const rootReducer = combineReducers({
    partyBuilder: PartyBuilderReducer,
    pointSpender: PointSpenderReducer,
    characterCreator: CharacterCreatorReducer,
});

export default rootReducer;
