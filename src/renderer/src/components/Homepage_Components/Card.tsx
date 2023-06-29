import React from 'react'
import './styles/Card.scss'
import { MangaCard } from '../../../../interfaces/interfaces'

const Card = (props: { props: MangaCard }) => {
    return (
        <>
            <div className="card-wrapper">
                <div
                    className="card"
                    style={{
                        backgroundImage: `url(${props.props.cover})`,
                    }}
                >
                    <div className="description">
                        {/*
                        TODO
                        Add a check for characters, character limit is: 234
                        */}
                        <p>{props.props.description}</p>
                    </div>
                </div>
                <div className="title">
                    <h2>{props.props.title}</h2>
                </div>
            </div>
        </>
    )
}

export default Card
