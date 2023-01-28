import React from 'react'
import "./products.css"

const products = ({productItem,heandleAddProduct}) => {
  return (
    <div className='products'>
        {productItem.map((productItem)=>(
            <div className="card" >
                <div>
                    <img className='product-image'
                     src={productItem.image} 
                     alt={productItem.name}/>
                </div>
                <div>
                  <h3 className='product-name'>
                    {productItem.name}
                  </h3>
                </div>
                <div className='product-price'>Rs.{productItem.price}
                </div>
                <div>
                  <button className='product-add-button'
                   onClick={()=>heandleAddProduct(productItem)}> Add to cart </button>
                </div>
            </div>
        )
        )}
      
    </div>
  )
}

export default products
