import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.css'

type LinkProps = {
    to: string
    children?: React.ReactNode
}

export const Link = (props: LinkProps) => {
    const { to, children } = props

    const activeStyle = {
        textDecoration: 'underline',
        color: '#709583',
    }

    return (
        <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={to}
            className={styles.link}
        >
            {children}
        </NavLink>
    )
}
