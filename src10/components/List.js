import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {props.groceries.map((item) => {
        if (item.purchased===false)
        return (
          <li className='list-group-item' key={item.id}>
            {`${item.name}`}
            </li>
        );
      })}
    </ul>
  );
}

export default List;
