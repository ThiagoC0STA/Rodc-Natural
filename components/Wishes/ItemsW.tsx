import Image from "next/image";
import React, { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { CloseIcon, Redshopping } from "../E__exports";
import { ItemsCard } from "./W__style";

const ItemsW = () => {
  const { wishesItems, addProductToCart, removeWishes } = useContext(Contexts);

  return (
    <ItemsCard>
      {wishesItems.map(({ id, name, price, image, qtd }) => (
        <div key={id} className="card">
          <figure>
            <Image
              src={image}
              alt="Desired item"
              width="200"
              height="150"
              layout="fixed"
            />
            <figcaption onClick={() => removeWishes(id)}>
              <Image
                src={CloseIcon.src}
                alt="Close"
                width="23px"
                height="23px"
                layout="fixed"
              />
            </figcaption>
          </figure>
          <h2>{name}</h2>
          <div>
            <p>
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <Image
              src={Redshopping.src}
              alt="Make purchase"
              width="23px"
              height="23px"
              layout="fixed"
              onClick={() => addProductToCart(id, name, price, image, qtd)}
            />
          </div>
        </div>
      ))}
    </ItemsCard>
  );
};

export default ItemsW;
