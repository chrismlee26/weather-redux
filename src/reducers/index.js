import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'

const rootReducer = combineReducers({
  weather: weatherReducer
})

export default rootReducer


// { weather: null } <-- shape of state