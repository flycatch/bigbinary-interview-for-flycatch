import { expenseConstants, launchesConstants } from "../constants";
const initialState = {
  launches: "",
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
        launches: action.launches.data,
        Loading: false,
      };
    case launchesConstants.GET_ALL_LAUNCHES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    
    default:
      return state;
  }
};
export default allLaunches;
