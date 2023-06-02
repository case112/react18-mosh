import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert>
        <span>Hello World</span>
      </Alert>
      <Button type="danger" onClick={() => console.log("Clicked")}>
        Button name
      </Button>
    </div>
  );
}

export default App;
