import dateFormat from "dateformat";
import help from "../../assets/help.jpg"
function ShipmentStatus(props) {
  return (
    <div className="row">
      <div className="col-lg-8 col-12">
        <p className="ship-status-title">Shipment details</p>
        <div style={{overflow: "auto"}}>
          <table>
            <tr>
              <th>Branch</th>
              <th>Date</th>
              <th>Time</th>
              <th>Details</th>
            </tr>
            {props.orderData?.TransitEvents?.map((item) => {
              if (
                item.state !== "NOT_YET_SHIPPED" &&
                item.state !== "RECEIVED_DELIVERY_LOCATION"
              ) {
                return (
                  <tr>
                    <td>{item?.hub ? item.hub : "Nasr City"}</td>
                    <td>{dateFormat(item?.timestamp, "dd/mm/yyyy")}</td>
                    <td>{dateFormat(item?.timestamp, "hh:MMTT")}</td>
                    <td>{item.state.replace("_", " ")}</td>
                  </tr>
                );
              }
            })}
          </table>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <p className="ship-status-title">Delivery address</p>
        <div className="ship-status-address">
          <p>Nozha Airport Road - in front of Police Club - Alexandria, Alexandria Agricultural Road, Qesm Bab</p>
        </div>
        <div className="d-flex flex-wrap ship-status-help">
          <div>
            <img style={{width: 80+'px'}} src={help} alt="help" />
          </div>
          <div>
            <p>Is there a problem with your shipment?</p>
            <button>Report a problem</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShipmentStatus;
