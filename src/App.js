import './App.css';
import Button from "./Button/Button";

function App() {
  return (
    <div>
        <h1 className="title">Buttons</h1>
        <div className="default-div">
            <div className="text-title-btn">Default</div>
            <Button variant="default">Default</Button>
        </div>
        <div className="text-title-btn">Default</div>
        <Button variant="outline">Default</Button>

    </div>
  );
}

export default App;
