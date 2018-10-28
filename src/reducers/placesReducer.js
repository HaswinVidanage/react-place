export const INITIAL_STATE = {
  suggetions: [],
  mapLocations: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SUGGESTIONS':
      return {
        ...state,
        suggetions: action.payload
      };
    case 'SET_MAP_LOCATIONS':
      return {
        ...state,
        mapLocations:  state.mapLocations.concat(action.payload)
      };
    default:
      return state
  }
}