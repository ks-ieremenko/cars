import React, { ChangeEvent, useEffect, useState } from 'react'
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
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [error, setError] = useState('')
    const [user, setUser] = useState<any>()
    let time =
        endDate && startDate
            ? new Date(endDate).getTime() - new Date(startDate).getTime()
            : 0

    let days = time / (1000 * 3600 * 24) + 1

    let daysDiscount = 0

    if (days >= 3) {
        daysDiscount = 5
    }
    if (days >= 7) {
        daysDiscount = 10
    }
    if (days >= 28) {
        daysDiscount = 15
    }

    useEffect(() => {
        fetch(`${URL}/user`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setUser(res)
            })
    }, [])

    const handleDateChange = (e: any) => {
        setError('')
        if (e.target.name === 'start') {
            setStartDate(e.target.value)
        } else if (e.target.name === 'end') {
            setEndDate(e.target.value)
        }
    }

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
        if (!startDate || !endDate) {
            setError('Будь-ласка вкажіть дату початку і кінця')
        } else {
            fetch(`${URL}/booking`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    start_rent: startDate,
                    end_rent: endDate,
                    preferences: [],
                    car,
                    end_price: car.price + checkedAmount,
                }),
            }).then(() => onClose())
        }
    }

    const finalPrice = car.price * days + checkedAmount

    const allDiscount = (user?.discount || 0) + daysDiscount
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
                        <input
                            onChange={handleDateChange}
                            name={'start'}
                            type={'date'}
                        />
                    </label>
                    <label>
                        Кінець оренди
                        <input
                            onChange={handleDateChange}
                            name={'end'}
                            type={'date'}
                        />
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
                {allDiscount ? (
                    <p className={styles.discount}>
                        Вам нарахована знижка у розмірі {allDiscount}%
                    </p>
                ) : null}
                {allDiscount ? (
                    <span className={styles.discountPrice}>{finalPrice}₴</span>
                ) : null}
                <p className={styles.price}>
                    Остаточна ціна
                    {days >= 1 ? (
                        <span>
                            {!allDiscount
                                ? finalPrice
                                : finalPrice - (finalPrice / 100) * allDiscount}
                            ₴
                        </span>
                    ) : null}
                </p>
                )
                <button
                    onClick={handleClick}
                    className={carStyles.button}
                    type={'button'}
                >
                    БРОНЮВАННЯ
                </button>
                {error && <p className={styles.error}>{error}</p>}
            </div>
        </div>
    )
}
