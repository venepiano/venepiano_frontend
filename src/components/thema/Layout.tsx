
import { Outlet } from 'react-router-dom'; import React from 'react';
import styles from './Layout.module.css';
import Header from './Header';
import PianoKeyboard from './PianoKeyboard';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.content}>
                <PianoKeyboard />
                <div className={styles.pageContent}>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;