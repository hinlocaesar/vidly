import React from "react";
import _ from "lodash"; //is a optimozes version of a library called _

export default function pagination(props) {
  const { itemsCount, pageSize } = props;

  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);
  //[1,2,3].map()
  //[1 to pageesCount.map()]
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
