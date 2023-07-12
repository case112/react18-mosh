import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { Like } from "./components/Like";

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

      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
