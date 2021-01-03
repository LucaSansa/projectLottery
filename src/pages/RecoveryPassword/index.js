import React from 'react';
import Label from '../../components/Label';
import RecoveryPass from '../../components/RecoveryPass';

import Footer from '../../components/Footer';

import styles from './RecoveryPassword.module.css';
import { HiArrowLeft } from 'react-icons/hi';

import { Link } from 'react-router-dom';

const RecoveryPassword = () => (
    <div className={styles.Screen}>
        <div className={styles.Container}>
            
            <div className={styles.Label}>
                <Label/>
            </div>

            <div className={styles.RecoveryPass}>
                <p>Reset password</p>
                <RecoveryPass/>
                <div className={styles.AreaBtnBack}>
                    <HiArrowLeft size={25} color="#707070"/>
                    <Link to="/">Back</Link>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
)

export default RecoveryPassword;