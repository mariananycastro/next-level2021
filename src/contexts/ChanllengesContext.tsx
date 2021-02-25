import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';
// reactNode aceita qualquer elemento filho

// type ou interface
interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  activeChallenge: Challenge;
  challengesCompleted: number;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


// importo para toda a aplicação, portanto coloco no arquivo _app
export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null);

  useEffect(() => {
    Notification.requestPermission();
    // permissão para mostrar notificação, 'granted' ou não 
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallegenIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallegenIndex];

    setActiveChallenge(challenge);

    // new Audio('nomearquivo').play(); se tiver na pasta public posso só colocar /nomearquivo.mp3

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: 'Valendo ...xp'
        // mdn notification https://developer.mozilla.org/pt-BR/docs/Web/API/notificacoes
      })
    }
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
      }}>
      {children}
    </ ChallengesContext.Provider>
  );
}
