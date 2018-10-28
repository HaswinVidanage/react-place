import { connect } from 'react-redux';
import MapComponent from './MapComponent';

function mapStateToProps (state, props) {
  console.log('Redux state', state.placesReducer);
  return {
    mapLocations: state['placesReducer'].mapLocations
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);