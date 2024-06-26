import React, {Fragment, useEffect, useState} from 'react'

const App = () => {

  const [backendData, setBackendData] = useState([])

  const getBooks = async () => {
    try{
      const response = await fetch ('http://localhost:8000/books')
      const jsonData = await response.json();
      setBackendData(jsonData)
    } catch (err) {
      console.log(err.message)
    }
  }
  
  useEffect (()=>{
        getBooks();
      }, [])


  return (
    <form>
    <h1>WELCOME TO MY BOOK API</h1>
      <table class="table">
<thead>
  <tr>
    <th>Description</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  {backendData.map(book => (
    <tr>
        <td>{book.title}</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>
  ))}
</tbody>
</table>
    </form>
  )
}

export default App