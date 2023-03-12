import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./component/Navbar";
import TemplatePage from "./component/TemplatePage";
import SingleTemplate from "./component/SingleTemplate";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <SingleTemplate />
      {/* <h1>Resume App</h1> */}
      {/* <TemplatePage /> */}
    </div>
  );
}

export default App;
