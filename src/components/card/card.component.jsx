import { useNavigate } from 'react-router-dom';

import cover from '../../assets/no-img-found.png';

import "./card.style.css";

const Card = ({ seriesItem }) => {
    const navigate = useNavigate();
    const {externals, image, name, rating} = seriesItem.show
    
    const onClickHandle = () => {
        let id = ''
        externals.imdb === null ? id = `thetvdb=${externals.thetvdb}` : id = `imdb=${externals.imdb}`

        navigate(`/show/${seriesItem.show.id}`)
    }
    
    const renderCover = () => {
        let imageSource = '';

        image === null ? imageSource = cover : imageSource = image.medium ;

        return imageSource;
    }

    return (
        <div className="card-container" onClick={ onClickHandle }>
            <img className="card-image" src={ renderCover() }/>
            <p className="card-name">{name}</p>
            <span className="card-rating">Rating: {rating.average === null ? 'N/A' : rating.average}</span>
        </div>
    )
}

export default Card
