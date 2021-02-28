import React from "react";
import {
  Table,Tag
  } from 'antd';

const List = ({data}) => {
   
  const dataSource=[];
   const formatDataSource = (data)=>{
data.launches.map((launch)=>{
dataSource.push({
flight_number:launch.flight_number,
launch_date_utc:launch.launch_date_utc,
site_name:launch.launch_site.site_name,
mission:launch.mission_name,
orbit:launch.rocket.second_stage.payloads[0].orbit,
launch_success:launch.launch_success===true?  <Tag color="green" style={{borderRadius:"15px"}}>success</Tag>: 
 <Tag  style={{borderRadius:"15px"}}color="red">failed</Tag>,
rocket:launch.rocket.rocket_name
})
})
   }
   if(data.launches.length>15){
     formatDataSource(data);
   }
      const columns = [
        {
          title: 'No',
          dataIndex: 'flight_number',
          key: 'name',
        },
        {
          title: 'Launched',
          dataIndex: 'launch_date_utc',
          key: 'Launched',
        },
        {
          title: 'Location',
          dataIndex: 'site_name',
          key: 'Location',
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
            dataIndex: 'launch_success',
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