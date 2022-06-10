import logo from "./logo.svg";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
