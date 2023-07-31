import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Header from "../../components/header/header.component";
import CardList from "../../components/card-list/card-list.component";

import './results.style.css';

const Results = () => {
    const [ series, setSeries ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const { name } = useParams()

    useEffect(() => {
        const response = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${ name }`)
                setSeries( response.data )
            } catch ( error ) {
                console.error( error );
            }
        }
        response()
        setIsLoading(false)
    }, [])
        
    return (
        <>
        {!isLoading && 
            <div id="results">
                <Header/>
                <div className="results">
                    {series.length > 0 
                    ? 
                    <CardList series={ series }/>
                    :
                    <h1>Nothing found. Try a new search.</h1>
                    }
                </div>
            </div>
        }
        </>
    )
}

export default Results

