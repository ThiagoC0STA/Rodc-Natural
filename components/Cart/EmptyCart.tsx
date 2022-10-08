import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { Empty } from "./C__style";

const EmptyCart = () => {
  const { setShoppingBar } = useContext(Contexts);

  return (
    <Empty>
      <h2>Oops, your cart is empty</h2>
      <Link href="/shop">
        <button onClick={() => setShoppingBar(false)}>Go to store</button>
      </Link>
    </Empty>
  );
};

export default EmptyCart;
