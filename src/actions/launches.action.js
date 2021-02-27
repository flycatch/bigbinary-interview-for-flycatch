import { launchesConstants } from "../constants";
import { launchService } from "../services";

const launchesList = () => {
    function request() {
      return { type: launchesConstants.GET_ALL_LAUNCHES_REQUEST };
    }
    function success(launchesData) {
      return { type: launchesConstants.GET_ALL_LAUNCHES_SUCCESS,launchesData };
    }
    function failure(error) {
      return { type: launchesConstants.GET_ALL_LAUNCHES_FAILURE, error };
    }
  
    return (dispatch) => {
      dispatch(request());
      launchService.launchList(launchesData).then(
        (launchesData) => {
          dispatch(success(launchesData));
        },
        (error) => {
          dispatch(failure(error.message));
        },
      );
    };
  };
  const launchesActions = {
   launchesList
  };
  export default launchesActions;