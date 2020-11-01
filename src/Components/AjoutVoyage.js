import React from "react";
import bootstrap from "react-bootstrap";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "../App.css";

export default class Ajout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartier: "",
      date: "",
      time: "",
      natureDeDechets: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const Ajout = {
      cartier: this.state.cartier,
      date: this.state.date,
      time: this.state.time,
      natureDeDechets: this.state.nature,
    };
    axios
      .post("http://localhost:5001/voyage", Ajout)
      .then((res) => {
        if (res.status == 200) {
          this.props.history.push("/Components/HomePage");
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        
        <div className="container-contact1">
          
          <Form
            style={{
              marginTop: "20%",
              height: "450px",
              marginRight: "30%",
              marginLeft: "18%",
              border: "1px none blue",
              padding: "30px,30px,30px,30px",
              backgroundColor: "lightblue",
              margin: "177px",
              padding: " 20px",
            }}
          >
            
            <Row form>
              <Col md={6}>
                <FormGroup>
                  
                  <Label for="cartier">cartier</Label>
                  <Input
                    className="wrap-input1 validate-input"
                    type="text"
                    name="cartier"
                    id="cartier"
                    placeholder=".."
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">date de sortie un camion</Label>
                  <Input
                    className="input1"
                    className="wrap-input1 validate-input"
                    type="date"
                    name="date"
                    id="date"
                    placeholder="jj/mm/aaaa"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="nature">temps</Label>
              <Input
                className="shadow-input1"
                className="input1"
                type="time"
                name="time"
                id="time"
                placeholder="hh.mm"
              />
            </FormGroup>
            <FormGroup>
              <Label for="nature">natureDeDechets</Label>
              <Input
                className="shadow-input1"
                className="input1"
                type="text"
                name="nature"
                id="nature"
                placeholder="verre ou plastique ou alimentaire"
              />
            </FormGroup>

            <input type="submit" className="btn btn-primary" value="Envoyer" />
          </Form>
        </div>
      </div>
    );
  }
}
