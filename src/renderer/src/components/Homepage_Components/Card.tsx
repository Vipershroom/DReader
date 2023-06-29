import React from 'react'
import './styles/Card.scss'
const Card = () => {
    return (
        <>
            <div className="card-wrapper">
                <div className="card">
                    <div className="description">
                        {/*
                        TODO
                        Add a check for characters, character limit is: 234
                        */}
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Vero similique nihil expedita nostrum dolore
                            cupiditate possimus, sed fuga doloremque corporis
                            exercitationem ut facere architecto voluptatibus.
                            Voluptas similique perspiciatis pariatur eveniet.
                        </p>
                    </div>
                </div>
                <h2>Title</h2>
            </div>
        </>
    )
}

export default Card
