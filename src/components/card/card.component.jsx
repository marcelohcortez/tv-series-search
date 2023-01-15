import "./card.style.css"

const Card = ({ seriesItem }) => {
    const onClickHandler = () => {
        console.log('clicked')
    }
    
    return (
        <div className="card-container" onClick={onClickHandler}>
            <img className="card-image" src={seriesItem.show.image.medium}/>
            <p className="card-name">{seriesItem.show.name}</p>
            <span className="card-rating">Rating: {seriesItem.show.rating.average}</span>
        </div>
    )
}

export default Card
