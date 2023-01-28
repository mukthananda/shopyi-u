import React, { useState } from 'react'
import data from "./component/back/data/data";
import Header from './component/front/header/header';
import {BrowserRouter as Router} from "react-router-dom";
import Routs from './component/front/routs/routs';

const App = () => {
  const { productItem } = data;
  const [cartItem,setCartItem] = useState([]);
  const heandleAddProduct=(product)=>{
    const ProductExist=cartItem.find((item) => item.id===product.id);
    if(ProductExist){
      setCartItem(cartItem.map((item)=>item.id===product.id?
      {...ProductExist,quantity : ProductExist.quantity + 1 }:item)
      );
    }
    else{
      setCartItem([...cartItem,{...product,quantity:1}]);
    }
  }
  const handleRemoveProduct=(product)=>{
    const ProductExist=cartItem.find((item) => item.id !== product.id);
    if(ProductExist.quantity===1){
      setCartItem(cartItem.filter((item)=>item.id===product.id?
      {...ProductExist,quantity:ProductExist.quantity+1}:item)
      );
    }
    else{
      setCartItem(
        cartItem.map((item)=>
        item.id ===product.id
        ?{...ProductExist,quantity:ProductExist.quantity-1}:item
        )
        );
    }
  }
  const heandleCartClearence=()=>{
    setCartItem([]);
  }

  return (
    <div>
      <Router>
        <Header cartItem={cartItem}/>
        
        <Routs productItem={productItem} 
        cartItem={cartItem} 
        heandleAddProduct={heandleAddProduct}
        handleRemoveProduct={handleRemoveProduct} 
        heandleCartClearence={heandleCartClearence}/>
      
      </Router>
    </div>
  )
}

export default App
