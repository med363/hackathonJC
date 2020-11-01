import React, { Component } from "react";
import axios from "axios";

export default class AllContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      _id: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/contacts1")
      .then((res) => {
        console.log("res: ", res);
        this.setState({ contact: res.data });
      })

      .catch((err) => console.log("err: ", err));
  }
  componentDidUpdate(prevprops, prevState) {
    if (prevState.contact.length != this.state.contact.length) {
      axios.get("http://localhost:5001/contacts1").then((res) => {
        console.log("res: ", res);
        this.setState({ contact: res.data });
      });
    }
  }
  render() {
    return (
      <div>
        <h1>All Contacts Component</h1>
        <div
          style={{ display: "flex", marginLeft: "150px", marginTop: "200px" }}
        >
          {this.state.contact.map((item) => (
            <div
              key={item._id}
              style={{
                backgroundColor: "lightblue",
                margin: "10px",
                padding: " 20px",
              }}
            >
              <p>{item.name}</p>
              <span>{item.email}</span>
              <span>{item.cartier}</span>
              <span>{item.numero}</span>
              <p>{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
