import React, { ReactComponentElement } from "react";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import Items from "./ItemsW";
import { CloseBtn } from "../E__exports";
import EmptyWishes from "./EmptyWishes";
import { WishesSideBar } from "./W__style";
import { WishesTypes } from "../../types";

type Props = {
  wishesBar: boolean;
  setWishesBar: (arg: boolean) => void;
  wishesItems: WishesTypes[];
  clearWishes: () => void;
};

const Wishes = () => {
  const { wishesBar, setWishesBar, wishesItems, clearWishes }: Props =
    useContext(Contexts);

  return (
    <WishesSideBar
      style={wishesBar === true ? { right: "0" } : { right: "-644px" }}
    >
      <h1>Wishlist</h1>
      <CloseBtn onClick={() => setWishesBar(false)} />

      {wishesItems.length === 0 ? (
        <EmptyWishes />
      ) : (
        <div>
          <Items />
          <a className="clearwishes" onClick={() => clearWishes()}>
            Clear wish list
          </a>
          <p className="totalwishes">
            Congratulations, you have a total of {wishesItems.length} wishes
          </p>
        </div>
      )}
    </WishesSideBar>
  );
};

export default Wishes;
