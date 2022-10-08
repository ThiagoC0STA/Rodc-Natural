import React from "react";
import { CarousselItems, CarousselSection } from "./C__style";
import Carousel from "react-elastic-carousel";
import { Banner, OutLink, ShoppingIcon, WhiteHeart } from "../E__exports";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";

const HomeCaroussel = () => {
  const { products, addProductToCart, addWishes } = useContext(Contexts);

  return (
    <CarousselSection>
      <section>
        <h1>Popular Products</h1>
        <Link href="./shop">
          <a>
            See all products
            <Image
              src={OutLink.src}
              alt="go to store"
              width="16"
              height="18"
              layout="fixed"
            />
          </a>
        </Link>

        <Carousel
          itemsToShow={5}
          itemsToScroll={4}
          pagination={false}
          disableArrowsOnEnd={false}
        >
          {products.map(({ id, name, price, image }) => (
            <div key={id}>
              <CarousselItems>
                <figure>
                  <Image
                    src={image}
                    alt={name}
                    width="233"
                    height="194"
                    layout="fixed"
                    quality={100}
                  />
                </figure>
                <div className="price">
                  {price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <div className="blackDiv">
                  <button onClick={() => addWishes(id, name, price, image)}>
                    <Image
                      src={WhiteHeart.src}
                      alt="Add to wishes list"
                      width="27"
                      height="27"
                      layout="fixed"
                    />
                  </button>
                  <button
                    onClick={() => addProductToCart(id, name, price, image)}
                  >
                    <Image
                      src={ShoppingIcon.src}
                      alt="Add products to cart"
                      width="27"
                      height="24"
                      layout="fixed"
                    />
                  </button>
                </div>
              </CarousselItems>
            </div>
          ))}
        </Carousel>
      </section>

      <div className="banner">
        <figure>
          <Image
            src={Banner.src}
            alt="promotion"
            width="1705"
            height="307"
            layout="responsive"
            placeholder="blur"
            blurDataURL={Banner.src}
          />
          <figcaption>RN quality natural products</figcaption>
        </figure>
      </div>

      <section>
        <h1>Promotions</h1>
        <Link href="./shop">
          <a>
            See all products
            <Image
              src={OutLink.src}
              alt="Go to the store"
              width="16"
              height="18"
              layout="fixed"
            />
          </a>
        </Link>

        <Carousel
          itemsToShow={5}
          itemsToScroll={4}
          pagination={false}
          disableArrowsOnEnd={false}
        >
          {products.map(({ id, name, price, image }) => (
            <div key={id}>
              <CarousselItems>
                <figure>
                  <Image
                    src={image}
                    alt={name}
                    width="233"
                    height="194"
                    layout="fixed"
                    quality={100}
                  />
                </figure>
                <div className="price">
                  {price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <div className="blackDiv">
                  <button onClick={() => addWishes(id, name, price, image)}>
                    <Image
                      src={WhiteHeart.src}
                      alt="Add to wishes list"
                      width="27"
                      height="27"
                      layout="fixed"
                    />
                  </button>
                  <button
                    onClick={() => addProductToCart(id, name, price, image)}
                  >
                    <Image
                      src={ShoppingIcon.src}
                      alt="Add products to cart"
                      width="27"
                      height="24"
                      layout="fixed"
                    />
                  </button>
                </div>
              </CarousselItems>
            </div>
          ))}
        </Carousel>
      </section>
    </CarousselSection>
  );
};

export default HomeCaroussel;
