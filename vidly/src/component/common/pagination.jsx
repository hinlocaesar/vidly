import React from "react";
import _ from "lodash"; //is a optimozes version of a library called _
import PropTypes from "prop-types";

export default function Pagination(props) {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log("Hinlo", currentPage);
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);
  //[1,2,3].map()
  //[1 to pageesCount.map()]
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
