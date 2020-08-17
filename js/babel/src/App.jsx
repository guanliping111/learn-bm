import React from 'react';
import styles from './style.css';

export default function() {
    return(
        <div 
            // className="swiper-container"
            className={styles['swiper-container']}
        >
            this is app
            <img src="/1.jpg" alt="图片加载出错"/>
        </div>
    )
}