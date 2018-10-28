import axios from 'axios';
import { setSuggestions, setMapLocations } from '../_actions/places.action';
import * as config from "../config/config.json";

export const fetchSuggestionsByValue = (value) => (dispatch, getState) => {
  axios.get(config.GOOGLE.PLACES_API.replace("{INPUT}", value).replace("{API_KEY}", config.GOOGLE.API_KEY), {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })
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
  axios.get(config.GOOGLE.LOCATION_API.replace("{PLACE_ID}", value).replace("{API_KEY}", config.GOOGLE.API_KEY), {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }).then(response => {
      dispatch(setMapLocations(response.data.result.geometry.location));
    })
    .catch(error => {
      console.log('Error',error);
    });
};
