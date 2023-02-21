import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './ProfilePage.module.css'
import { URL } from '../globalConstants'
import carStyles from '../CarListPage/Car/Car.module.css'
import { useNavigate } from 'react-router-dom'

type User = {
    address: string
    surname: string
    phone: string
    first_name: string
    discount: number
    forfeit: number
}

export const ProfilePage = () => {
    const [user, setUser] = useState<User>()
    const [history, setHistory] = useState<any>()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${URL}/user`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    navigate('/login')
                }
                setUser(res)
            })

        fetch(`${URL}/history`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setHistory(res)
            })
    }, [navigate])

    if (!user || !history) {
        return null
    }

    console.log(history)

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    console.log(user)
    return (
        <div className={styles.container}>
            <h2>Особистий кабінет</h2>
            <div>
                <div className={styles.profile}>
                    <h3>
                        {user.surname} {user.first_name}
                    </h3>
                    <div className={styles.info}>
                        <p>Номер телефону</p>
                        <p>{user.phone}</p>
                    </div>
                    <div className={styles.info}>
                        <p>Адреса проживання</p>
                        <p>{user.address}</p>
                    </div>
                    <div className={styles.footer}>
                        <div className={cn(styles.info, styles.discount)}>
                            <p>Ваша знижка становить</p>
                            <p>{user.discount}%</p>
                        </div>
                        <div className={cn(styles.info, styles.discount)}>
                            <p>Наразі ви маєте штраф у розмірі </p>
                            <p>{user.forfeit}₴</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className={cn(carStyles.button, styles.button)}
                        >
                            Вийти з акаунту
                        </button>
                    </div>
                </div>
                <div className={styles.history}>
                    <h3>Історія оренди автомобілей</h3>
                    <div>
                        {history.length ? (
                            history.map((item: any) => {
                                console.log(item.car.image)
                                return (
                                    <div className={styles.carContainer}>
                                        <img src={item.car.image} />
                                        <div>
                                            <div>
                                                <p>Модель автомобіля</p>
                                                <p>
                                                    {item.car.brand}{' '}
                                                    {item.car.name}{' '}
                                                    {item.car.year}
                                                </p>
                                            </div>
                                            <div>
                                                <p>Дата початку оренди</p>
                                                <p>{item.start_rent}</p>
                                            </div>
                                            <div>
                                                <p>Дата кінця оренди</p>
                                                <p>{item.end_rent}</p>
                                            </div>
                                            <div>
                                                <p>Вартість</p>
                                                <p>{item.end_price}₴</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <p className={styles.noCars}>
                                На жаль, історія відсутня на даний момент. Але
                                ми чекаємо на вашу оренду!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
