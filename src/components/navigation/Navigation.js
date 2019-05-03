import React from 'react';
import styles from './Navigator.module.css'
import { Link } from 'react-router-dom'

const Navigation = ({ isAuthenticated }) => (
    <nav className={styles.navigation}>
        {!isAuthenticated && <Link className={styles.link} to="/login">Login</Link>}
        <Link className={styles.link} to="/home">Home</Link>
        <Link className={styles.link} to="/about">About</Link>
        {isAuthenticated &&
            <>
                <Link className={styles.link} to="/profile">Profile</Link>
                <Link className={styles.link} to="/logout">Logout</Link>
            </>
        }
    </nav>
);

export default Navigation;