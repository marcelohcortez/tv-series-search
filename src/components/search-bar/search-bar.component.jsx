import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import './search-bar.style.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState();
    const { name } = useParams();
    const navigate = useNavigate();

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const onClickHandler = async (e) => {
        e.preventDefault;
        navigate(`/results/${ searchTerm }`);
    }

    const keyPress = (e) => {
        if(e.keyCode == 13){
            onClickHandler(e);
        }
     }

    useEffect(() => {
        setSearchTerm(name)
    }, [])
    
    
    return(
     
        <div className="searchBar-container">
            <input
                id="searchTerm"
                name="searchTerm"
                className="searchBar"
                type="text"
                value={ searchTerm }
                placeholder="Search for TV shows"
                onChange={ onChangeSearchTerm }
                onKeyDown={ keyPress }
            />
            <button type="submit" onClick={ onClickHandler }>Search</button>
        </div>
            
        
        
    )
}

export default SearchBar