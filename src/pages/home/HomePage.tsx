import React from 'react';
import styles from './HomePage.module.css';
import { PianoProduct } from '../../types/PianoProduct';


const HomePage: React.FC = () => {
    const featuredProducts: PianoProduct[] = [
        {
            id: 1,
            name: '그랜드 피아노 G-500',
            brand: 'Steinway',
            price: 15000000,
            image: '/api/placeholder/300/200',
            category: 'grand-pianos'
        },
        {
            id: 2,
            name: '업라이트 피아노 U-300',
            brand: 'Yamaha',
            price: 7500000,
            image: '/api/placeholder/300/200',
            category: 'upright-pianos'
        },
        {
            id: 3,
            name: '디지털 피아노 DP-100',
            brand: 'Roland',
            price: 2800000,
            image: '/api/placeholder/300/200',
            category: 'digital-pianos'
        },
    ];

    return (
        <div className={styles.homePage}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>당신의 음악적 여정을 함께할 최고의 피아노</h1>
                    <p>전 세계 최고 브랜드의 엄선된 피아노 컬렉션을 만나보세요</p>
                    <button className={styles.ctaButton}>둘러보기</button>
                </div>
            </section>

            <section className={styles.featuredProducts}>
                <h2>인기 상품</h2>
                <div className={styles.productGrid}>
                    {featuredProducts.map(product => (
                        <div key={product.id} className={styles.productCard}>
                            <div className={styles.productImage}>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className={styles.productInfo}>
                                <h3>{product.name}</h3>
                                <p className={styles.brand}>{product.brand}</p>
                                <p className={styles.price}>{product.price.toLocaleString()}원</p>
                                <button className={styles.addToCart}>장바구니에 추가</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.brandSection}>
                <h2>세계적인 피아노 브랜드</h2>
                <div className={styles.brandLogos}>
                    <div className={styles.brandLogo}>Steinway & Sons</div>
                    <div className={styles.brandLogo}>Yamaha</div>
                    <div className={styles.brandLogo}>Kawai</div>
                    <div className={styles.brandLogo}>Bösendorfer</div>
                    <div className={styles.brandLogo}>Fazioli</div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;