import {React, useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import Card from './components/Card';

const URL = 'https://www.omdbapi.com/?apikey=5c525898';

const App = () => {

  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    //console.log(data.Search);
  }

//   const movie1 = {
//     "Poster" : "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
// "Title" : "Italian Spiderman",
// "Type" : "movie",
// "Year" :  "2007", 
// "imdbID" :  "tt2705436"
//   }

  useEffect(  keyword => {
    searchMovies( keyword );

  }, []);


  return (
    <div className='app'>
      <h1>Rent the Movie</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={keyword} onChange={(e)=> setKeyword(e.target.value) }></input>
        <img src={SearchIcon} alt='Search' onClick={ () => searchMovies(keyword) } />
      </div>

      {
        movies?.length > 0 ?
          movies.map( (ele) =>  <Card props={ele} key={ele.imdbID} ></Card> )
          : 
          (
            <div className='empty'> Empty </div>
          )
      }

    </div>
  )
}

export default App;

