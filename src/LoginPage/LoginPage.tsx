import React, { useState } from 'react'

import styles from './LoginPage.module.css'
import { loginInputFields, registrationInputFields } from './constants'

import { URL } from '../globalConstants'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        phone: '',
        password: '',
    })
    const [registrationData, setRegistrationData] = useState({
        first_name: '',
        surname: '',
        password: '',
        phone: '',
        address: '',
        role: 'CUSTOMER',
    })

    const navigate = useNavigate()

    const handleLoginDataChange = (e: any) => {
        setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleRegistrationDataChange = (e: any) => {
        setRegistrationData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleLogin = () => {
        fetch(`${URL}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem('token', res.accessToken)
                navigate('/profile')
            })
    }

    const handleRegister = () => {
        fetch(`${URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
        })
            .then((res) => res.json())
            .then((res) => {
                fetch(`${URL}/signin`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        phone: res.phone,
                        password: registrationData.password,
                    }),
                })
                    .then((res) => res.json())
                    .then((res) => {
                        localStorage.setItem('token', res.accessToken)
                        navigate('/profile')
                    })
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.register}>
                <h2>Реєстрація</h2>
                <form>
                    {registrationInputFields.map((item) => (
                        <div>
                            <label>{item.label}</label>
                            <input
                                key={item.name}
                                type={item.type}
                                name={item.name}
                                onChange={handleRegistrationDataChange}
                            />
                        </div>
                    ))}
                    <button type={'button'} onClick={handleRegister}>
                        Зареєструватися
                    </button>
                </form>
            </div>
            <div className={styles.login}>
                <h2>Вхід</h2>
                <form>
                    {loginInputFields.map((item) => (
                        <div key={item.name}>
                            <label>{item.label}</label>
                            <input
                                key={item.name}
                                type={item.type}
                                name={item.name}
                                onChange={handleLoginDataChange}
                            />
                        </div>
                    ))}
                    <button type={'button'} onClick={handleLogin}>
                        Увійти
                    </button>
                </form>
            </div>
        </div>
    )
}
