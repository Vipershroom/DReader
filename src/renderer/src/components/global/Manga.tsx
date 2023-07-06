import React from 'react'
import './styles/Manga.scss'
import Chapter from './Manga_components/Chapter'

const Manga = () => {
    return (
        <div className="manga">
            <div className="title-wrapper">
                <div className="title">
                    <div className="image-container">
                        <img
                            src="https://mangadex.org/covers/76ac6b53-df49-4ace-85a2-b27970830ef2/24edd0f4-234a-48a6-9bbe-fa6b667cee01.jpg"
                            alt=""
                        />
                        <div className="tags">
                            <p>Isekai</p>
                            <p>Harem</p>
                            <p>Shounen</p>
                        </div>
                    </div>
                    <h1>Title</h1>
                </div>
                <div className="description">
                    <div className="content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quae dolores atque nisi praesentium quidem unde
                        deleniti aperiam voluptatem enim aspernatur ab vero
                        dicta officiis, nobis, laudantium nulla. Animi, amet!
                        Inventore!
                    </div>
                </div>
                <Chapter />
                <Chapter />
                <Chapter />
            </div>
        </div>
    )
}

export default Manga
