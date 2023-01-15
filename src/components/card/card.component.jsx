const Card = ({ seriesItem }) => {   
    return (
        <div className='card-container'>
            <p>{seriesItem.show.name}</p>
        </div>
    )
}

export default Card
