import axios from 'axios';


const handleResponse = (response) => {
  if (!response.data.success) {
    return (response.data);
  }
  return response.data;
};

function launchList() {
  return axios
    .get(`https://api.spacexdata.com/v3/launches`)
    .then((response) => handleResponse(response)
    )
    .catch((error) => handleResponse(error.response));
}
function launchById(flight_number) {
  return axios
    .get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
    .then((response) => handleResponse(response)
    )
    .catch((error) => handleResponse(error.response));
}
function launchByFilter(value) {
  return axios
    .get(`https://api.spacexdata.com/v3/launches/${value}`)
    .then((response) => handleResponse(response)
    )
    .catch((error) => handleResponse(error.response));
}
async function launchByDateFilter(startDate, endDate, LaunchDate) {
  if (LaunchDate) {
    const filteredLaunches = await axios
      .get(`https://api.spacexdata.com/v3?${LaunchDate}`);
      return filteredLaunches.data;
  }
  else {
    const filteredLaunches = await axios
      .get(`https://api.spacexdata.com/v3?start=${startDate}&end=${endDate}`);
      return filteredLaunches.data;
  }
  
}

const launchService = {
  launchList,
  launchById,
  launchByFilter,
  launchByDateFilter
};

export default launchService;