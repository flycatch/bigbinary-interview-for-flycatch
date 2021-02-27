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

 
  const launchService = {
    launchList
  };
  
  export default launchService;