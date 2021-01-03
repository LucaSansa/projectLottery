import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';

import { removeAllCart, removeGame } from '../../reducers/cart/action-creator';
import {addBets} from '../../reducers/betsDone/action-creator';

import styles from './Cart.module.css';
import {IoTrashOutline} from 'react-icons/io5';
import { HiArrowRight } from 'react-icons/hi';



const Cart = ({gamesInCart}) => {
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        let price = gamesInCart.reduce((acc, atual) => {
            return acc + atual.price
        }, 0);

        setTotalPrice(price);
    }, [gamesInCart]);

    const handleSave = (item) =>{
        if(item.length === 0){
            return;
        }
        item.map((value) =>{
            dispatch(addBets(value));
        })
        dispatch(removeAllCart());
        setRedirect(!redirect);
    }


    return(
        <div>
            { !redirect ?
            <div className={styles.Container}>

                <p className={styles.TitlePrice}>CART</p>
                {gamesInCart.map((item, index) => (
                    <div key={index} className={styles.ContainerBet}>
                        <IoTrashOutline style={{cursor: 'pointer'}} onClick={() => dispatch(removeGame(item.id))} size={30} color="#888888"/>

                        <div className={styles.Bet} style={{borderLeft: `4px solid ${item.color}`}}>
                            <p className={styles.BetGame}>{item.bet}</p>
                            <p style={{color: item.color}}>{item.type} <span>R${item.price.toFixed(2)}</span></p>
                        </div>

                    </div>
                ))}

                <div>
                    <p className={styles.TitlePrice}>CART <span>TOTAL: R${totalPrice.toFixed(2)}</span></p>
                </div>
                
                <div className={styles.AreaSave}>
                    <div className={styles.AreaBtnSave}>
                        <button onClick={() => handleSave(gamesInCart)}>Save</button>
                        <HiArrowRight size={25} color="#27C383"/>
                    </div>
                </div>

            </div> : <Redirect to="Home"/>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    gamesInCart: state.gamesInCart,

})

export default connect(mapStateToProps)(Cart);