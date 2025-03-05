import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">Venepiano</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li><Link to="/grand-pianos">그랜드 피아노</Link></li>
                    <li><Link to="/upright-pianos">업라이트 피아노</Link></li>
                    <li><Link to="/digital-pianos">디지털 피아노</Link></li>
                    <li><Link to="/accessories">악세서리</Link></li>
                </ul>
            </nav>
            <div className={styles.userActions}>
                <Link to="/search" className={styles.iconButton}>🔍</Link>
                <Link to="/cart" className={styles.iconButton}>🛒</Link>
                <Link to="/account" className={styles.iconButton}>👤</Link>
            </div>
        </header>
    );
}

export default Header;