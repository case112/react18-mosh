import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <span>Hello World</span>
        </Alert>
      )}

      <Button type="danger" onClick={() => setAlertVisibility(true)}>
        Button name
      </Button>
    </div>
  );
}

export default App;
