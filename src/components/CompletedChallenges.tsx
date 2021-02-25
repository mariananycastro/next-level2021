import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChanllengesContext';
import style from '../styles/components/CompletedChallenges.module.css'

let countdownTimeout: NodeJS.Timeout;

export function CompletedChallenges() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
  // transforma em string, tenta separar em dois se nao tiver adiciona '0' no começa
  // e depois separa 
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime(25 * 60);
    // cancela executção de um Timeout
    // se fosse com setInverval, poderia usar um clearInterval 
  }

  useEffect(() => {
    if (active && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (active && time === 0) {
      setHasFinished(true);
      setActive(false);
    }
    // setTimeOut demora 1 segundo para parar, para parar no instante que clico no botao 
    // usar a var countdownTimeout;
  }, [active, time])

  return (
    <div className={style.countdownContainer}>
      <div className={style.completedChallenges}>
        <span> Desafios Completos </span>
        <span> 5 </span>
      </div>
      <div>
        <span>{minutesLeft}</span>
        <span>{minutesRight}</span>
        <span>{secondsLeft}</span>
        <span>{secondsRight}</span>
      </div>
      { hasFinished ? (
        <button disabled className={style.countDownButton}>
          Abandonar
        </button>
      ) : (
          // para utilizar outra condição dentro do ternario preciso colocar dentro de uma outra div
          <>
            {active ? (

              <button type="button" className={`${style.countDownButton} ${style.resetCountdown}`} onClick={resetCountdown}>
                {/* para adicionar duas classes usar interpolação `${primeironome} ${segundonome}`*/}
                Parar count
              </button>
            ) : (
                <button type="button" className={style.countDownButton} onClick={startCountdown}>
                  Iniciar count
                </button>

              )
            }
          </>
        )
      }
    </div >

  )
}
