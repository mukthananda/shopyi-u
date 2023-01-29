import React from 'react';
import "./cart.css"
const cart = ({
  cartItem, 
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearence
}) => {
   const totalprice= cartItem.reduce(
    (price,item)=>price+item.quantity*item.price,0);
  return (
    <div className=" cart-item">
      <h2 className=" cart-item-header">Cart Items</h2>
      <div className='clear-cart'>
        {cartItem.length >= 1 && (
        <button className='clear-cart-button' onClick={handleCartClearence}>
          Clear cart
          </button>
      )}
      </div>

      {cartItem.length === 0 && (
      <div className='cart-item-empty'> no items are added</div>
      )}

      <div>
        {cartItem.map((item)=>(
          <div key={item.id} className="cart-item-list">
            <img className='cart-item-image'
             src={item.image}
              alt={item.name} />
              <div className='cart-item-name'>{
                item.name
              }

              </div>
              <div className='cart-item-function'>
                <button 
                className='cart-item-add' 
                onClick={()=> handleAddProduct(item) }>
                  +
                 </button>
                <button className='cart-item-remove' 
                onClick={()=> handleRemoveProduct(item)}>
                  -
                  </button>

              </div>
              <div className='cart-items-price'>
                {item.quantity}*Rs.{item.price}
              </div>
          </div>
        ))}
        <div className='cart-item-total-price-name'>
          total price
          <div className="div cart-item-total-price">
            Rs.{totalprice}
          </div>

        </div>
      </div>
    </div>
  );
;}

export default cart
