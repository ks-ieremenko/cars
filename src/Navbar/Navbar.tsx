import React from 'react'
import { Link } from './Link/Link'
import { ReactComponent as Logo } from '../media/logo.svg'
import { ReactComponent as Calendar } from '../media/calendar.svg'
import { ReactComponent as Phone } from '../media/phone.svg'
import { ReactComponent as Mail } from '../media/mail.svg'
import { ReactComponent as Nav } from '../media/nav.svg'
import { ReactComponent as User } from '../media/user.svg'

import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div>
            <div className={styles.blackNav}>
                <div>
                    <Calendar />
                    <p>Пн-Нд: 8:00-22:00</p>
                </div>
                <div>
                    <Phone />
                    <p>+380665695200</p>
                </div>

                <div>
                    <Mail />
                    <a href={'mailto:rentcar@gmail.com'}>rentcar@gmail.com</a>
                </div>

                <div>
                    <Nav />
                    <p>м. Київ, вул. Зернова, 28</p>
                </div>

                <div className={styles.personal}>
                    <User />
                    <p>Особистий кабінет</p>
                </div>
            </div>

            <div className={styles.container}>
                <Logo className={styles.logo} />
                <Link to={'/'} title={'Головна'} />
                <Link to={'/list'} title={'Каталог'} />
                <Link to={'/info'} title={'Умови оренди'} />
            </div>
        </div>
    )
}