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
  },[]);

  const allLaunches =useSelector((state) =>  state.allLaunches)
  const {launches}=allLaunches;

  // const {launches}= allLaunches;
  // console.log('launchel',launches);
    return (
      <div className="App">
       <Header/>
     <List data={allLaunches}/> 
      </div>
    );
}

export default App;
