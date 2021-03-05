import "antd/dist/antd.css";
import LandingComponent from "./components/LandingComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={LandingComponent} />
        <Route path="/:value" component={LandingComponent} />
      </Router>
    </div>
  );
}

export default App;
