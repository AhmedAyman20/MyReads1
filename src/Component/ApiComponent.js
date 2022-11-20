import React, { useEffect, useState } from 'react'
import MainPage from './MainPage';
import Search from './Search';



const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};


// Fetching Data From the API

function ApiComponent() {

  const [books, setBooks] = useState([]);
  const search = window.location.pathname

  const getAll = () =>{
    return fetch(`${api}/books`, { headers })
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }

  useEffect(() => {
    getAll();
  },[])

  // Checking which page we should Render to

  if (books.length === 0){
    return <p>Loading profile...</p>;
  }
  else if (search === "/search") return(
    <div>
      <Search books={books} />
    </div>
  )
  return (
    <div>
      <MainPage books={books}/>
    </div>
  )

}

export default ApiComponent