import { Fragment, useState } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Hook (it tells react that the component will update its value in time)
  useState;

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; variable (selectedIndex)
  // arr[1];  updater function

  // Event Handler
  let handleClick = (event: MouseEvent) => console.log(event);

  return (
    // Multiple components aren't allowed to be returned in react but must be wraped in a div/fragment.
    // By using div, an extra element is created in react, so react prefers fragments.
    // Another way to use fragments is to add <> brackets.
    // <Fragment>
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* Rendering Lists dynamically */}
        {items.map((item, index) => (
          // key prop applied so react could keep record of elements
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}
export default ListGroup;
