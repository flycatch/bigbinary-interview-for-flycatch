import { Modal, Tag } from "antd";
import { useEffect, useState } from "react";
import moment from "moment";
import launchesActions from "../actions/launches.action";
import { Row, Col } from "antd";
export const SingleLaunch = (props) => {
  return (
    <>
      {props.item.links && (
        <Modal
          visible={props.visible}
          onCancel={props.handleCancel}
          onOk={false}
          footer={false}
        >
          <Row>
            <Col className="image_header">
              <img
                src={props.item.links.flickr_images[0]}
                width="150px"
                alt="image"
              />
            </Col>
            <Col className="info_header">
              <Row>
                <Col className="mission_name">{props.item.mission_name}</Col>
                <Col>
                  {props.item.launch_success === true ? (
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
                  )}
                </Col>
              </Row>
              <Row className="rocket_name">{props.item.rocket.rocket_name}</Row>
              <Row>
                <Col className="nasa">
                  <img src="./nasa.png" width="20px" />
                </Col>
                <Col className="nasa">
                  <img src="./wiki.png" width="20px" />
                </Col>
                <Col>
                  <img src="./youtube.png" width="20px" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <div className="details">{props.item.details}</div>
          </Row>
          <Row style={{ paddingTop: "60px" }}>
            <Row className="row">
              <span className="title">Flight Number</span>
              <span className="titleNumber">{props.item.flight_number}</span>
            </Row>
            <Row className="row">
              <span className="title">Mission Name</span>
              <span className="titleNumber">{props.item.mission_name}</span>
            </Row>
            <Row className="row">
              <span className="title">Rocket Type</span>
              <span className="titleNumber">
                {props.item.rocket.rocket_type}
              </span>
            </Row>
            <Row className="row">
              <span className="title">Rocket Name</span>
              <span className="titleNumber">
                {props.item.rocket.rocket_name}
              </span>
            </Row>
            <Row className="row">
              <span className="title">Manufacturer</span>
              <span className="titleNumber">
                {props.item.rocket.second_stage.payloads[0].manufacturer}
              </span>
            </Row>
            <Row className="row">
              <span className="title">Nationality</span>
              <span className="titleNumber">
                {props.item.rocket.second_stage.payloads[0].nationality}
              </span>
            </Row>
            <Row className="row">
              <span className="title">Launch Date</span>
              <span className="titleNumber">
                {moment(props.item.launch_date_utc).format(
                  "Do MMMM  YYYY, HH:mm"
                )}
              </span>
            </Row>
            <Row className="row">
              <span className="title">Payload Type</span>
              <span className="titleNumber">
                {props.item.rocket.second_stage.payloads[0].payload_type}
              </span>
            </Row>
            <Row className="row">
              <span className="title">Orbit</span>
              <span className="titleNumber">
                {props.item.rocket.second_stage.payloads[0].orbit}
              </span>
            </Row>
            <Row className="row">
              <span className="title">Launch Site</span>
              <span className="titleNumber">
                {" "}
                {props.item.launch_site.site_name}
              </span>
            </Row>
          </Row>
        </Modal>
      )}
    </>
  );
};
export default SingleLaunch;
