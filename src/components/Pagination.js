import React from "react";

const Pagination = (props) => {
  let arr = [];
  for (let i = 1; i < props.pageCount + 1; i++) {
    arr.push(i);
  }
  return (
    <center className="pagination">
      {arr.map((item, index) => (
        <span key={index} onClick={() => props.handlePage(item)}>
          {item}
        </span>
      ))}
    </center>
  );
};

export default Pagination;
