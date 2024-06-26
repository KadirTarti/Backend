import { response } from 'express'
import React, {useEffect, useState} from 'react'

const App = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect (()=>{
    fetch('/api').then(
      res => res.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  }, [])


  return (
    <div>
        
    </div>
  )
}

export default App