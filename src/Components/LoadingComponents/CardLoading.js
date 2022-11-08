import React from 'react';
import styled from './CardLoading.module.scss';

const CardLoading = () => {
    return (
            <div className={styled.card}>
                <div className={styled.loading}>
                </div>

                <div className={styled.textContainer}>
                    <p className={styled.loading}></p>
                    <span className={styled.loading}></span>
                    <span className={styled.loading}></span>
                </div>

            </div>
    );
};

export default CardLoading;