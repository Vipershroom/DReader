import React from 'react'
import './styles/Navbar.scss'
import search from './assets/search.svg'
import home from './assets/home.svg'
import bookmark from './assets/bookmark.svg'
const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div>
                    <img src={home} alt="" />
                </div>
                <div className="search">
                    <img src={search} alt="" />
                </div>
                <div>
                    <img src={bookmark} alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
