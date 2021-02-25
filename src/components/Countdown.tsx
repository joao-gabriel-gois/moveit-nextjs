import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteDozen, minuteUnity] = String(minutes).padStart(2, '0').split('');
  const [secondDozen, secondUnity] = String(seconds).padStart(2, '0').split('');
  
  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteDozen}</span>
          <span>{minuteUnity}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondDozen}</span>
          <span>{secondUnity}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  )
}