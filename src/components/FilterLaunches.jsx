import { Row, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
const { Option } = Select;
const FilterLaunches = (props) => {
  const { value } = useParams();
  return (
    <Row className="filter_button">
      <div>
        <FilterOutlined style={{ marginRight: "-7px" }} />
        <Select
          style={{ width: 160 }}
          bordered={false}
          defaultValue={value ? value : "all Launches"}
        >
          <Option
            style={{ width: 160 }}
            value={() => props.handleFilter("allLaunches")}
          >
            All launches
          </Option>
          <Option value={() => props.handleFilter("upcoming")}>
            Upcoming launches
          </Option>
          <Option value={() => props.handleFilter("success")}>
            Successfull launches
          </Option>
          <Option value={() => props.handleFilter("failed")}>
            Failed launches
          </Option>
        </Select>
      </div>
    </Row>
  );
};
export default FilterLaunches;
