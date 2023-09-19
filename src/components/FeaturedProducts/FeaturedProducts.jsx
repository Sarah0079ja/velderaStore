import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {
  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className='featuredproducts'>
        <div className='top '>
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptate 
                unde facere nulla dolorem, voluptatibus harum sequi eos 
                reprehenderit porro labore. Nesciunt nulla tenetur animi beatae est 
                voluptatem! Sapiente, tenetur
            </p>
        </div>

        <div className="bottom">
            {error
             ? 'Something went Wrong'
             : loading
             ? 'loading' 
             : data?.map((item) => <Card item={item} key={item.id}/>
            )}

        </div>
      
    </div>
  )
}

export default FeaturedProducts