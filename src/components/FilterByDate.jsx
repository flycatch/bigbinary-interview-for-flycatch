import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { Row, Col } from "antd";
import moment from "moment";
import { DatePicker, Space } from "antd";

const FilterByDate = (props) => {
  const dateFormat = "YYYY-MM-DD";
  const [dateFilter, setDateFilter] = useState();
  const [filterData, setFilterData] = useState("Past week");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const selectDateCategory = (key) => {
    setStartDate(moment().utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"));
    if (key === "Past Week") {
      setEndDate(
        moment().subtract(7, "days").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
      );
    } else if (key === "Past month") {
      setEndDate(
        moment().subtract(1, "month").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
      );
    } else if (key === "Past 3 months") {
      setEndDate(
        moment().subtract(3, "month").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
      );
    } else if (key === "Past 6 months") {
      setEndDate(
        moment().subtract(6, "month").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
      );
    } else if (key === "Past year") {
      setEndDate(
        moment().subtract(1, "year").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
      );
    } else if (key === "Past 2 year") {
      setEndDate(
        moment().subtract(2, "year").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
      );
    }
    setFilterData(key);
    setDateFilter(false);
    props.handleFilterByDate(startDate, endDate, null);
    if (props.value) {
      props.pathName(`/${key}`);
    } else {
      props.pathName(`/allLaunches/${key}`);
    }
  };

  const singleDateChange = (date) => {
    if (date !== null) {
      props.pathName(
        `/${moment(date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")}`
      );
      props.handleFilterByDate(
        null,
        null,
        moment(date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
      );
    } else {
      props.pathName(`/`);
      props.handleFilterByDate(null, null, null);
    }
  };
  const dateFilterList = [
    "Past Week",
    "Past month",
    "Past 3 months",
    "Past 6 months",
    "Past year",
    "Past 2 year",
  ];

  return (
    <>
      <input
        onClick={() => setDateFilter(true)}
        value={filterData}
        className="filter"
      />
      <DatePicker
        defaultValue={moment()}
        format={dateFormat}
        onChange={singleDateChange}
      />
      {dateFilter && (
        <Modal
          visible={dateFilter}
          onCancel={() => setDateFilter(false)}
          onOk={false}
          footer={false}
        >
          <Row>
            <ul>
              {dateFilterList.map((filter) => {
                return (
                  <li key={filter} onClick={() => selectDateCategory(filter)}>
                    {filter}
                  </li>
                );
              })}
            </ul>
          </Row>
        </Modal>
      )}
    </>
  );
};

export default FilterByDate;
