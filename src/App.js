import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
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

  // State
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    setMovies(data.Search);
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
        value = {searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src = {searchIcon}
          alt = 'Search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {
              movies.map((movie) => (
                <MovieCard movie={movie} />
              ))
            }
          </div>
        ):
        (
          <div className='empty'>
            <h2>No movie found</h2>
          </div>
        )
      }

    </div>
  )
}

export default App;
