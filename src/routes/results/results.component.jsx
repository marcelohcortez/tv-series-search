import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Header from "../../components/header/header.component";
import CardList from "../../components/card-list/card-list.component";

import './results.style.css';

const Results = () => {
    const [ series, setSeries ] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const response = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${ name }`)
                setSeries( response.data )
                console.log(series)
            } catch ( error ) {
                console.error( error );
            }
        }
        response()
    }, [])
        
    return (
        <>
            <Header/>
            <div className="results">
                {series.length > 0 
                ? 
                <CardList series={ series }/>
                :
                <h1>Nothing found!</h1>
                }
            </div>
        </>
    )
}

export default Results

