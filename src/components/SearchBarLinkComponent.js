import { connect } from 'react-redux';
import SearchBarComponent from './SearchBarComponent';

import {
  fetchSuggestionsByValue,
  fetchLocationGeo
} from '../_thunks/places.thunk';

function mapStateToProps (state, props) {
  console.log('Redux state', state.placesReducer);
  return {
    suggestions: state['placesReducer'].suggetions,
    mapLocations: state['placesReducer'].mapLocations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSuggestions: value => {
      dispatch(fetchSuggestionsByValue(value));
    },
    addLocation: selectedSuggetion => {
      dispatch(fetchLocationGeo(selectedSuggetion));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);