import React from 'react'
import styles from './PieChart.module.css'
import { Statisics } from '../types'

type PieChartProps = {
    statistic: Statisics
}

export const PieChart = ({ statistic }: PieChartProps) => {
    const percentage = (statistic.percent - 4) / 100
    let size = 140

    if (window.innerWidth < 800) {
        size = 100
    }
    if (window.innerWidth < 400) {
        size = 70
    }

    const chartRadius = size / 2
    const chartStrokeWidth = window.innerWidth ? 2 : 4
    const chartCircumference = 2 * Math.PI * chartRadius
    const strokeDasharray = chartCircumference * percentage
    return (
        <div key={statistic.title} className={styles.pieChart}>
            <svg width={size} height={size}>
                <circle
                    cx={chartRadius}
                    cy={chartRadius}
                    r={chartRadius - chartStrokeWidth / 2}
                    stroke="#DADADA"
                    strokeWidth={chartStrokeWidth}
                    fill="none"
                />
                <circle
                    cx={chartRadius}
                    cy={chartRadius}
                    r={chartRadius - chartStrokeWidth / 2}
                    stroke="#709583"
                    strokeWidth={chartStrokeWidth}
                    fill="none"
                    strokeDasharray={`${strokeDasharray} ${chartCircumference}`}
                    strokeLinecap="round"
                    transform={`rotate(-90) translate(-${size})`}
                />
                <text
                    x={chartRadius}
                    y={chartRadius}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={styles.percent}
                    style={{ fontSize: size / 4 }}
                >
                    {statistic.percent}%
                </text>
            </svg>
        </div>
    )
}
