import { MouseEvent, useState } from "react";

function ListGroup() {
  const items = ["Colombo", "New York", "Homagama", "Padukka"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);


  const handleClick = (event: MouseEvent) => console.log(event);

  if (items.length === 0) {
    return <p>No items found</p>;
  }
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
