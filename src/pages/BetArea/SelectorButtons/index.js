import React from 'react';
import styles from './SelectorButtons.module.css';

const SelectorButtons = (props) => {
    return(
        <div>
            {props.active ? 
                <button
                    className={styles.Buttons}
                    onClick={props.onClick}
                    style={{background: props.color, borderColor: props.color, color: '#FFFFFF'}}
                >
                    {props.title}
                </button> :
                
                <button
                    className={styles.Buttons}
                    onClick={props.onClick}
                    style={{color: props.color}}
                >
                    {props.title}
                </button>
                
            }
        </div>
    )
}

export default SelectorButtons;