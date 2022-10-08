import React, { createContext, useState, useEffect } from "react";
import { Products } from "../components/Products/Products";
import { ProductsCartTypes, ProductsTypes, WishesTypes } from "../types";

export const Contexts = createContext(null);

export const GlobalContext = ({ children }) => {
  /*--------------- add and remove classes ----------------*/
  const [shoppingBar, setShoppingBar] = useState<boolean>(false);
  const [wishesBar, setWishesBar] = useState<boolean>(false);
  const [newsBar, setNewsBar] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState<boolean>(false);
  const [registerForm, setRegisterForm] = useState<boolean>(false);

  /*--------------- add and remove arrays ----------------*/

  const [products, setProducts] = useState<ProductsTypes[]>(Products);
  const [cartItems, setCartItems] = useState<ProductsCartTypes[]>([]);
  const [wishesItems, setWishesItems] = useState<WishesTypes[]>([]);
  const [newsItems, setNewsItems] = useState([]);

  /*--------------- other states ----------------*/
  const [finalPrice, setFinalprice] = useState<number>(0);

  function addProductToCart(
    id: number,
    name: string,
    price: number,
    image: string,
    qtd = 1
  ) {
    const copyProductsCart = [...cartItems];
    const item = copyProductsCart.find((product) => product.id === id);

    if (!item) {
      copyProductsCart.push({
        id: id,
        name: name,
        price: price,
        image: image,
        qtd: qtd,
      });
    } else {
      item.qtd++;
    }
    setCartItems(copyProductsCart);
  }

  useEffect(() => {
    function addPrice() {
      const copyProductsCart = [...cartItems];

      const som = copyProductsCart.reduce(
        (total, numero) => total + numero.price * numero.qtd,
        0
      );
      setFinalprice(som);
    }
    addPrice();
  }, [cartItems]);

  function removeProductToCart(id: number, price: number) {
    const copyProductsCart = [...cartItems];
    const item = copyProductsCart.find((product) => product.id === id);
    setFinalprice(finalPrice - price);

    if (item && item.qtd > 1) {
      item.qtd--;
      setCartItems(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id
      );
      setCartItems(arrayFiltered);
    }
  }

  function clearCart() {
    setCartItems([]);
    setFinalprice(0);
  }

  function addWishes(id: number, name: string, price: number, image: string) {
    const copyWishes = [...wishesItems];

    const item = copyWishes.find((product) => product.id === id);
    if (!item) {
      copyWishes.push({
        id: id,
        name: name,
        price: price,
        image: image,
      });
    }
    setWishesItems(copyWishes);
  }
  function removeWishes(id: number) {
    const copyWishes = [...wishesItems];
    const item = copyWishes.find((product) => product.id === id);

    if (item) {
      const arrayFiltered = copyWishes.filter((product) => product.id !== id);
      setWishesItems(arrayFiltered);
    }
  }
  function clearWishes() {
    setWishesItems([]);
  }

  return (
    <Contexts.Provider
      value={{
        /* ---States--- */

        shoppingBar,
        wishesBar,
        newsBar,

        loginForm,
        registerForm,

        products,
        cartItems,
        wishesItems,
        newsItems,
        finalPrice,

        /* ---Set States--- */

        setShoppingBar,
        setWishesBar,
        setNewsBar,

        setLoginForm,
        setRegisterForm,

        setProducts,

        /* ---functions--- */

        addProductToCart,
        removeProductToCart,
        clearCart,

        addWishes,
        removeWishes,
        clearWishes,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};
