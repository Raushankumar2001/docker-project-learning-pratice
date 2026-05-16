import { useEffect, useState } from 'react'
import axios from 'axios'
axios.get(`${import.meta.env.VITE_API_URL}/api/data`)
function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/data')
      .then((response) => {
        setMessage(response.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div style={{ padding: '40px' }}>
      <h1>Docker Learning Projectss</h1>

      <h2>{message}</h2>
    </div>
  )
}

export default App
