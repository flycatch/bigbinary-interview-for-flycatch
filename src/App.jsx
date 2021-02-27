import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Header from "./components/Header";
import {List} from "./components/index";

function App() {
    return (
      <div className="App">
       <Header/>
       <List/>
      </div>
    );
}

export default App;
