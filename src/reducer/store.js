

function reducer(state = { data: "" }, action) {
  
  switch (action.type) {
    case "FETCH_DATA":
      const newStates = { ...state };
     console.log("FETCH DATA" +action.data.filter(function (elem) { return elem.email !== "APPROVE" }))
      return {
        ...state,
        data: action.data.filter(function (elem) { return elem.email !== "APPROVE" })
      };
    
        
      case "APPROVE":
        
        const newState = { ...state };
var newRecord = { id: action.data.id, first_name: action.data.first_name, last_name: action.data.last_name,
            email: "APPROVE"};

var newData = updateJSON(newState.data, newRecord);

        return {
          
          ...state,
          data: newData.filter(function (elem) { return elem.email !== "APPROVE" })
          
        };
        
        case "REJECT":
          return {
            ...state,
            data: action.data
          };
    default:
      return state;
  }
}

function updateJSON(newState, newRecord) {
  return newState.map(function(item) {
    return (item.id === newRecord.id) ? newRecord : item;
  });
  }
 

export default reducer;
