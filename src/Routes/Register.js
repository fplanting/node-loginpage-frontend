import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Button, Container, Form } from "react-bootstrap";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscription, setSubscription] = useState(false);
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeSubscription = (e) => {
    setSubscription(!subscription);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(email, password, subscription).then((response) => {
      navigate("/Login");
    });
  };
  return (
    <div className="main">
      <Container>
        <h1>Fill in your information</h1>
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={onChangeEmail}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={onChangePassword}
            />
          </Form.Group>
          {/* <Form.Group controlId="formBasicSubscription">
            <Form.Label>Subscription</Form.Label>
            <Form.Control
              type="subscription"
              value={subscription}
              placeholder="subscription"
              onChange={onChangeSubscription}
            />
          </Form.Group> */}
          <Form.Check
            type="switch"
            id="custom-switch"
            value={subscription}
            onChange={onChangeSubscription}
            label="Do you want to subscribe to the newsletter?"
          />
          <Button variant="dark" type="submit">
            Sign up
          </Button>
        </Form>
      </Container>
    </div>
  );
};
