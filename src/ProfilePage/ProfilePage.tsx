import React, { useEffect } from 'react'
import cn from 'classnames'
import styles from './ProfilePage.module.css'
import { URL } from '../globalConstants'

export const ProfilePage = () => {
    useEffect(() => {
        fetch(`${URL}/user`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        }).then((res) => res.json())
    }, [])
    return (
        <div className={styles.container}>
            <h2>Особистий кабінет</h2>

            <div className={styles.profile}>
                <h3>Мозгова Владислава</h3>
                <div className={styles.info}>
                    <p>Номер телефону</p>
                    <p>84753988759384</p>
                </div>
                <div className={styles.info}>
                    <p>Адреса проживання</p>
                    <p>ldsjbvkjsbd</p>
                </div>
                <div className={styles.footer}>
                    <div className={cn(styles.info, styles.discount)}>
                        <p>Ваша знижка становить</p>
                        <p>0%</p>
                    </div>
                    <div className={cn(styles.info, styles.discount)}>
                        <p>Наразі ви маєте штраф у розмірі </p>
                        <p>0₴</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
