import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div>
      <h1>Mini UI Library</h1>

      <Button onClick={() => alert("Primary clicked")}>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger" disabled>
        Delete
      </Button>
    </div>
  );
}

export default App;
