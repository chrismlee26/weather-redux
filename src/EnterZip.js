import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux' 
import { loadWeather } from './actions'

function EnterZip() {
  const [zip, setZip] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('testing effect')
    dispatch( loadWeather('10018'))
  }, [])
  // useEffect runs when the array [] changes

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        dispatch( loadWeather(zip) )
      }}
    >
      <input
        value={zip}
        onChange={e => setZip(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default EnterZip