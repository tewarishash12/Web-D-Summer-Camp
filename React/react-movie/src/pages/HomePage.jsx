import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const HomePage = () => {

    const [ movies, setMovies ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

    return ( 
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
    );
}

export default HomePage;