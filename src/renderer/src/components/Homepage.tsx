import React, { useState, useEffect } from 'react'
import Sources from './Homepage_Components/Sources'
import Categorys from './Homepage_Components/Categorys'
import { MangaCard } from '../../../interfaces/interfaces'

const Homepage = () => {
    const [recentlyUpdated, setRecentlyUpdated] = useState<Array<MangaCard>>([
        {
            title: 'Placeholder',
            description: 'Placeholder',
            cover: '',
        },
    ])
    const [isekai, setIsekai] = useState<Array<MangaCard>>([
        {
            title: 'Placeholder',
            description: 'Placeholder',
            cover: '',
        },
    ])
    useEffect(() => {
        window.electron.ipcRenderer.send('card-fetch')
        window.electron.ipcRenderer.on(
            'card-recieve',
            (event, data: Array<MangaCard>) => {
                setRecentlyUpdated(data)
                console.log('Done fetching')
            }
        )
        window.electron.ipcRenderer.on(
            'isekai-recieve',
            (event, data: Array<MangaCard>) => {
                setIsekai(data)
            }
        )
    }, [])

    return (
        <div>
            <Sources />
            <Categorys props={recentlyUpdated} header={'Recently Updated'} />
            <Categorys props={isekai} header={'Isekai'} />
        </div>
    )
}

export default Homepage
