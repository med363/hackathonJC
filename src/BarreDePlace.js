import React from "react";
import axios from "axios";
import "./App.css";

export default class Pose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const Question = {
      question: this.state.question,
    };
    axios
      .post("http://localhost:5001/question", Question)
      .then((res) => {
        if (res.status == 200) {
          this.props.history.push("/Components/AjoutVoyage");
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div style={{ marginTop: "-64%" }}>
        <h1 className="title" style={{ textAlign: "center", color: "white" }}>
          Poser vos question à l'agent de la municipalité
        </h1>
        <input
          className="input1"
          style={{
            height: "5vh",
            borderRadius: "1em",
            marginTop: "50px",
            marginLeft: "29%",
            width: "40%",
          }}
          name="question"
          type="text"
          onChange={(e) => e.target.value}
          placeholder="&#xf0bd;Search ..."
        />
      </div>
    );
  }
}
