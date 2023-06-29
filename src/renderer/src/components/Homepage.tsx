import React, { useState, useEffect } from 'react'
import Sources from './Homepage_Components/Sources'
import Categorys from './Homepage_Components/Categorys'
import { MangaCard } from '../../../interfaces/interfaces'

const Homepage = () => {
    const [cardData, setCardData] = useState<Array<MangaCard>>([
        {
            title: 'Placeholder',
            description: 'Placeholder',
            cover: '',
        },
    ])
    useEffect(() => {
        return () => {
            window.electron.ipcRenderer.send('card-fetch')
            window.electron.ipcRenderer.on(
                'card-recieve',
                (event, data: Array<MangaCard>) => {
                    console.log(data)
                    setCardData(data)
                    // console.log(cardData)
                    console.log('Done fetching')
                }
            )
        }
    }, [])

    return (
        <div>
            <Sources />
            <Categorys props={cardData} />
            <button
                onClick={() => {
                    console.log()
                }}
            >
                Hello
            </button>
        </div>
    )
}

export default Homepage
