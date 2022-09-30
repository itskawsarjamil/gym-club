import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Product from '../Product/Product';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import AllCollapseExample from '../FAQ/FAQ';


const Home = () => {
    const [products, setProducts] = useState([]);
    const [time, setTime] = useState(0);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        let y=localStorage.getItem('time');
        if(y)
        {
            setTime(y);
        }
    }, []);
    
    const handleAddToCart = (selectedProduct) => {
        let p = time;
        let q=parseInt(selectedProduct.time)+ parseInt(p);
        setTime(q);

        localStorage.setItem('time',q);
    }
    return (
        <div className='home-container'>
            <div>
                <Navbar></Navbar>
                <div className="products-container">
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <AllCollapseExample></AllCollapseExample>
            </div>
            <div className="cart-container">
                <Sidebar time={time}></Sidebar>
            </div>
        </div>
    );
};

export default Home;