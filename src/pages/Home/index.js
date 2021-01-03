import React, {useState} from 'react';


import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';
import { HiArrowRight } from 'react-icons/hi';

import RecentGames from './RecentGames';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

//<Link to="BetArea">NEW BET</Link>

const Home = ({betSaved, types}) => {

    const [renderType, setRenderType] = useState('');

    const switchGame = (value) => {
        if(value === renderType){
            setRenderType('');
            return;
        }
        setRenderType(value);
    }

    return (

        <div className={styles.Screen}>
            
            <div>
                <Header/>
                <div className={styles.AreaControls}>
                    <div className={styles.AreaBtnControls}>
                        <span className={styles.TitleRecentGames}>RECENT GAMES</span>
                        <div className={styles.AreaBtnSelectors}>
                            <span>Filters</span>
                            {types.map((item, index) => (
                                <button
                                key={item.type}
                                onClick={() => switchGame(item.type)}
                                style={renderType === item.type ?
                                        {background: item.color, borderColor: item.color, color: '#FFFFFF'} :
                                        {borderColor: item.color, color: item.color}}
                                >{item.type}</button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.BtnNewBet}>
                        <Link to="BetArea"><span>NEW BET</span></Link>
                        <HiArrowRight size={25} color="#B5C401"/>
                    </div>
                </div>

                <div className={styles.AreaGames}>
                    {renderType === '' ?
                        <div>
                            {betSaved.map((item, index) => (
                                <RecentGames
                                    key={index}
                                    bet={item.bet}
                                    date={item.date}
                                    price={item.price}
                                    type={item.type}
                                    color={item.color}
                                />
                            ))}
                        </div>
                        :
                        <div>
                            {betSaved.map((item, index) => (
                                item.type === renderType ? 
                                    <RecentGames
                                        key={index}
                                        bet={item.bet}
                                        date={item.date}
                                        price={item.price}
                                        type={item.type}
                                        color={item.color}
                                    />  : null
                            ))}
                        </div>
                    }
                </div>
            
            </div>



            {/* <div>
                {renderType === '' ?
                    <div>
                        {betSaved.map((item, index) => (
                            <RecentGames
                                key={index}
                                bet={item.bet}
                                date={item.date}
                                price={item.price}
                                type={item.type}
                                color={item.color}
                            />
                        ))}
                    </div>
                    :
                    <div>
                        {betSaved.map((item, index) => (
                            item.type === renderType ? 
                                <RecentGames
                                    key={index}
                                    bet={item.bet}
                                    date={item.date}
                                    price={item.price}
                                    type={item.type}
                                    color={item.color}
                                />  : null
                        ))}
                    </div>
                }
            </div> */}

            <Footer/>
                
        </div>
    )
}

const mapStateToProps = (state) => ({
    betSaved: state.betSaved,
    types: state.types
})

export default connect(mapStateToProps)(Home);