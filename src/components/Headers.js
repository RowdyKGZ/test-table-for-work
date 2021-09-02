import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { productContext } from "../contexts/ProductsContext";

const Headers = () => {
  const history = useHistory();
  const [searchVal, setSearchVal] = useState(getSearchValue() || "");
  const { getProducts } = useContext(productContext);
  const [openingMenu, setOpeningMenu] = useState(false);
  const [sorting, setSorting] = useState(true);

  function getSearchValue() {
    const search = new URLSearchParams(history.location.search);
    return search.get("q");
  }

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setSearchVal(e.target.value);
    getProducts(history);
  };

  const switchMenu = () => {
    setOpeningMenu(!openingMenu);
    setSearchVal("");
    history.push("/");
  };

  const onChangeSort = (name) => {
    if (sorting) {
      const search = new URLSearchParams(history.location.search);
      search.set(`_sort`, name);
      history.push(`${history.location.pathname}?${search.toString()}`);
      getProducts(history);
      setSorting(!sorting);
    } else {
      history.push(`${history.location.search}&_order=desc`);
      getProducts(history);
      setSorting(!sorting);
      history.push("/");
    }
  };

  return (
    <div className="header">
      <div className="body_filter">
        <span onClick={switchMenu} className="title_filter">
          Фильтрация
        </span>
        <div
          style={openingMenu ? { display: "block" } : { display: "none" }}
          className="filter"
        >
          <span onClick={() => onChangeSort("title")}>По названию</span>
          <span onClick={() => onChangeSort("count")}>По количеству</span>
          <span onClick={() => onChangeSort("distance")}>По растоянию</span>
        </div>
      </div>

      <div>
        <input placeholder="Пойск" value={searchVal} onChange={handleValue} />
      </div>
    </div>
  );
};

export default Headers;
