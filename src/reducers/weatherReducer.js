import { LOAD_WEATHER } from '../actions'

const weatherReducer = (state = null, action) => {
  console.log(action, "--------------")
  switch(action.type) {
    case LOAD_WEATHER: 
      return action.payload //<--  weatherReducer
    default:
      return state
  }
}

export default weatherReducer