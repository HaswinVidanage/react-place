
export const setSuggestions = (payload) => dispatch => {
  dispatch({
    type: 'SET_SUGGESTIONS',
    payload
  })
};

export const setMapLocations = (payload) => dispatch => {
  dispatch({
    type: 'SET_MAP_LOCATIONS',
    payload
  })
};
