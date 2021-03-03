import launchesActions from "../actions/launches.action";
import Header from "./Header";
import List from "./List";
import { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilterLaunches from "./FilterLaunches";

export const LandingComponent = () => {
  const [loader, setLoader] = useState();
  const { value } = useParams();
  const [filterValue, setFilterValue] = useState();
  const dispatch = useDispatch();
  const allLaunches = useSelector((state) => state.allLaunches);
  const { loading } = allLaunches;

  const history = useHistory();
  const handleFilter = (value) => {
    history.push({ pathname: `/${value}` });
    if (value !== "upcoming") {
      dispatch(launchesActions.launchesList());
    } else {
      dispatch(launchesActions.launchesListByFilter(value));
    }
    return value;
  };

  useEffect(() => {
    if (!value) {
      dispatch(launchesActions.launchesList());
    }
    if (value === "upcoming") {
      dispatch(launchesActions.launchesListByFilter(value));
      setFilterValue(value);
    } else {
      dispatch(launchesActions.launchesList());
    }
  }, []);
  console.log("f", filterValue);
  return (
    <div>
      <FilterLaunches handleFilter={handleFilter} />
      <Header />
      <List data={allLaunches} value={filterValue} />
    </div>
  );
};
export default LandingComponent;
