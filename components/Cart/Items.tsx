import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { ItemsCard } from "./C__style";

const Items = () => {
  const { cartItems, removeProductToCart, addProductToCart, clearCart } =
    useContext(Contexts);

  return (
    <ItemsCard>
      <a onClick={() => clearCart()}>Clear cart</a>
      <div className="scrollDiv">
        {cartItems.map(({ id, name, price, image, qtd }) => (
          <div key={id} className="card">
            <Image
              src={image}
              alt={name}
              width="170"
              height="120"
              layout="fixed"
            />

            <article>
              <h3>{name}</h3>
              <div className="price">
                <p>
                  {price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>

                <div>
                  <button onClick={() => removeProductToCart(id, price)}>
                    -
                  </button>
                  <p>{qtd}</p>
                  <button
                    onClick={() =>
                      addProductToCart(id, name, price, image, qtd)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </ItemsCard>
  );
};

export default Items;
