import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import Sidebar from '../Sidebar/Sidebar';
import Product from '../Product/Product';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import AllCollapseExample from '../FAQ/FAQ';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id)
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }

    //     }
    //     setCart(savedCart);
    // }, [products]);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1; newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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
                <Sidebar cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Home;