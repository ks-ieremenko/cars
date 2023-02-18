import React from 'react'
import styles from './Advantages.module.css'
import { advantagesList } from './constants'

export const Advantages = () => {
    return (
        <div>
            <h3 className={styles.title}>Наші переваги</h3>
            <p>
                У питаннях співпраці з клієнтом ми дотримуємося принципів
                партнерства, що забезпечує масу переваг. Укладаючи договір на
                прокат авто з нашою компанією, ви можете бути впевнені, що:
            </p>
            <br />
            <ul className={styles.list}>
                {advantagesList.map((item: any) => (
                    <li>{item}</li>
                ))}
            </ul>
            <br />
            <p>
                Оренда автомобіля в Rent Car – це вигідно, комфортно та
                безпечно. Спробуйте й переконайтеся самі!
            </p>
        </div>
    )
}
