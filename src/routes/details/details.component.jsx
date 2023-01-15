import { useParams } from "react-router-dom"

const Details = () => {
    let { id } = useParams();
    return (
        <h1>DETAILS COMPONENT FOR ITEM {id}</h1>
    )
}

export default Details