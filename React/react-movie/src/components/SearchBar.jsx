const SearchBar = ({searchTerm, setSearchTerm}) => {
    return ( 
        <div className="search-bar">
            <input type="text" placeholder="Search for a movie.." value={searchTerm} onChange={e =>setSearchTerm(e.target.value)} />
        </div>
     );
}
 
export default SearchBar;