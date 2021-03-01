import { useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {

    const {
        seconds,
        minutes,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {
                hasFinished ? (
                    <button disabled type="button" className={styles.countdownButton}>
                        Ciclo encerrado
                        <img src="icons/check_circle.svg" alt="Check Circle" />
                    </button>
                )
                    : (
                        <>
                            {
                                isActive
                                    ? (
                                        <button type="button" onClick={resetCountdown} className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                            Abandonar ciclo
                                            <img src="icons/close.svg" alt="Check Circle" />
                                        </button>
                                    )
                                    : (
                                        <button type="button" onClick={startCountdown} className={styles.countdownButton}>
                                            Iniciar um ciclo
                                        </button>
                                    )
                            }
                        </>
                    )
            }

        </div>
    );
}