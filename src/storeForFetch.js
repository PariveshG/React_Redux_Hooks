import axios from "axios";

function reducer(state = { data: "" }, action) {
  switch (action.type) {
    case "FETCH_DATA":
      console.log("fetch data");
      return {
        ...state,
        data: action.data
      };
     
    
    default:
      return state;
  }
}

function approveData(){

  return axios.post('http://localhost:3000/users', {
    id: 7,
    first_name: 'Parivesh',
    last_name: 'Gupta',
    email: 'freddyb34@gmail.com'
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
})
}

export default reducer;