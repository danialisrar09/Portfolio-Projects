import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((item) => item.bestseller);
        setBestSellers(bestProducts.slice(0, 5));
    }, []);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST '} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our best-selling products that our customers love the most.
            </p>    

        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSellers.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} className='text-gray-700 cursor-pointer'>
                        <img className='hover:scale-110 transition ease-in-out' src={item.image[0]} alt="" />
                        <p className='pt-3 pb-1 text-sm'>{item.name}</p>
                        <p className='text-sm font-medium'>{item.currency}{item.price}</p>
                    </ProductItem>
                ))
            }
        </div>
    

    </div>
  )
}

export default BestSeller