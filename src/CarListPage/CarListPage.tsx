import React, { useEffect, useState } from 'react'
import { Car } from './Car/Car'
import { BookingModal } from './BookingModal/BookingModal'
import styles from './CarListPage.module.css'
import { URL } from '../globalConstants'

export const CarListPage = () => {
    const [cars, setCars] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentCar, setCurrentCar] = useState(false)

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    useEffect(() => {
        fetch(`${URL}/cars`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((response) => {
                setCars(response)
            })

        fetch(`${URL}/user`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((response) => {
                setCars(response)
            })
    }, [])

    return (
        <div className={styles.container}>
            {isModalOpen && (
                <BookingModal onClose={handleModalClose} car={currentCar} />
            )}
            <h1>Каталог</h1>
            <div className={styles.carList}>
                {cars?.map((item: any) => (
                    <Car
                        {...item}
                        onModalOpen={handleModalOpen}
                        onCarBook={setCurrentCar}
                    />
                ))}
            </div>
        </div>
    )
}
