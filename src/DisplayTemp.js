import { useSelector } from 'react-redux' //<-- this allows access to state store

// Don't need to pass props in redux. redux store replaces props
function DisplayTemp() {
  //state.weather = weather variable from reducer
  const weather = useSelector(state => state.weather) 

  //edge case for when app begins, null returns null
  if (weather === null) {
    return null
  }

  // deconstruct if not null
  const { temp, cod } = weather
  

  if (cod !== 200) {
    return null
  }

  return (
    <h1>{temp}</h1>
  )
}

export default DisplayTemp