import React from 'react'
import Homepage from './components/Homepage'

import './styles/App.scss'
import Navbar from './Navbar'
function App(): JSX.Element {
    return (
        <main>
            <Homepage />
            <Navbar />
        </main>
    )
}

export default App
