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
 
  const launchService = {
    launchList,
    launchById,
    launchByFilter
  };
  
  export default launchService;