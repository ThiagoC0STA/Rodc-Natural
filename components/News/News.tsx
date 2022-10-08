import React from "react";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { CloseBtn } from "../E__exports";
import EmptyNews from "./EmptyNews";
import { NewsSideBar } from "./N__style";

const News = () => {
  const { newsBar, setNewsBar, newsItems } = useContext(Contexts);

  return (
    <NewsSideBar style={newsBar === true ? { opacity: "1" } : { opacity: "0" }}>
      <CloseBtn onClick={() => setNewsBar(false)} />

      {newsItems.length === 0 ? <EmptyNews /> : <div>Have a news</div>}
    </NewsSideBar>
  );
};

export default News;
