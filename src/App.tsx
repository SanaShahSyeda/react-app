import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let handleSelectItem = (item: String) => {
    console.log(item);
  };

  let onClick = () => {
    console.log("Button clicked.");
  };

  return (
    <div>
      <div>
        <Button color="secondary" onClick={onClick}>
          CLICK ME
        </Button>
      </div>
      <div>
        <Alert>
          Hello<span>World</span>
        </Alert>
      </div>
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
