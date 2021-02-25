import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';
// reactNode aceita qualquer elemento filho

// type ou interface
interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  focopraticagrupo
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: number;
  currentExperience: number;
  activeChallenge: Challenge;
  challengesCompleted: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


// importo para toda a aplicação, portanto coloco no arquivo _app
export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallegenIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallegenIndex];

    setActiveChallenge(challenge);
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
