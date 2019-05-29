import { createStore, combineReducers } from 'redux';
import playerReducer from '../reducers/playerReducer';
import monsterReducer from '../reducers/monsterReducer';
import mapReducer from '../reducers/mapReducer';
import caveBossReducer from '../reducers/caveBossReducer';
import dungeonBossReducer from '../reducers/dungeonBossReducer';
import lastLocationReducer from '../reducers/lastLocationReducer';

const FREQUENCY = 2000;
const LS_KEY = 'hero-quest';

const rootReducer = combineReducers({
    player: playerReducer,
    lastLocation: lastLocationReducer,
    map: mapReducer,
    monster: monsterReducer,
    caveBoss: caveBossReducer,
    dungeonBoss: dungeonBossReducer
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