import { Fragment } from "react"
import { Outlet } from "react-router-dom"

import SearchBar from "../../components/search-bar/search-bar.component"

import logo from '../../assets/logo-tv-maze.png'

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <SearchBar/>
            </div>
            <Outlet/>
        </Fragment>
    )   
}

export default Header