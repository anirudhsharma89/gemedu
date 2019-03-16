import React, { Component } from "react";
import {
  MDBInput,
  MDBInputSelect,
  MDBFormInline,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";
import DocsLink from "./../components/docsLink";
import "./InputPage.css";

class InputPage extends Component {
  constructor() {
    super();
    this.state = {
      value: "Controlled input with value"
    };

    this.nextInputRef = null;
  }

  handleSubmit = event => {
    alert("MDBInput value: " + this.state.value);
    event.preventDefault();
  };

  saveToState = value => this.setState({ value });

  getValue = value => console.log(value);

  handleChange = event => this.setState({ value: event.target.value });

  changeFocus = () => this.nextInputRef.focus();

  render() {
    return (
      <div style={{}}>
        <MDBContainer className="mt-5">
          <h2>Login</h2>
          <MDBContainer style={{ textAlign: "initial" }}>
            <div>
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
              <MDBBtn onClick={this.handleSubmit}>Login</MDBBtn>
              <MDBBtn onClick={this.handleSubmit}>Register</MDBBtn>
            </div>
          </MDBContainer>
        </MDBContainer>
      </div>
    );
  }
}

export default InputPage;
