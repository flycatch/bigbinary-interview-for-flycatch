import launchesActions from "../actions/launches.action";
import List from "./List";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilterLaunches from "./FilterLaunches";
import FilterByDate from "./FilterByDate";
import { usePath } from "hookrouter";

export const LandingComponent = () => {
  const [dateStart, setStartDate] = useState(null);
  const [loader, setLoader] = useState();
  const { value, startDate, endDate, date } = useParams();
  const [filterValue, setFilterValue] = useState("allLaunches");
  const dispatch = useDispatch();
  const allLaunches = useSelector((state) => state.allLaunches);
  const { loading } = allLaunches;
  const path = usePath();
  const history = useHistory();
  const pathName = (pathName) => {
    history.push({ pathname: pathName });
  };
  const handleFilter = (value) => {
    setFilterValue(value);
    history.push({ pathname: `/${value}` });
    if (value !== "upcoming") {
      dispatch(launchesActions.launchesList());
    } else {
      dispatch(launchesActions.launchesListByFilter(value));
    }
    return value;
  };
  const handleFilterByDate = (startDate, endDate, date) => {
    if (date) {
      dispatch(launchesActions.launchesFilterByDate(null, null, date));
    } else {
      dispatch(launchesActions.launchesFilterByDate(startDate, endDate, null));
    }
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
  return (
    <div>
      <FilterLaunches handleFilter={handleFilter} startDate={startDate} />
      <FilterByDate
        handleFilterByDate={handleFilterByDate}
        value={value}
        pathName={pathName}
      />
      <List data={allLaunches} value={filterValue} />
    </div>
  );
};
export default LandingComponent;
