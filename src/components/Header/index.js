import React, {useState} from 'react';

import { resetBets } from '../../reducers/betsDone/action-creator';
import { removeAllCart } from '../../reducers/cart/action-creator';
import { resetType } from '../../reducers/selectTypeGame/action-creator';

import { Link, Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { HiArrowRight } from 'react-icons/hi';
import styles from './Header.module.css';

const Header = () => {

    const dispatch = useDispatch();
    const[redirect, setRedirect] = useState();

    const handleLogOut = () =>{
        dispatch(resetBets());
        dispatch(removeAllCart());
        dispatch(resetType());
        setRedirect(!redirect);
    }

    return(
        <div>
            {!redirect ?
            <div className={styles.Container}>
                <div className={styles.areaMenu}>
                    <div className={styles.AreaBtnHome}>
                        <div>
                            <span className={styles.Logo}>TGL</span>
                            <div style={{border: '3px solid red', borderRadius: '6px', borderColor: '#B5C401'}}></div>
                        </div>

                        <div>
                            <Link to="Home">HOME</Link>
                        </div>
                    </div>

                    <div className={styles.AreaBtn}>
                        <div>
                            <p>Account</p>
                        </div>

                        <div className={styles.BtnSair}>
                            <a onClick={() => handleLogOut()}>Sair</a>
                            <HiArrowRight size={25} color="#707070"/>
                        </div>
                    </div>
                </div>
            </div> : <Redirect to="/"/>
            }
        </div>
    )
}

export default Header;