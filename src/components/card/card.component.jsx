import { useNavigate } from 'react-router-dom';

import "./card.style.css"

const Card = ({ seriesItem }) => {
    const navigate = useNavigate();
    
    return (
        <div className="card-container" onClick={() => navigate(`/details/${seriesItem.show.id}`)}>
            <img className="card-image" src={seriesItem.show.image.medium}/>
            <p className="card-name">{seriesItem.show.name}</p>
            <span className="card-rating">Rating: {seriesItem.show.rating.average}</span>
        </div>
    )
}

export default Card
