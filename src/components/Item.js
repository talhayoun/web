import React from 'react';
import Button from './Button';
import Discount from './Discount';
import Heart from './Heart';
import Price from './Price';
import Star from './Star';

const Item = () => {
    return(
        <div className="item">
            <div className="item-img-container">
                <div className="item-img"></div>
                <Heart />
                <Discount />
            </div>
            <div className="item-details-container">
                <div>
                    <Star />
                    <h3>משאבת חלב אוונט נטורל</h3>
                    <Price />
                </div>
                <Button />
            </div>
        </div>
    );
};

export default Item;