import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

  const url = "http://localhost:8000/books";

  const [bookData, setBookData] = useState([])

  const fetchBookData = () => {
    axios.get(url).then((response) => {
      setBookData(response.data)
    }).catch((error) => {
      console.log('error fetching book data:', error)})
    }
  
    console.log(bookData)
    console.log(setBookData)
  useEffect (()=>{  fetchBookData()}, [])
  
  
  return (
    <main>
    <div>
      <h1>Books</h1>
    </div>
      <div>
        {bookData.length > 0 && bookData[0].post.title}
      </div>
      <div>
        {bookData.length > 0 && bookData.post[0].author}
      </div>
      <div>
        {bookData.length > 0 && bookData[0].ISBN}
      </div>
      <div>
        {bookData.length > 0 && bookData[0].genre}
      </div>
      <div>
        {bookData.length > 0 && bookData[0].publicationYear}
      </div>
    </main>
  )
}

export default App