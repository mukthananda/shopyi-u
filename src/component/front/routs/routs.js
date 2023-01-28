import React from "react";
import { Switch,Route } from "react-router-dom";
import Products from "../products/products";
import Cart from "../cart/cart";
import Signup from "../signup/signup";


const routs = ({ productItem,cartItem,handleAddProduct, handeRemoveProduct,handleCartClearence }) => {
  return (
    <div>
      <Switch>
        <Route path="/"  exact>
          <Products productItem={productItem} 
          handleAddProduct={handleAddProduct}/>
          </Route>
          <Route path="/signup" exact>
          <Signup/>
          </Route>
          <Route path="/cart" exact>
          <Cart cartItem ={cartItem} 
          handleAddProduct={handleAddProduct}
          handeRemoveProduct={handeRemoveProduct}
          handleCartClearence={handleCartClearence}/>
        </Route>
      </Switch>
    </div>
  );
};

export default routs;
