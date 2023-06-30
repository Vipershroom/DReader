import React from 'react'
import './styles/Card.scss'
import { MangaCard } from '../../../../interfaces/interfaces'

const Card = ({ title, description, cover }: MangaCard) => {
    return (
        <>
            <div className="card-wrapper">
                <div
                    className="card"
                    style={{
                        backgroundImage: `url(${cover})`,
                    }}
                >
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    )
}

export default Card
