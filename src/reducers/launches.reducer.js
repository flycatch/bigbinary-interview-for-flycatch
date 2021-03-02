import {  launchesConstants } from "../constants";
const initialState = {
  launches:  {},
  launchesById: {},
};
export const allLaunches = (state = initialState, action) => {
  switch (action.type) {
    case launchesConstants.GET_ALL_LAUNCHES_REQUEST:
      return {
        ...state,
        Loading: true,
      };
    case launchesConstants.GET_ALL_LAUNCHES_SUCCESS:
      return {
        ...state,
        launches: action.launchesData,
        Loading: false,
      };
    case launchesConstants.GET_ALL_LAUNCHES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
      case launchesConstants.GET_BY_ID_LAUNCH_REQUEST:
      return {
        ...state,
        Loading: true,
      };
    case launchesConstants.GET_BY_ID_LAUNCH_SUCCESS:
      return {
        ...state,
        launchesById: action.launchesData,
        Loading: false,
      };
    case launchesConstants.GET_BY_ID_LAUNCH_FAILURE:
      return {
        ...state,
        error: action.error,
      };
      case launchesConstants.GET_BY_FILTER_LAUNCH_REQUEST:
        return {
          ...state,
          Loading: true,
        };
      case launchesConstants.GET_BY_FILTER_LAUNCH_SUCCESS:
        return {
          ...state,
          launches: action.launchesData,
          Loading: false,
        };
      case launchesConstants.GET_BY_FILTER_LAUNCH_FAILURE:
        return {
          ...state,
          error: action.error,
        };
    default:
      return state;
  }
};
export default allLaunches;
