import React, { Component } from "react";
import axios from "axios";

export default class AllVoyage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Question: [],
      _id: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/question")
      .then((res) => {
        console.log("res: ", res);
        this.setState({ Question: res.data });
      })

      .catch((err) => console.log("err: ", err));
  }
  componentDidUpdate(prevprops, prevState) {
    if (prevState.Question.length != this.state.Question.length) {
      axios.get("http://localhost:5001/question").then((res) => {
        console.log("res: ", res);
        this.setState({ Question: res.data });
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
          {this.state.Question.map((item) => (
            <div
              key={item._id}
              style={{
                backgroundColor: "lightblue",
                margin: "10px",
                padding: " 20px",
              }}
            >
              <p>{item.Question}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
