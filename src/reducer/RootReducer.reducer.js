import {combineReducers} from 'redux';
import CharacterCreatorReducer from './CharacterCreator.reducer';
import PointSpenderReducer from './PointSpender.reducer';
import PartyBuilderReducer from './PartyBuilder.reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    partyBuilder: PartyBuilderReducer,
    pointSpender: PointSpenderReducer,
    characterCreator: CharacterCreatorReducer,
    router: routerReducer,
});

export default rootReducer;
