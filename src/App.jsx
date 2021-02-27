import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Header from "./components/Header";
import {List} from "./components/index";
import launchesActions from "./actions/launches.action";
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      launchesActions.launchesList())
  })

  const allLaunches = useSelector((state) =>  state.launchesList)
  // allLaunches && console.log("the res", allLaunches)
  // const {launches, Loading} = allLaunches
    return (
      <div className="App">
       <Header/>
     <List allLaunches={allLaunches}/> 
      </div>
    );
}

export default App;
