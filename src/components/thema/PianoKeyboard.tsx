import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PianoKeyboard.module.css';
import { PianoKey } from '@/types/PianoKey';

const PianoKeyboard: React.FC = () => {
    const pianoKeys: PianoKey[] = [
        { id: 'key-1', type: 'white', label: '신상품', link: '/new-arrivals' },
        { id: 'key-2', type: 'black', label: '할인', link: '/sale' },
        { id: 'key-3', type: 'white', label: '베스트셀러', link: '/best-sellers' },
        { id: 'key-4', type: 'black', label: '선물', link: '/gifts' },
        { id: 'key-5', type: 'white', label: '브랜드별', link: '/brands' },
        { id: 'key-6', type: 'white', label: '이벤트', link: '/events' },
        { id: 'key-7', type: 'black', label: 'VIP', link: '/vip' },
        { id: 'key-8', type: 'white', label: '시즌특가', link: '/season-deals' },
        { id: 'key-9', type: 'black', label: '악보', link: '/sheet-music' },
        { id: 'key-10', type: 'white', label: '강의', link: '/lessons' },
    ]

    return (
        <div className={styles.pianoKeyboard}>
            {pianoKeys.map((key) => (
                <Link
                    key={key.id}
                    to={key.link}
                    className={`${styles.pianoKey} ${key.type === 'white' ? styles.whiteKey : styles.blackKey}`}
                >
                    <span className={styles.keyLabel}>{key.label}</span>
                </Link>
            ))}
        </div>
    );
}

export default PianoKeyboard;