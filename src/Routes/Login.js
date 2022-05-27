import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import AuthService from "../services/auth.service";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="invalid-feedback d-block">This field is required!</div>
//     );
//   }
// };
export const Login = () => {
  // const form = useRef();
  // const checkBtn = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // setMessage("");
    // setLoading(true);
    // if (checkBtn.current.context._errors.length === 0) {
    AuthService.login(email, password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      }
      // (error) => {
      //   const resMessage =
      //     (error.response &&
      //       error.response.data &&
      //       error.response.data.message) ||
      //     error.message ||
      //     error.toString();
      //   setLoading(false);
      //   setMessage(resMessage);
      // }
    );
    //} else {
    //   setLoading(false);
    // }
  };
  return (
    <div className="main">
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
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

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
