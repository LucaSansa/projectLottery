import React from 'react';
import Label from '../../components/Label';
import Registration from '../../components/Registration';

import Footer from '../../components/Footer';

import styles from './Register.module.css';
import { HiArrowLeft } from 'react-icons/hi';

import { Link } from 'react-router-dom';

const Register = () => (
    <div className={styles.Screen}>
        <div className={styles.Container}>

            <div className={styles.Label}>
                <Label/>
            </div>

            <div className={styles.Registration}>
                <p>Registration</p>
                <Registration/>
                <div className={styles.AreaBtnBack}>
                    <HiArrowLeft size={25} color="#707070"/>
                    <Link to="/">Back</Link>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
)

export default Register;