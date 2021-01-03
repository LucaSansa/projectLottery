import React from 'react';
import Label from '../../components/Label';
import Auth from '../../components/Auth';
import Footer from '../../components/Footer';

import styles from './Login.module.css';
import { HiArrowRight } from 'react-icons/hi';

import { Link } from 'react-router-dom';

const Login = () => (


<div className={styles.Screen}>
    <div className={styles.Container}>

        <div>
            <Label/>
        </div>

        <div className={styles.Auth}>
            <p>Authentication</p>
            <Auth/>
            <div className={styles.AreaBtnSignUp}>
                <Link to="Register">Sign Up</Link>
                <HiArrowRight size={25} color="#707070"/>
            </div>
        </div>

    </div>
    <Footer/>
</div>




         

    

)

export default Login;