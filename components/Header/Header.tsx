import React, { useEffect, useState } from "react";
import { HeaderDiv } from "./H__style";
import {
  Search,
  LoginBtn,
  NewsIcon,
  Heart,
  ShoppingBasket,
} from "../E__exports";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Contexts } from "../../contexts/Contexts";
import { useContext } from "react";

const Header = () => {
  const {
    setShoppingBar,
    setWishesBar,
    setNewsBar,
    newsBar,
    cartItems,
    wishesItems,
  } = useContext(Contexts);

  const location = useRouter();
  const [current, setCurrent] = useState<string>("");

  function closeTabs() {
    setShoppingBar(false);
    setWishesBar(false);
    setNewsBar(false);
  }

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/":
        setCurrent("home");
        break;
      case "/about":
        setCurrent("about");
        break;
      case "/shop":
        setCurrent("shop");
        break;
      case "/contact":
        setCurrent("contact");
        break;
    }
  }, [location]);

  return (
    <HeaderDiv>
      <section>
        <Link href="/">
          <a className="logo">RodcNatural</a>
        </Link>
        <div className="search">
          <input type="text" id="search" />

          <label htmlFor="search">
            <Image
              src={Search.src}
              alt="Ferramenta para a de produtos"
              width="17"
              height="18"
              layout="fixed"
            />
          </label>
        </div>

        <LoginBtn />
      </section>

      <section>
        <figure onClick={() => setNewsBar(!newsBar)}>
          <Image
            src={NewsIcon.src}
            alt="News"
            width="14"
            height="12"
            layout="fixed"
          />

          <figcaption className="news">
            <strong>News</strong>
          </figcaption>
        </figure>

        <nav>
          <ul>
            <li
              className={current === "home" ? "selected" : ""}
              onClick={() => closeTabs()}
            >
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li
              className={current === "about" ? "selected" : ""}
              onClick={() => closeTabs()}
            >
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li
              className={current === "shop" ? "selected" : ""}
              onClick={() => closeTabs()}
            >
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li
              className={current === "contact" ? "selected" : ""}
              onClick={() => closeTabs()}
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="asideNav">
          <figure>
            <Image
              src={Heart.src}
              alt="Add to wishes list"
              width="23"
              height="21"
              layout="fixed"
              onClick={() => {
                setWishesBar(true);
              }}
            />
            {wishesItems.length > 0 && (
              <figcaption
                className="haveArray"
                onClick={() => {
                  setWishesBar(true);
                }}
              >
                {wishesItems.length}
              </figcaption>
            )}
          </figure>

          <figure>
            <Image
              src={ShoppingBasket.src}
              alt="Add to cart"
              width="25"
              height="22"
              layout="fixed"
              onClick={() => {
                setShoppingBar(true);
              }}
            />
            {cartItems.length > 0 && (
              <figcaption
                className="haveArray"
                onClick={() => {
                  setShoppingBar(true);
                }}
              >
                {cartItems.length}
              </figcaption>
            )}
          </figure>
        </div>
      </section>
    </HeaderDiv>
  );
};

export default Header;
