import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

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
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}
export default ListGroup;
