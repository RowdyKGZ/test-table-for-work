import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { productContext } from "../contexts/ProductsContext";
import Pagination from "./Pagination";

const Products = () => {
  let history = useHistory();
  const { products, getProducts, paginatedPages } = useContext(productContext);

  useEffect(() => {
    getProducts(history);
  }, []);

  const handlePage = (pageValue) => {
    const search = new URLSearchParams(history.location.search);
    search.set("_page", pageValue);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
  };

  return (
    <>
      <div className="product_section">
        {products.map((item) => (
          <React.Fragment key={item.id}>
            <div className="item">
              <div>{item.date.dateYear}</div>
              <div>{item.date.dateHour}</div>
            </div>
            <div className="item">
              <h2>{item.title}</h2>
            </div>
            <div className="item">
              <h2>{item.count}</h2>
            </div>
            <div className="item">
              <h2>{item.distance}</h2>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Pagination pageCount={paginatedPages} handlePage={handlePage} />
    </>
  );
};

export default Products;
