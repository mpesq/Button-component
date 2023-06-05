import './App.css';
import Button from "./Button/Button";

function App() {
  return (
    <div>
        <h1 className="title">Buttons</h1>
        <div className="btn-div">
            <div className="text-title-btn">Default</div>
            <Button>Default</Button>
        </div>
        <div className="outline-div">
            <div className="text-title-btn">Outline</div>
            <Button variant="outline">Default</Button>
        </div>
        <div className="text-div">
            <div className="text-title-btn">Text</div>
            <Button variant="text">Default</Button>
        </div>
        <div className="disshadow-div">
            <div className="text-title-btn">disableShadow</div>
            <Button disableShadow>Default</Button>
        </div>
        <div className="disabled-div">
            <div className="text-title-btn">disabled</div>
            <Button disabled>Default</Button>
        </div>
        <div className="disabled-text-div">
            <div className="text-title-btn">disabled</div>
            <Button variant="text" disabled>Default</Button>
        </div>
        <div className="start-icon-div">
            <div className="text-title-btn">startIcon="local-grocery-store"</div>
            <Button startIcon>Default</Button>
        </div>
        <div className="end-icon-div">
            <div className="text-title-btn">endIcon="local-grocery-store"</div>
            <Button endIcon>Default</Button>
        </div>
        <div className="sm-div">
            <div className="text-title-btn">size="sm"</div>
            <Button size="sm">Default</Button>
        </div>
        <div className="md-div">
            <div className="text-title-btn">size="md"</div>
            <Button size="md">Default</Button>
        </div>
        <div className="lg-div">
            <div className="text-title-btn">size="lg"</div>
            <Button size="lg">Default</Button>
        </div>
        <div className="default-div">
            <div className="text-title-btn">color="default"</div>
            <Button color="default">Default</Button>
        </div>
        <div className="primary-div">
            <div className="text-title-btn">color="primary"</div>
            <Button color="primary">Primary</Button>
        </div>
        <div className="secondary-div">
            <div className="text-title-btn">color="secondary"</div>
            <Button color="secondary">Secondary</Button>
        </div>
        <div className="danger-div">
            <div className="text-title-btn">color="danger"</div>
            <Button color="danger">Danger</Button>
        </div>
        <div className="signature">created by mpesq - devChallenges.io</div>
    </div>

  );
}

export default App;
