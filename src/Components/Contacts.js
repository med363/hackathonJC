import React from "react";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import axios from "axios";
export default class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cartier: "",
      numero: "",
      message: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const contactes = {
      name: this.state.name,
      email: this.state.email,
      cartier: this.state.cartier,
      numero: this.state.numero,
      message: this.state.message,
    };
    axios
      .post("http://localhost:5001/contacts1", contactes)
      .then((res) => {
        if (res.status == 200) {
          this.props.history.push("/Components/AllContacts");
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="container-contact1" style={{ background: "ligthblue" }}>
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
                  <Label for="name">Nom</Label>
                  <Input
                    className="wrap-input1 validate-input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="amine"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">email</Label>
                  <Input
                    className="input1"
                    className="wrap-input1 validate-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="exemple@gmail.com"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="cartier">cartier</Label>
              <Input
                className="shadow-input1"
                className="input1"
                type="text"
                name="cartier"
                id="cartier"
                placeholder="bab bhar"
              />
            </FormGroup>
            <FormGroup>
              <Label for="numero">numero</Label>
              <Input
                className="shadow-input1"
                className="input1"
                type="tel"
                name="numero"
                id="cartier"
                placeholder="55215634"
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">message</Label>
              <textarea
                className="shadow-input1"
                className="input1"
                col="420"
                row="210"
                name="message"
                id="cartier"
                placeholder="quelle le pb devant vos?"
              />
            </FormGroup>
            <input type="submit" className="btn btn-primary" value="Envoyer" />
          </Form>
        </div>
      </div>
    );
  }
}
