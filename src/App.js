import "./App.css";
import Heading from "./components/Heading";
import List from "./components/List";
import { add, multiply, divide, substract } from "./calculator";

function App() {
  return (
    <div>
      <ul>
        <li>{add(1, 2)}</li>
        <li>{multiply(2, 3)}</li>
        <li>{substract(7, 2)}</li>
        <li>{divide(5, 2)}</li>
      </ul>
    </div>
  );
}

export default App;
