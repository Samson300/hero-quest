import { connect } from 'react-redux';
import Map from '../components/map/Map';

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map);