import { useState } from "react"

import Header from "../../components/header/header.component";
import CardList from "../../components/card-list/card-list.component"

const Home = () => {
    const [series, setSeries] = useState([])
    const [searchDone, setSearchDone] = useState(false)

    return (
        <div className="Home">
            <Header setSeries={ setSeries } searchDone={searchDone} setSearchDone={setSearchDone}/>
            <CardList series={series}/>
        </div>
    )
}

export default Home