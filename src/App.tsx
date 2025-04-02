import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  //to make the alert appear when you click the button, we must first set visibility to false using the react useState. This way, when you click the button, the visibility will be set to true.
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
