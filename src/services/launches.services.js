import axios from 'axios';


const handleResponse = (response) => {
    if (!response.data.success) {
         return Promise.reject(response.data);
       }
       return response.data;
     };
   
function launchList() {
    return axios
      .get(``, defaultOptions())
      .then((response) => handleResponse(response))
      .catch((error) => handleResponse(error.response));
  }

 
  const launchService = {
    launchList
  };
  
  export default launchService;