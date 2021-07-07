export const LOAD_WEATHER = 'LOAD_WEATHER'

// Async w thunk!
export const loadWeather = (zip) => {
  return async (dispatch) => { // <-- Thunk
    const apiKey = process.env.REACT_APP_API_KEY;
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`;
    const res = await fetch(path)
    const json = await res.json()

    const { cod, message } = json

    if (cod !== 200) { // on res error
      dispatch({ type: LOAD_WEATHER, payload: { cod, message } })
      return
    }
    
    const { temp, feels_like } = json.main

    dispatch({ type: LOAD_WEATHER, payload: { temp, feels_like, cod } })
  } 
}