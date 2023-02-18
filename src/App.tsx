import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage/MainPage'
import { Navbar } from './Navbar/Navbar'
import { InfoPage } from './InfoPage/InfoPage'
import { CarListPage } from './CarListPage/CarListPage'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/list" element={<CarListPage />} />
                <Route path="/info" element={<InfoPage />} />
            </Routes>
        </>
    )
}

export default App
