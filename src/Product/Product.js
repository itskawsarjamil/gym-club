import {  faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const{product,handleAddToCart}=props;
    const { name, img,time,Age } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>For Age : {Age}</p>
                <p>Time required : {time}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to List</p>
                <FontAwesomeIcon icon={faList} className='fntcls'></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;