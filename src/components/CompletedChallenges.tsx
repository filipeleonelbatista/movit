import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallagesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challegesCompleted } = useContext(ChallengesContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challegesCompleted}</span>
        </div>
    );
}