import React from 'react';
import styles from './RecentGames.module.css';

const RecentGames = (props) => {
    return(
        <div className={styles.Container} style={{borderLeft: `5px solid ${props.color}`}}>
            <p className={styles.Bet}>{props.bet}</p>
            <p className={styles.DatePrice}>{props.date} - (R$ { props.price.toFixed(2)})</p>
            <p className={styles.Type} style={{color: props.color}}>{props.type}</p>
        </div>
    )
}

export default RecentGames;