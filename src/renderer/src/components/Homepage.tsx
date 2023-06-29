import React from 'react'
import Sources from './Homepage_Components/Sources'
import Categorys from './Homepage_Components/Categorys'

const Homepage = () => {
    return (
        <div>
            <Sources />
            <Categorys />
            <button
                onClick={() => {
                    window.electron.ipcRenderer.send('card-fetch')
                }}
            >
                Hello
            </button>
        </div>
    )
}

export default Homepage
