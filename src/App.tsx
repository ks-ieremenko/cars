import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage/MainPage'
import { Navbar } from './Navbar/Navbar'
import { InfoPage } from './InfoPage/InfoPage'
import { CarListPage } from './CarListPage/CarListPage'
import { LoginPage } from './LoginPage/LoginPage'
import { ProfilePage } from './ProfilePage/ProfilePage'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/list" element={<CarListPage />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </>
    )
}

export default App
