import dateFormat from "dateformat";
import help from "../../assets/help.jpg";
import { useTranslation } from 'react-i18next';


function ShipmentStatus(props) {
  const { t } = useTranslation();

  return (
    <div className="row">
      <div className="col-lg-8 col-12">
        <p className="ship-status-title">{t('Tracking.ShipmentDetails')}</p>
        <div style={{ overflow: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>{t('Tracking.Branch')}</th>
                <th>{t('Tracking.Date')}</th>
                <th>{t('Tracking.Time')}</th>
                <th>{t('Tracking.Details')}</th>
              </tr>
            </thead>
            <tbody>
              {props.orderData?.TransitEvents?.map((item) => {
                if (
                  item.state !== "NOT_YET_SHIPPED" &&
                  item.state !== "RECEIVED_DELIVERY_LOCATION"
                ) {
                  return (
                    <tr key={item.timestamp}>
                      <td>{item?.hub ? item.hub : "Nasr City"}</td>
                      <td>{dateFormat(item?.timestamp, "dd/mm/yyyy")}</td>
                      <td>{dateFormat(item?.timestamp, "hh:MMTT")}</td>
                      <td>{item.state.replace("_", " ")}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <p className="ship-status-title">{t('Tracking.DeliveryAddress')}</p>
        <div className="ship-status-address">
          <p>
          {t('Tracking.Address')}
          </p>
        </div>
        <div className="d-flex flex-wrap ship-status-help">
          <div>
            <img style={{ width: 80 + "px" }} src={help} alt="help" />
          </div>
          <div>
            <p>{t('Tracking.problem')}</p>
            <button>{t('Tracking.report')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShipmentStatus;
