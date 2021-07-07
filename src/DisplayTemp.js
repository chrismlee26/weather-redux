import { useSelector } from 'react-redux' //<-- this allows access to state store

// Don't need to pass props in redux. redux store replaces props
function DisplayTemp() {
  const { temp, cod } = useSelector(state => state.weather) 
  //state.weather = weather variable from reducer

  if (cod !== 200) {
    return null
  }

  return (
    <h1>{temp}</h1>
  )
}

export default DisplayTemp