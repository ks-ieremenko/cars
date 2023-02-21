import React from 'react'
import Car1 from '../media/car1.png'
import Car2 from '../media/car2.png'
import Car3 from '../media/car3.png'

import styles from './InfoPage.module.css'
import { conditions } from './constants'
import { NavLink } from 'react-router-dom'

export const InfoPage = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Умови оренди</h1>
                <div className={styles.carContainer}>
                    <div>
                        <img src={Car1} alt={''} />
                    </div>
                    <div>
                        <p>
                            Хочете взяти авто в оренду, але лякає складність
                            процедури? У RentCar все просто! Щоб орендувати
                            машину вам необхідно зробити лише кілька простих
                            кроків, кожен з яких ми описали нижче:
                        </p>
                        <ol>
                            <li>
                                Вибір автомобіля: на нашому сайті ви можете
                                знайти велику кількість автомобілів та обрати
                                будь-яке авто залежно від цілей: для туризму,
                                поїдок містом або ж для бізнес потреб. Підібрати
                                автомобіль ви можете у{' '}
                                <NavLink to={'/list'} className={styles.link}>
                                    Каталозі
                                </NavLink>
                                .
                            </li>
                            <li>
                                Надання документів та укладання договору: після
                                того, як ви визначилися з автівкою, відправте
                                нам на емейл або надайте особисто у нашому офісі
                                документи, необхідні для оренди (перелік зможете
                                знайти нижче). Після перевірки документів, ми
                                укладемо договір на оренду вибраного вами
                                автомобіля.
                            </li>
                            <li>
                                Оплата: здійсніть оплату згідно договору та
                                вирушайте по справах на автомобілях RentCar.
                            </li>
                        </ol>
                        <br />
                        <p>
                            Щоб орендувати машину, вам потрібні лише два
                            документи:
                        </p>
                        <ul>
                            <li>Паспорт або ID картку;</li>
                            <li>Посвідчення водія категорії;</li>
                        </ul>
                        <br />
                        <p>
                            Ви можете надати документи особисто у нашому офісі.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Оплата за оренду автомобіля</h1>
                <div className={styles.carContainer}>
                    <div>
                        <p>
                            Як ви уже знаєте, після укладання договору на
                            оренду, потрібно здійснити оплату з авто. Оплатити
                            оренду автомобіля ви можете будь-яким зручним
                            способом:
                        </p>
                        <ul>
                            <li>Готівкою;</li>
                            <li>
                                Безготівково за допомогою картки
                                Visa/MasterCard.
                            </li>
                        </ul>
                        <p>
                            Оплата здійснюється за весь період користування
                            автомобілем. <br />
                            Також необхідно буде залишити завдаток у розмірі 15
                            000 гривень. Після закінчення терміну оренди ми
                            повертаємо завдаток у повному розмірі, окрім
                            порушень, за які можна начислити штраф. <br />
                            <br />
                            Після здачі орендованої машини проводиться перевірка
                            спеціалістом. В разі виявлення порушень вам буде
                            надано звіт з описом порушень та фото.
                            <br />
                            <br /> Штраф буде начислено в ваш особистий кабінет.
                        </p>
                    </div>
                    <div>
                        <img src={Car2} alt={''} />
                    </div>
                </div>
            </div>
            <div>
                <h1>Загальні умови і процедура видачі авто</h1>
                <div className={styles.carContainer}>
                    <div>
                        <img src={Car3} alt={''} />
                    </div>
                    <div>
                        <p>
                            Як ви уже знаєте, після укладання договору на
                            оренду, потрібно здійснити оплату з авто. Оплатити
                            оренду автомобіля ви можете будь-яким зручним
                            способом:
                        </p>
                        <ul>
                            {conditions.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
