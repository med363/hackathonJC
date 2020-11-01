import React, { Component } from "react";
import axios from "axios";

export default class AllVoyage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Voyages: [],
      _id: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/voyage")
      .then((res) => {
        console.log("res: ", res);
        this.setState({ Voyages: res.data });
      })

      .catch((err) => console.log("err: ", err));
  }
  componentDidUpdate(prevprops, prevState) {
    if (prevState.Voyages.length != this.state.Voyages.length) {
      axios.get("http://localhost:5001/voyage").then((res) => {
        console.log("res: ", res);
        this.setState({ Voyages: res.data });
      });
    }
  }
  render() {
    return (
      <div>
        <h1></h1>
        <div
          style={{ display: "flex", marginLeft: "150px", marginTop: "200px" }}
        >
          {this.state.Voyages.map((item) => (
            <div
              key={item._id}
              style={{
                backgroundColor: "lightblue",
                margin: "10px",
                padding: " 20px",
              }}
            >
              cartier:<p>{item.cartier}</p>
              date:<span>{item.date}</span>
              <br />
              time:<span>{item.time}</span>
              <br />
              nature du déchét<p>{item.natureDeDechet}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
