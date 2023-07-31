import { useNavigate, useLocation } from 'react-router-dom';

import SearchBar from "../search-bar/search-bar.component";

import logo from '../../assets/logo-tv-maze.png';

import './header.style.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickHandle = () => {
        navigate(`/`)
    }

    return (
        <div className={location.pathname === '/' ? 'header' : 'header search-done'}>
            <div className="logo" onClick={ onClickHandle }>
                <img src={logo} alt="logo"/>
            </div>
            <SearchBar />
        </div>
    )   
}

export default Header