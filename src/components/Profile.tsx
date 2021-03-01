import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallagesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/filipeleonelbatista.png" alt="Filipe Batista" />
            <div>
                <strong>Filipe Batista</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}