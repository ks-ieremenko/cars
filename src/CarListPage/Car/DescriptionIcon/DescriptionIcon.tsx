import React from 'react'
import styles from './DescriptionIcon.module.css'

type DescriptionIconProps = {
    Icon: any
    name: string
}
export const DescriptionIcon = (props: DescriptionIconProps) => {
    const { Icon, name } = props

    return (
        <div className={styles.container}>
            <Icon />
            <span>{name}</span>
        </div>
    )
}
