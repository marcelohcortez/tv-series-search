import Card from '../card/card.component';

import './card-list.style.css';

const CardList = ({series}) => (
    <div className='card-list'>
        {series.map((seriesItem) => {
            return <Card seriesItem={seriesItem} key={seriesItem.show.id}/>
        })}
    </div>
)

export default CardList