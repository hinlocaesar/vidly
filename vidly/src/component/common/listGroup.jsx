import React from "react";

function ListGroup(props) {
  const { items, textProperty, valueProperty } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={items[valueProperty]} className="list-group-item">
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
