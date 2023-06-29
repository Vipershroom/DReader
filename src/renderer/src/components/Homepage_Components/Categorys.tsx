import React from 'react'
import './styles/Category.scss'
import Card from './Card'
import { MangaCard } from 'src/interfaces/interfaces'

const Categorys = (props: { props: Array<MangaCard> }) => {
    console.log(props)
    return (
        <div className="categorys">
            <div className="header">
                <h1>Header</h1>
            </div>
            <div className="card-row">
                <Card props={props.props[0]} />
            </div>
        </div>
    )
}

export default Categorys
