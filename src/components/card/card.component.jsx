import { useNavigate } from 'react-router-dom';

import "./card.style.css"

const Card = ({ seriesItem }) => {
    const navigate = useNavigate();
    const {externals, image, name, rating} = seriesItem.show

    return (
        <div className="card-container" onClick={() => navigate(`/details/${externals.imdb}`)}>
            {image !== null &&
                <img className="card-image" src={image.medium}/>
            }
            <p className="card-name">{name}</p>
            <span className="card-rating">Rating: {rating.average}</span>
        </div>
    )
}

export default Card
