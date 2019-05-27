import { createStore, combineReducers } from 'redux';
import playerReducer from '../reducers/playerReducer';
import monsterReducer from '../reducers/monsterReducer';
import mapReducer from '../reducers/mapReducer';
import battleReducer from '../reducers/battleReducer';
import caveBossReducer from '../reducers/caveBossReducer';

const FREQUENCY = 2000;
const LS_KEY = 'hero-quest';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    battle: battleReducer,
    monster: monsterReducer,
    caveBoss: caveBossReducer
});

// const initialState = JSON.parse(localStorage.getItem(LS_KEY)) || {};

const store = createStore(
    rootReducer,
    // initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

setInterval(() => {
    const state = store.getState();
    localStorage.setItem(LS_KEY, JSON.stringify(state));
}, FREQUENCY);

export default store