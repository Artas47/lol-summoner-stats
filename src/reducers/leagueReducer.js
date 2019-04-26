export default (state = {},action) => {
  switch(action.type){
    case 'FETCH_LEAGUE':
      return {...state, ...action.payload}  
    default : 
      return state
  }
}