import React from 'react'
import Sources from './Homepage_Components/Sources'

const mangaSources = ['mangadex']

const Homepage = () => {
    return (
        <div>
            <Sources names={mangaSources[0]} />
        </div>
    )
}

export default Homepage
