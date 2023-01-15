const SearchBar = () => {
    return(
        <div className="searchBar-container">
            <input
                className="searchBar"
                type="text"
                placeholder="Search for TV shows"
            />
            <button type="submit">Search</button>
        </div>
    )
}

export default SearchBar