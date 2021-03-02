import React, { useState } from "react";
import { Table, Tag } from "antd";
import moment from "moment";
import SingleLaunch from "./SingleLaunch";
import { useDispatch, useSelector } from "react-redux";
import launchesActions from "../actions/launches.action";

const List = ({ data }) => {
  const dispatch = useDispatch();
  const allLaunches = useSelector((state) => state.allLaunches);
  const { launchesById } = allLaunches;
  const dataSource = [];
  const formatDataSource = (data) => {
    data.launches.map((launch) => {
      dataSource.push({
        flight_number: launch.flight_number,
        launch_date_utc: moment(launch.launch_date_utc).format(
          "Do MMMM  YYYY, HH:mm"
        ),
        site_name: launch.launch_site.site_name,
        mission: launch.mission_name,
        orbit: launch.rocket.second_stage.payloads[0].orbit,
        launch_success:
          launch.launch_success === true ? (
            <Tag
              color="green"
              style={{ borderRadius: "15px", fontWeight: "bolder" }}
            >
              success
            </Tag>
          ) : (
            <Tag
              style={{ borderRadius: "15px", fontWeight: "bolder" }}
              color="red"
            >
              failed
            </Tag>
          ),
        rocket: launch.rocket.rocket_name,
      });
    });
  };
  if (data.launches.length) {
    formatDataSource(data);
  }
  const [item, setItem] = useState();
  const [visible, setVisible] = useState(false);
  const handleCancel = () => {
    setVisible(false);
  };
  const handleOk = () => {
    setVisible(true);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "flight_number",
      key: "name",
      render: true,
    },
    {
      title: "Launched",
      dataIndex: "launch_date_utc",
      key: "Launched",
      render: true,
    },
    {
      title: "Location",
      dataIndex: "site_name",
      key: "Location",
      render: true,
    },
    {
      title: "Mission",
      dataIndex: "mission",
      key: "address",
      render: true,
    },
    {
      title: "Orbit",
      dataIndex: "orbit",
      key: "address",
      render: true,
    },
    {
      title: "Launched Status",
      dataIndex: "launch_success",
      key: "address",
      render: true,
    },
    {
      title: "Rocket",
      dataIndex: "rocket",
      key: "address",
      render: true,
    },
  ];
  const handleClick = (record) => {
    dispatch(launchesActions.launchById(record.flight_number));
    setItem(record);
    setVisible(true);
  };
  const columnRenderer = (_, record) => {
    return <div onClick={(e) => handleClick(record)}>{_}</div>;
  };
  const getColumns = () =>
    columns.map((column) => {
      if (column.render) {
        column.render = columnRenderer;
      }
      return column;
    });
  return (
    <div>
      <SingleLaunch
        item={launchesById}
        handleCancel={handleCancel}
        handleOk={handleOk}
        visible={visible}
      />
      <Table dataSource={dataSource} columns={getColumns()} />
    </div>
  );
};

export default List;
