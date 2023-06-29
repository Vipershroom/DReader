import React from 'react'
import './styles/Category.scss'
import Card from './Card'
const Categorys = () => {
    return (
        <div className="categorys">
            <div className="header">
                <h1>Header</h1>
            </div>
            <div className="card-row">
                <Card />
            </div>
        </div>
    )
}

export default Categorys
