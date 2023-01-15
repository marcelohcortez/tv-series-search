import SearchBar from "../search-bar/search-bar.component"

import logo from '../../assets/logo-tv-maze.png'

const Header = ({setSeries, searchDone, setSearchDone}) => {

    return (
        <div className={searchDone ? 'header search-done' : 'header'}>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <SearchBar setSeries={setSeries} setSearchDone={setSearchDone} />
        </div>
    )   
}

export default Header