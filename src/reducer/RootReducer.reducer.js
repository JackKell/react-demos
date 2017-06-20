import {combineReducers} from 'redux';
import CharacterCreatorReducer from './CharacterCreator.reducer';

const rootReducer = combineReducers({
    characterCreator: CharacterCreatorReducer,
});

export default rootReducer;
