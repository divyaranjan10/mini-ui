import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Badge } from "./components/Badge/Badge";

function App() {
  return (
    <div>
      <h1>Mini UI Library</h1>

      <Button onClick={() => alert("Primary clicked")}>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger" disabled>
        Delete
      </Button>

      <Input
        id="email"
        label="Email address"
        type="email"
        placeholder="Enter your email"
      />

      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        error="Password is required"
      />

      <Badge>Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="danger">Failed</Badge>
    </div>
  );
}

export default App;
