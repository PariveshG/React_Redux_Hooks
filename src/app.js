import React, { useEffect } from "react";
import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import mockData from './data';
import { createSelector } from 'reselect';
import * as userActions from './actions/userActions';
const App = () => {
  const [orders] = useState(mockData);
  const content = useSelector(state => state.data);
  console.log("ocsc "+ content);
 
 
  const dispatch = useDispatch();
 

  function getData() {
    return results => {
  
      axios.get("http://localhost:3000/users").then(res => 
        dispatch({
          type: "FETCH_DATA",
          data: res.data
        })
      );
    };
  }

  useEffect(() => {
    console.log("useeffect")
    dispatch(getData());
  }, []);
  useEffect(() => {
    console.log("useeffect2")
    
  }, []);
 

  function approveData(content){
console.log(content)
     axios.put(`http://localhost:3000/users/${content.id}/`, {
      first_name: content.first_name,
      last_name: content.last_name,
      email: 'APPROVE'
  }).then(resp => {
      console.log(resp.data);
      dispatch({
        type: "APPROVE",
        data: resp.data
      })
   
  })
  }

  return (
    <div className="App">
     {content && (
     <ul>
      {content.map(content => (
        <li key={content.id}>
          {content.id} ,
          {content.first_name}  ,
          {content.last_name}  ,
          {content.email} 
          {console.log(content.id + "     Result  " + content.first_name )},    <button
        
        onClick={() => approveData(content)}
        
      >
        Increment
      </button>
        </li>
        
      ))}
    </ul>
        
     )}
    </div>
  );
}

export default App;
