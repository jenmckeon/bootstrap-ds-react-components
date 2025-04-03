import { useState, useEffect, useRef } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const timerId = useRef<number | null>(null);

  useEffect(() => {
    if (alertVisible) {
      timerId.current = window.setTimeout(() => setAlertVisible(false), 5000);
    }

    return () => {
      if (timerId.current !== null) {
        clearTimeout(timerId.current);
        timerId.current = null; // Reset the Ref after clearing
      }
    };
  }, [alertVisible]);

  const showAlert = () => setAlertVisible(true);
  const closeAlert = () => setAlertVisible(false);

  return (
    <div>
      {alertVisible && <Alert onClose={closeAlert}>My Alert</Alert>}
      <Button color="primary" onClick={showAlert}>
        Show Alert
      </Button>
    </div>
  );
};

export default App;

/*
Why use useRef<number | null>(null)?
- useRef(null) initializes timerId.current as null.
- setTimeout() returns a number (in browsers), which we store in timerId.current.
- TypeScript expects consistency, so without explicitly typing useRef<number | null>(null),
  it assumes timerId.current is always null, causing a type error when assigning a number.

Why check if (timerId.current !== null) before clearTimeout()?
- clearTimeout() expects a number, not null.
- Since timerId.current starts as null, calling clearTimeout(null) would cause a TypeScript error.
- The check ensures we only call clearTimeout() if timerId.current holds a valid timeout ID.

Why these approaches don't work:
- useRef(null): TypeScript thinks timerId.current is always null, making timerId.current = setTimeout(...) invalid.
- useRef<number>(0): TypeScript assumes timerId.current must always be a number, 
  but it starts as null, causing an error.

This approach ensures type safety and avoids runtime errors.
*/
