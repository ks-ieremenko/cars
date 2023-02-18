import React from 'react'
import styles from './ValuesList.module.css'
import { statistics } from './constants'
import { PieChart } from './PieChart/PieChart'

export const ValuesList = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>За що нас цінують</h2>
            <p>
                Показані нижче дані є узагальненими результатами опитування, яке
                було проведене нами серед 198 нових клієнтів.
            </p>
            <div className={styles.pieChartContainer}>
                {statistics.map((statistic) => (
                    <div className={styles.pieChart}>
                        <PieChart statistic={statistic} />
                        <p>{statistic.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
