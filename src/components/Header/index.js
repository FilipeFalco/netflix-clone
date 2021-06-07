import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--actions">
                <Link to="/search" className="header--search">
                    <SearchIcon style={{fontSize: 25}} />
                </Link>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}