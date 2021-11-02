import React, { useState } from "react";
import dateFormat from "dateformat";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./shipment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function ShipmentProgress(props) {

  return (
    <div className="shipment-progress-container">
      <div className="d-flex flex-wrap progress-steps-container">
        <div className="col-3 progress-steps">
          <p>
            Shipment No. <span>{props.orderData?.TrackingNumber}</span>
          </p>
          <h6>{props.orderData?.CurrentStatus?.state.replace("_", " ")}</h6>
        </div>
        <div className="col-3 progress-steps">
          <p>Latest Update</p>
          <h6>
            {dateFormat(
              props.orderData?.CurrentStatus?.timestamp,
              "dddd - dd/mm/yyyy 'at' hh:MMTT"
            )}
          </h6>
        </div>
        <div className="col-3 progress-steps">
          <p>Merchant name</p>
          <h6>SOUQ.com</h6>
        </div>
        <div className="col-3 progress-steps">
          <p>Delivery time within</p>
          <h6>3 january 2020</h6>
        </div>
      </div>
      <div className="progress-steps-status">
        <div>
          <ProgressBar
            percent={props.present}
            filledBackground="linear-gradient(to right, #7CCC5B, #7CCC5B)"
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <FontAwesomeIcon
                  className="progress-check"
                  icon={faCheckCircle}
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <FontAwesomeIcon
                  className="progress-check"
                  icon={faCheckCircle}
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <FontAwesomeIcon
                  className="progress-check"
                  icon={faCheckCircle}
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <FontAwesomeIcon
                  className="progress-check"
                  icon={faCheckCircle}
                />
              )}
            </Step>
          </ProgressBar>
        </div>
        <div className="d-flex flex-wrap">
          <div className="col-3 ship-prog-status">
            <p>TICKET CREATED</p>
          </div>
          <div className="col-3 ship-prog-status">
            <p>PACKAGE RECEIVED</p>
          </div>
          <div className="col-3 ship-prog-status" style={{textAlign: 'end'}}>
            <p>OUT FOR DELIVERY</p>
            <p></p>
          </div>
          <div className="col-3 ship-prog-status" style={{textAlign: "end"}}>
            <p>DELIVERED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentProgress;
