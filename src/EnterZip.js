import { useState} from 'react'

function EnterZip() {
  const [zip, setZip] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
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