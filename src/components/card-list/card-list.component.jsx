import Card from '../card/card.component';

const CardList = ({series}) => (
    <div className='card-list'>
        {series.map((seriesItem) => {
            return <Card seriesItem={seriesItem} key={seriesItem.show.id}/>
        })}
    </div>
)

export default CardList