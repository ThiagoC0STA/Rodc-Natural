import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { Empty } from "../Cart/C__style";

const EmptyWishes = () => {
  const { setWishesBar } = useContext(Contexts);

  return (
    <Empty>
      <h2>Your wish list is empty</h2>
      <Link href="/shop">
        <button onClick={() => setWishesBar(false)}>Go to the store</button>
      </Link>
    </Empty>
  );
};

export default EmptyWishes;
