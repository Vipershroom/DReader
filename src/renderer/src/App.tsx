import React from 'react'
import Homepage from './components/Homepage'

import './styles/App.scss'
import Navbar from './Navbar'
import Manga from './components/global/Manga'
function App(): JSX.Element {
    return (
        <main>
            <Homepage />
            <Navbar />
        </main>
    )
}

export default App
