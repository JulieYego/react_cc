import './App.css';
import searchIcon from './search.svg';
import { useState, useEffect } from 'react';

/*const Person = (props) =>{
  return(
    <>
    <h1>Name : {props.name}</h1>
    <h2>Last Name : {props.lastName}</h2>
    <h3>Age : {props.age}</h3>
    </>
  );
}*/
const API_URL = 'http://www.omdbapi.com?apikey=7881c973'

const movie1 = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

const App = () => {
  /*const name = 'Julie'
  const isNameShowing = false;
  const [counter, setCounter] = useState(0);
 
  //Happens as soon as component renders
  useEffect(()=>{
    alert("You've changed the counter to " + counter)
  },[counter])

  return (
    <div className="App">
      <h1>Hello React {isNameShowing ? name : 'Someone else'} !</h1>
      {name ? 
      (<>
       <h1>{name}</h1>
      </>)
      :(
      <>
        <h1>False</h1>
        <h2>No name</h2>
      </>)}

      <Person name = 'John'
              lastName = 'Doe'
              age = {25}
      />
      <Person name = 'Mary'
              lastName = 'Doe'
              age = {20}
      />
      <button onClick = {() => {setCounter(prevCount => prevCount + 1)}}>+</button>
      <h1>{counter}</h1>
      <button onClick = {() => {setCounter(prevCount => prevCount - 1)}}>-</button>
    </div>
  );*/

  //7881c973

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    console.log(data.Search);
  }
  
  useEffect(() => {
    searchMovies('Spiderman')

  },[]);
  return(
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
        placeholder = 'Search for Movie'
        value = 'Superman'
        onChange={() => {}}
        />

        <img
          src = {searchIcon}
          alt = 'Search'
          onClick={() => {}}
        />
      </div>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src = {movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
              alt = {movie1.Title}/>
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
