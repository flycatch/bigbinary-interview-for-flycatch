import React from "react";
import {
    Row, Col, Table, Card, Tag,
  } from 'antd';

const List = (allLaunches) => {
    debugger
    console.log("the data", allLaunches.launches)
    // const data =  allLaunches && allLaunches.launches.map((data) => {
    //     console.log("dta", data.flight_number)
    // })

    const dataSource = [
        {
          no: '1',
          launched: 'Mike',
          location: 32,
          mission: '10 Downing Street',
          orbit: "mars",
          status:"failed",
          rocket:"V1"
        },
      ];
      
      const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          key: 'name',
        },
        {
          title: 'Launched',
          dataIndex: 'launched',
          key: 'age',
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'address',
        },
        {
            title: 'Mission',
            dataIndex: 'mission',
            key: 'address',
          },
          {
            title: 'Orbit',
            dataIndex: 'orbit',
            key: 'address',
          },
          {
            title: 'Launched Status',
            dataIndex: 'status',
            key: 'address',
          },
          {
            title: 'Rocket',
            dataIndex: 'rocket',
            key: 'address',
          },
      ];
    return(
        <div >
         <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default List;