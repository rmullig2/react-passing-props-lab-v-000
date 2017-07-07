import React from 'react';

const list = (fruit, filter) =>
  !filter ? fruit : fruit.filter(i => i.fruit_type === filter);

const FilteredFruitList = (props) =>
  <ul className="fruit-list">
    {list(props.fruit, props.filter).map((item, index) => <li key={index}>{item.char}</li>)}
  </ul>
  
FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
