import React from 'react'
import CarImage from '../../media/car_main.png'

import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.container}>
            <img src={CarImage} alt="Car" className={styles.image} />

            <div className={styles.imageText}>
                <h2>ПЕРШЕ БРОНЮВАННЯ</h2>
                <h2>АВТОМОБІЛЯ</h2>
                <p>
                    Доєднуйся до нашої мережі та отримай <br /> гарантовану
                    знижку 15%
                </p>
            </div>
        </div>
    )
}
