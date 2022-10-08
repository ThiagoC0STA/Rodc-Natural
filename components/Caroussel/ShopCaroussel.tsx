import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ShopProducts } from "./C__style";
import { RedHeart, Info } from "../E__exports";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { BuyButton } from "../Buttons/B_style";
import { ProductsTypes } from "../../types";

const ShopCaroussel = () => {
  const { products, addProductToCart, addWishes } = useContext(Contexts);

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    arrows: false,
    centerPadding: "0",
    dots: true,
    customPaging: (i) => <div className="dots">{i + 1}</div>,
  };
  return (
    <ShopProducts>
      <Slider {...settings}>
        {products.map(
          ({
            id,
            image,
            name,
            price,
            qtd = 1,
            compatibility,
          }: ProductsTypes) => (
            <div key={id} className="cards">
              <article>
                <figure>
                  <Image
                    src={image}
                    alt={name}
                    width="297"
                    height="215"
                    layout="fixed"
                    quality={100}
                  />
                </figure>

                <figure>
                  <Image
                    src={RedHeart}
                    alt="Adicionar à lista de desejos"
                    width="26"
                    height="29"
                    layout="fixed"
                    onClick={() => {
                      addWishes(id, name, price, image);
                    }}
                  />
                </figure>

                <h3>{name}</h3>

                <div>
                  <h4>
                    {price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h4>
                  <BuyButton
                    onClick={() =>
                      addProductToCart(id, name, price, image, qtd)
                    }
                  >
                    Comprar
                  </BuyButton>
                </div>

                <Info compatibility={compatibility} />
              </article>
            </div>
          )
        )}
      </Slider>
    </ShopProducts>
  );
};

export default ShopCaroussel;
