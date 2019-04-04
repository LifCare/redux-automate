import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "./actions";

//
class App extends Component {
  componentDidMount() {
    fetch(
      "http://sandbox2.lifcare.in/v5/account/refill/leads/facility?scheduled-at-begins=1554273710557&size=10&facility-id=131"
    )
      .then(data => console.log("data", data))
      .catch(error => console.log("e", error));
  }

  renderText = () => {
    const { pincodeData } = this.props;
    console.log("p", pincodeData);

    if (pincodeData.payload) {
      return <h1>hello world</h1>;
      // return <h1>{pincodeData.payload.hello}</h1>;
    }
  };

  render() {
    console.log("props", this.props);
    return (
      <div onClick={() => this.props.pincode()}>
        hello world
        {this.renderText()}
      </div>
    );
  }
}

function mapStateToProps({ pincode }) {
  return {
    pincodeData: pincode
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
