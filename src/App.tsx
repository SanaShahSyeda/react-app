import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let handleSelectItem = (item: String) => {
    console.log(item);
  };

  let onClick = () => {
    setAlertVisibility(true);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
        )}
        <Button color="secondary" onClick={onClick}>
          CLICK ME
        </Button>
      </div>
      {/* <div>
        <Alert>
          Hello<span>World</span>
        </Alert>
      </div> */}
      {
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      }
    </div>
  );
}
export default App;
