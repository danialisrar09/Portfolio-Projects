import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [ showFilters, setShowFilters ] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-200'>
        
        {/* Filter options */}
        <div className='min-w-60'>
          <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>

          {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'}`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Men'} />Men
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Women'} />Women
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Kids'} />Kids
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Collection;