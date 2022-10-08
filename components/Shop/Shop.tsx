import Image from "next/image";
import React, { useState } from "react";
import { CategoryArrow, ShopCaroussel } from "../E__exports";
import { CategoriesItems } from "./Categories";
import { Store } from "./S__style";

const Shop = () => {
  const [current, setCurrent] = useState(0);

  return (
    <Store>
      <section>
        <h1>Categories</h1>
        {CategoriesItems.map(({ text }, index) => (
          <div key={text}>
            {current === index && (
              <figure>
                <Image
                  src={CategoryArrow}
                  alt="item selecionado"
                  layout="fill"
                />
              </figure>
            )}
            <h2
              onClick={() => setCurrent(index)}
              className={current === index ? "productSelected" : ""}
            >
              {text}
            </h2>
          </div>
        ))}
      </section>
      <ShopCaroussel />
    </Store>
  );
};

export default Shop;
