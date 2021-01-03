import React, {useState, useEffect} from 'react';

import {useDispatch} from 'react-redux';
import {addGame} from '../../reducers/cart/action-creator';

import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from './HudGame.module.css';


const HudGame = ({description, range, type, color, price, maxnumber}) => {

    const dispatch = useDispatch();
    const [buttons, setButtons] = useState([]);
    const [game, setGame] = useState([]);
    const [games, setGames] = useState([]);

    useEffect(() => {
        for(let i = 1; i <= range; i++){
            setButtons(buttons => [...buttons, i]);
        }
    },[]);

    const convert = (value) => {
        let number = value;
        if(value < 10){
            number.toString();
            number = `0${number}`;
            return number;
        }
        number = number.toString();
        return number;
    }

    const handleClick = (value, maxnumber) => {
        if(game.length >= maxnumber || game.includes(value)){
            return;
        }
        setGame(numbers => [...numbers, value]);
        setGames(numbers => [...numbers, value]);
    }

    const getRandom = (min, max) => {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        if(random < 10){
            random.toString();
            random = `0${random}`;
            return random;
        }
        return random.toString();
    }

    const completeGame = () => {
        let arr = [];
        game.map((item) => {
            arr.push(item);
        })
        if(game.length < maxnumber){
            var tam = maxnumber - game.length;
            for(var i = 0; i < tam; i++){
                let aux = getRandom(1, range);
                while(arr.indexOf(aux) > -1){
                    aux = getRandom(1, range);
                }
                arr.push(aux);
            }
            setGame(arr);
            setGames(arr);
        }
    }

    const clearHud = () =>{
        setGame([]);
        setGames([]);
    }

    const handleGame = () =>{
        if(games.length === 0 || games.length < maxnumber){
            return;
        }
        setGame([]);
        dispatch(addGame({
            bet: games.toString(),
            type: type,
            color: color,
            price: price,
            id: new Date().getUTCMilliseconds(),
            date: new Date().toLocaleDateString()
        }));
        setGames([]);
    }


    return(
        <div className={styles.Container}>

            <span className={styles.Title}>Fill your bet</span>
            <p className={styles.Description}>{description}</p>

            {buttons.map((item, index) => {
                let convertedNumber = convert(item);
                return <button
                        className={styles.ButtonNumber}
                        key={index}
                        onClick={() => handleClick(convertedNumber, maxnumber)}
                        style={game.includes(convertedNumber) ? {background: color} : {}}
                        >{convertedNumber}</button>
            })}
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 30, marginTop: 20}}>

                <div className={styles.ButtonsControl}>
                    <button onClick={() => completeGame()}>Complete Game</button>
                    <button onClick={() => clearHud()}>Clear game</button>
                </div>

                <div className={styles.ButtonAddGame}>
                    <button onClick={() => handleGame()}>
                        <div className={styles.ButtonCart}>
                            <AiOutlineShoppingCart size={25}/>
                            <span>Add to cart</span>
                        </div>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default HudGame;