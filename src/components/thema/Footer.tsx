import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <h3>고객 서비스</h3>
                <ul>
                    <li>자주 묻는 질문</li>
                    <li>배송 정보</li>
                    <li>반품 및 환불</li>
                    <li>yezyaa</li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h3>회사 정보</h3>
                <ul>
                    <li>회사 소개</li>
                    <li>매장 안내</li>
                    <li>채용 정보</li>
                    <li>제휴 문의</li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h3>소셜 미디어</h3>
                <div className={styles.socialIcons}>
                    <span>📱</span>
                    <span>📘</span>
                    <span>📸</span>
                    <span>🐦</span>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© 2025 Venepiano. All rights reserved.</p>
                <p>개인정보처리방침 | 이용약관</p>
            </div>
        </footer>
    );
};

export default Footer;