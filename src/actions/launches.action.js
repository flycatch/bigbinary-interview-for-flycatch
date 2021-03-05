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
      launchService.launchList().then(
        (launchesData) => {
          dispatch(success(launchesData));
        },
        (error) => {
          dispatch(failure(error.message));
        },
      );
    };
  };


const launchById=(flight_number)=>{
  function request() {
    return { type: launchesConstants.GET_BY_ID_LAUNCH_REQUEST };
  }
  function success(launchesData) {
    return { type: launchesConstants.GET_BY_ID_LAUNCH_SUCCESS,launchesData };
  }
  function failure(error) {
    return { type: launchesConstants.GET_BY_ID_LAUNCH_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request());
    launchService.launchById(flight_number).then(
      (launchesData) => {
        dispatch(success(launchesData));
      },
      (error) => {
        dispatch(failure(error.message));
      },
    );
  };
}
const launchesListByFilter = (value) => {
  function request() {
    return { type: launchesConstants.GET_BY_FILTER_LAUNCH_REQUEST };
  }
  function success(launchesData) {
    return { type: launchesConstants.GET_BY_FILTER_LAUNCH_SUCCESS,launchesData };
  }
  function failure(error) {
    return { type: launchesConstants.GET_BY_ID_LAUNCH_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request());
    launchService.launchByFilter(value).then(
      (launchesData) => {
        dispatch(success(launchesData));
      },
      (error) => {
        dispatch(failure(error.message));
      },
    );
  };
};
const launchesFilterByDate =  (startDate, endDate, date) => {
  function request() {
    return { type: launchesConstants.GET_BY_DATE_FILTER_LAUNCH_REQUEST };
  }
  function success(launchesData) {
    return { type: launchesConstants.GET_BY_FILTER_LAUNCH_SUCCESS,launchesData };
  }
  function  failure(error) {
    return { type: launchesConstants.GET_BY_DATE_FILTER_LAUNCH_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request());
    launchService.launchByDateFilter(startDate,endDate,date).then(
      (launchesData) => {
     dispatch(success(launchesData))
      },
      (error) => {
        dispatch(failure(error.message))
      }
    )
  }
}
  const launchesActions = {
   launchesList,
   launchById,
   launchesListByFilter,
   launchesFilterByDate
  };
  export default launchesActions;