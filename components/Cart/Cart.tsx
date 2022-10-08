import React from "react";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { CloseBtn, FinishBtn } from "../E__exports";
import { CartSideBar } from "./C__style";
import EmptyCart from "./EmptyCart";
import Items from "./Items";

const Cart = () => {
  const { shoppingBar, finalPrice, setShoppingBar, cartItems } =
    useContext(Contexts);

  return (
    <CartSideBar
      style={shoppingBar === true ? { right: "0" } : { right: "-644px" }}
    >
      <h1>Cart</h1>

      <CloseBtn onClick={() => setShoppingBar(false)} />

      {cartItems.length === 0 ? <EmptyCart /> : <Items />}

      {cartItems.length === 0 ? (
        <div></div>
      ) : (
        <h2 className="currency">
          Total:{" "}
          {finalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h2>
      )}
      {cartItems.length === 0 ? <div></div> : <FinishBtn />}
    </CartSideBar>
  );
};

export default Cart;
