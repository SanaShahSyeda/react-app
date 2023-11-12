import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
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
