import axios from 'axios';
import { setSuggestions, setMapLocations } from '../actions/places.action';

export const fetchSuggestionsByValue = (value) => (dispatch, getState) => {
  const PLACES_API= "https://maps.googleapis.com/maps/api/place/autocomplete/json?input={INPUT}&language=pt_BR&key=AIzaSyD1K_gzX8c9dAAsW8HUt1VDwc9wW9oziUo";
  axios.get(PLACES_API.replace("{INPUT}", value))
    .then(response => {
      dispatch(setSuggestions(response.data.predictions.map(place => {
        return {
          label: place.description,
          ...place
        };
      })));
    })
    .catch(error => {
      console.log('Error',error);
    });
};

export const fetchLocationGeo = (value) => (dispatch, getState) => {
  const PLACES_API= "https://maps.googleapis.com/maps/api/place/details/json?placeid={PLACE_ID}&key={API_KEY}";
  const API_KEY = 'AIzaSyD1K_gzX8c9dAAsW8HUt1VDwc9wW9oziUo';
  
  axios.get(PLACES_API.replace("{PLACE_ID}", value).replace("{API_KEY}", API_KEY))
    .then(response => {
      dispatch(setMapLocations(response.data.result.geometry.location));
    })
    .catch(error => {
      console.log('Error',error);
    });
};
