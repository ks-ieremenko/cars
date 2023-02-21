import React from 'react'
import { Link } from './Link/Link'
import { ReactComponent as Logo } from '../media/logo.svg'
import { ReactComponent as Calendar } from '../media/calendar.svg'
import { ReactComponent as Phone } from '../media/phone.svg'
import { ReactComponent as Mail } from '../media/mail.svg'
import { ReactComponent as Nav } from '../media/nav.svg'
import { ReactComponent as User } from '../media/user.svg'

import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

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
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.link
                        }
                        to={'/profile'}
                    >
                        Особистий кабінет
                    </NavLink>
                </div>
            </div>

            <div className={styles.container}>
                <Link to={'/'}>
                    <Logo className={styles.logo} />
                </Link>
                <Link to={'/'}>ГОЛОВНА</Link>
                <Link to={'/list'}>КАТАЛОГ</Link>
                <Link to={'/info'}>УМОВИ ОРЕНДИ</Link>
            </div>
        </div>
    )
}
