import React, { ChangeEvent, useState } from 'react'
import styles from './BookingModal.module.css'
import { additionalFeatures } from './constants'
import carStyles from '../Car/Car.module.css'
import { URL } from '../../globalConstants'

type BookingModalProps = {
    car: any
    onClose: () => void
}

export const BookingModal = ({ onClose, car }: BookingModalProps) => {
    const [selectedFeatures, setSelectedFeatures] = useState(additionalFeatures)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name)
        setSelectedFeatures((prev) =>
            prev.map((item) =>
                event.target.name === item.name
                    ? {
                          ...item,
                          checked: !item.checked,
                      }
                    : item
            )
        )
    }

    const checkedAmount = selectedFeatures.reduce((acc, item) => {
        if (item.checked) {
            if (item.price === '10%') {
                return acc + (car.price / 100) * 10
            }
            return acc + +item.price
        }
        return acc
    }, 0)

    const handleClick = () => {
        const formData = new FormData()
        const result = {
            start_date: new Date('12/12/2001'),
            end_date: new Date('13/12/2001'),
            preferences: [],
            car: car.id,
            end_price: car.price,
        }

        Object.entries(result).forEach(([key, value]) => {
            formData.append(key, value as string)
        })

        fetch(`${URL}/booking`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: formData,
        }).then((res) => console.log(res))
    }

    return (
        <div className={styles.background} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2>Бронювання авто</h2>
                <p className={styles.carName}>
                    {car.name}, {car.engine_speed / 1000}, {car.gearbox}{' '}
                </p>
                <div className={styles.datePickers}>
                    <label>
                        Початок оренди
                        <input type={'date'} />
                    </label>
                    <label>
                        Кінець оренди
                        <input type={'date'} />
                    </label>
                </div>
                <div className={styles.featureContainer}>
                    {selectedFeatures.map((item) => (
                        <div>
                            <label key={item.name}>
                                <input
                                    name={item.name}
                                    className={styles.input}
                                    type={'checkbox'}
                                    checked={item.checked}
                                    onChange={handleChange}
                                />
                                {item.name}
                            </label>
                            <p>+{item.price}</p>
                        </div>
                    ))}
                </div>
                <p className={styles.pledge}>+ застава {car.pledge}₴</p>
                <p className={styles.price}>
                    Остаточна ціна <span>{car.price + checkedAmount}₴</span>
                </p>
                <button
                    onClick={handleClick}
                    className={carStyles.button}
                    type={'button'}
                >
                    БРОНЮВАННЯ
                </button>
            </div>
        </div>
    )
}
