import React from 'react'
import { ValuesList } from './ValuesList/ValuesList'
import { Advantages } from './Advantages/Advantages'
import { Description } from './Description/Description'
import { Header } from './Header/Header'
import styles from './MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.fullContainer}>
            <Header />
            <div className={styles.container}>
                <ValuesList />
                <Description />
                <Advantages />
            </div>
        </div>
    )
}
