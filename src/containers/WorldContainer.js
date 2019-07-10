import { connect } from 'react-redux';
import World from '../components/world/World';
import { townTiles } from '../config/constants';

const mapStateToProps = (state) => {
    return {
        gameWorldDisplay: state.world.gameWorldDisplay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTiles: () => {
            dispatch({ type: 'ADD_TILES', payload: {
                tiles: townTiles
            }})
            }
        }
    } 
    
const makeWorldSmart = connect(mapStateToProps, mapDispatchToProps);
const smartWorld = makeWorldSmart(World);
export default smartWorld;