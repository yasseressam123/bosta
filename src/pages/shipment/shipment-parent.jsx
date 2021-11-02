import { React, Component } from "react";
import ShipmentProgress from "./shipment-progress";
import "./shipment.css";
import ShipmentStatus from "./shipment-status";

class Shipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackingNo: 0,
      present: 0,
      color: "linear-gradient(to right, #7CCC5B, #7CCC5B)",
    };
  }

  componentDidMount() {
    const id = this.props.location.search.split("?")[1];
    this.setState({
      trackingNo: id,
      orderData: [],
    });
    fetch(`https://tracking.bosta.co/shipments/track/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("ghgghfgh", data);
        this.setState({
          orderData: data,
        });
        switch (data?.CurrentStatus?.state) {
          case "TICKET_CREATED":
            this.setState({
              present: 0,
            });
            break;
          case "PACKAGE_RECEIVED":
            this.setState({
              present: 33,
            });
            break;
          case "IN_TRANSIT":
            break;
          case "NOT_YET_SHIPPED":
            break;
          case "OUT_FOR_DELIVERY":
            this.setState({
              present: 66,
            });
            break;
          case "WAITING_FOR_CUSTOMER_ACTION":
            this.setState({
              present: 66,
              color:""
            });
            break;
          case "RECEIVED_DELIVERY_LOCATION":
            break;
          case "DELIVERED_TO_SENDER":
          case "DELIVERED":
            this.setState({
              present: 100,
            });
            break;
          default:
            break;
        }
      });
  }

  render() {
    return (
      <div className="shipment">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ShipmentProgress
                orderData={this.state.orderData}
                present={this.state.present}
              />
            </div>
            <div className="col-12">
              <ShipmentStatus orderData={this.state.orderData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Shipment;
