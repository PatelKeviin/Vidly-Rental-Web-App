import React from "react";

const ListGroup = props => {
  return (
    <ul className="list-group">
      {props.items.map(item => (
        <li
          key={item[props.valueProperty]}
          className={
            item === props.selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onItemSelect(item)}
          style={{ cursor: "pointer" }}
        >
          {item[props.textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default ListGroup;
