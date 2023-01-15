import axios from "axios"

const SearchBar = ({setSeries, setSearchDone}) => {
    const onClickHandler = async (e) => {
        e.preventDefault

        const searchValue = e.target.previousElementSibling.value
        
        try {
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
            setSeries(response.data)
            setSearchDone(true)
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
     
        <div className="searchBar-container">
            <input
                className="searchBar"
                type="text"
                placeholder="Search for TV shows"
            />
            <button type="submit" onClick={ onClickHandler }>Search</button>
            
        </div>
            
        
        
    )
}

export default SearchBar