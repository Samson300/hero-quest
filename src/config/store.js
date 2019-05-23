import { createStore, combineReducers } from 'redux';
import playerReducer from '../reducers/playerReducer';
import mapReducer from '../reducers/mapReducer';
import battleReducer from '../reducers/battleReducer';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    battle: battleReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store