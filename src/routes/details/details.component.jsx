import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import './details.style.css'

const Details = () => {
    const { id } = useParams()
    const [seriesData, setSeriesData] = useState([])
    const [seriesCast, setSeriesCast] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const response = async () => {
            try {
                const responseSeries = await axios.get(`https://api.tvmaze.com/lookup/shows?imdb=${id}`)
                const responseCast = await axios.get(`https://api.tvmaze.com/shows/${responseSeries.data.id}/cast`)

                setSeriesData(responseSeries.data)
                setSeriesCast(responseCast.data)
                setLoading(false)
                
            } catch (error) {
                console.error(error);
            }
        }  
        response()
    }, [])
    
    return (
        <div className="details-page">
            <div className="return">Back to search results</div>
            { !loading &&
                <div className="series-single">
                    <div className="series-cover">
                        {seriesData.image !== null &&
                            <img src={seriesData.image.medium} />
                        }
                    </div>
                    <div className="series-details">
                        <div className="series-infos">
                            <h2 className="series-title">{seriesData.name}</h2>
                            <span className="series-rating">{seriesData.rating.average}</span>
                            <p className="series-genres"><b>Genres:</b>
                                {seriesData.genres.map((genre) => {
                                    return <span key={genre}> {genre} /</span>
                                })}
                            </p>
                        </div>
                        <div className="series-summary" dangerouslySetInnerHTML={{__html:seriesData.summary}}></div>
                        <div className="series-cast">
                            <h2>Cast</h2>
                            <div className="series-cast-list">
                                {seriesCast.map((seriesCastItem) => {
                                    return (
                                        <div className="cast-item" key={seriesCastItem.character.id}>
                                            <div className="cast-image">
                                                {seriesCastItem.character.image !== null &&
                                                    <img src={seriesCastItem.character.image.medium}/>
                                                }
                                            </div>
                                            <div className="cast-info">
                                                <p className="cast-item-name">{seriesCastItem.person.name}</p>
                                                <p className="cast-item-character">as {seriesCastItem.character.name}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Details