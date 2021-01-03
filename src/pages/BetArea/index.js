import React, {useState, useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import {selectType} from '../../reducers/selectTypeGame/action-creator';


import SelectorButtons from './SelectorButtons';
import HudGame from '../../components/HudGame';

import styles from './BetArea.module.css';

import Cart from '../../components/Cart';

import Footer from '../../components/Footer';

import Header from '../../components/Header';

const BetArea = ({types}) => {

    const dispatch = useDispatch();
    
    const handleType = (value) => {
        dispatch(selectType(value));
    }

    return(
        <div className={styles.Screen}>
            <Header/>
            <div className={styles.Container}>

                <div>

                    <div>
                        {types.map((item) => (
                            item.active && <p key={item.type} className={styles.TitleGame}>NEW BET <span>for {item.type}</span></p>
                        ))}
                        <p className={styles.ChooseGame}>Choose a game</p>
                    </div>

                    <div className={styles.AreaBtn}>
                        {types.map((item) => (
                            <SelectorButtons
                                key={item.type}
                                title={item.type}
                                color={item.color}
                                active={item.active}
                                onClick={() => handleType(item.type)}
                            />
                        ))}
                    </div>

                    <div>
                        {types.map((item) => (
                            item.active ? <HudGame key={item.type} description={item.description} type={item.type} range={item.range} color={item.color} maxnumber={item.maxnumber} price={item.price}/> : null
                        ))}
                    </div>

                </div>

                <div>
                    <Cart/>
                </div>

            </div>
            
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    types: state.types
})

export default connect(mapStateToProps)(BetArea);