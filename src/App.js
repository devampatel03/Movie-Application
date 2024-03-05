import React from "react";
import { useState,useEffect } from "react";
import Movie_card from "./card";
import "./App.css";



//api key :bc848061
// const API_URL = 'http://www.omdbapi.com?apikey=bc848061';
const API_KEY = '8dedfee997fb5aa6c04d2410b10fd53f';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;

const App=() =>{

    const [searchkeyword,setsearchkeyword]=useState('');
    const [ list_of_movies,setlist_of_movies]=useState([]);

    const searchmovies = async (title)=>{
        const response = await fetch (SEARCH_URL + title);
        const data =await response.json();
        setlist_of_movies(data.results);
        console.log(list_of_movies);


    }

    const handleKeyDown=(event)=>{
        if(event.key==="Enter"){
            searchmovies(searchkeyword);
        }
    }
    useEffect(()=>{
        searchmovies('batman');

    },[])

    // const sortedMovies=list_of_movies;

    // if (list_of_movies?.length >0){
    //     const sortedMovies = list_of_movies.sort((a, b) => a.Year.localeCompare(b.Year));


    // }
   

    return (
        <div className="app">
            <pre><span className="heading"><span>P</span>O<span>P</span>CO<img src="popcorn.png" class="popcorn" />N  TIME</span></pre>
            <div className="search">
                <input className="search_bar"
                    placeholder="Search a movie"
                    value={searchkeyword}
                    type="text"
                    onChange={(e) => setsearchkeyword(e.target.value)} 
                    onKeyDown={handleKeyDown.bind(this)}
                    />
                <img className="search_icon"
                    src="search.svg"
                    onClick={() => searchmovies(searchkeyword)} 
                    />
            </div>
        
            <button className="left_cursor">Left</button>
        <div className="list_of_movies">
           
        {list_of_movies?.length > 0 ? (
        <div className="container">
            {list_of_movies.map((each_movie)=>(
                <Movie_card movie={each_movie}/>
            ))}
        </div>
        ) :(
            <div className="notfound">
                <h2>No Movies Found</h2>
            </div>
        )}
        
        </div>
        </div>

        
    );

    
};

export default App;
