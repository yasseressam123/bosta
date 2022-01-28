import React from "react";
import dateFormat from "dateformat";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./shipment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from 'react-i18next';

function ShipmentProgress(props) {
  const { t } = useTranslation();
  return (
    <div className="shipment-progress-container">
      <div className="d-flex flex-wrap progress-steps-container">
        <div className="col-3 progress-steps">
          <p>
          {t('Tracking.ShipmentNo')} <span>{props.orderData?.TrackingNumber}</span>
          </p>
          <h6>{props.orderData?.CurrentStatus?.state.replace("_", " ")}</h6>
        </div>
        <div className="col-3 progress-steps">
          <p>{t('Tracking.LatestUpdate')}</p>
          <h6>
            {dateFormat(
              props.orderData?.CurrentStatus?.timestamp,
              "dddd - dd/mm/yyyy 'at' hh:MMTT"
            )}
          </h6>
        </div>
        <div className="col-3 progress-steps">
          <p>{t('Tracking.MerchantName')}</p>
          <h6>SOUQ.com</h6>
        </div>
        <div className="col-3 progress-steps">
          <p>{t('Tracking.DeliveryTime')}</p>
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
            <p>{t('Tracking.TICKETCREATED')}</p>
          </div>
          <div className="col-3 ship-prog-status">
            <p>{t('PACKAGERECEIVED')}</p>
          </div>
          <div className="col-3 ship-prog-status" style={{textAlign: 'end'}}>
            <p>{t('OUTFORDELIVERY')}</p>
            <p></p>
          </div>
          <div className="col-3 ship-prog-status" style={{textAlign: "end"}}>
            <p>{t('DELIVERED')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentProgress;
