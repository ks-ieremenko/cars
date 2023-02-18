import React from 'react'
import styles from './PieChart.module.css'
import { Statisics } from '../types'

type PieChartProps = {
    statistic: Statisics
}

const chartSize = 140
const chartRadius = chartSize / 2
const chartStrokeWidth = 4
const chartCircumference = 2 * Math.PI * chartRadius

export const PieChart = ({ statistic }: PieChartProps) => {
    const percentage = (statistic.percent - 4) / 100
    const strokeDasharray = chartCircumference * percentage

    return (
        <div key={statistic.title} className={styles.pieChart}>
            <svg width={chartSize} height={chartSize}>
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
                    transform={`rotate(-90) translate(-${chartSize})`}
                />
                <text
                    x={chartRadius}
                    y={chartRadius}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={styles.percent}
                >
                    {statistic.percent}%
                </text>
            </svg>
        </div>
    )
}
