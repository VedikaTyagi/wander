import { Component } from "react";
import Italy from "Italy.jpg";
import Italy2 from "Italy2.jpeg";
import Rome1 from "rome1.jpeg";
import Rome2 from "rome2.jpeg";
import SA1 from "SA1.jpg";
import SA2 from "SA2.jpg";
import "DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
