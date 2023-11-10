import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    // Multiple components aren't allowed to be returned in react but must be wraped in a div/fragment.
    // By using div, an extra element is created in react, so react prefers fragments.
    // Another way to use fragments is to add <> brackets.
    // <Fragment>
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {/* Rendering Lists dynamically */}
        {items.map((item) => (
          // key prop applied so react could keep record of elements
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}
export default ListGroup;
