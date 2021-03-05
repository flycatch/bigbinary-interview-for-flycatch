import "antd/dist/antd.css";
import LandingComponent from "./components/LandingComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header.jsx"; 

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
       <Header />
      <Router history={history}>

        <Route exact path="/:value?/:startDate?/:endDate?" component={LandingComponent} />
      </Router>
    </div>
  );
}

export default App;
