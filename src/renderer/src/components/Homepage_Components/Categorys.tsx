import React from 'react'
import './styles/Category.scss'
import Card from './Card'
import { MangaCard } from 'src/interfaces/interfaces'

const Categorys = (props: { props: Array<MangaCard>; header: string }) => {
    return (
        <div className="categorys">
            <div className="header">
                <h1>{props.header}</h1>
            </div>
            <div className="card-row">
                {props.props.map((manga) => {
                    console.log(manga.id)
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <Card
                            title={manga.title}
                            cover={manga.cover}
                            description={manga.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Categorys
