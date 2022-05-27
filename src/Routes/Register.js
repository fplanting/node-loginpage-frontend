import React, { useState } from "react";
//import Form from "react-validation/build/form";
import AuthService from "../services/auth.service";
import { Button, Container, Form } from "react-bootstrap";
// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="invalid-feedback d-block">This field is required!</div>
//     );
//   }
// };
// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="invalid-feedback d-block">This is not a valid email.</div>
//     );
//   }
// };
// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="invalid-feedback d-block">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };
// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="invalid-feedback d-block">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

export const Register = (props) => {
  // const form = useRef();
  // const checkBtn = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscription, setSubscription] = useState(1);
  // const [successful, setSuccessful] = useState(false);
  // const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeSubscription = (e) => {
    const subscription = e.target.value;
    setSubscription(subscription);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    // setMessage("");
    // setSuccessful(false);
    // form.current.validateAll();
    // if (checkBtn.current.context._errors.length === 0) {
    AuthService.register(email, password, subscription).then(
      (response) => {
        // setMessage(response.data.message);
        // setSuccessful(true);
      }
      // (error) => {
      //   const resMessage =
      //     (error.response &&
      //       error.response.data &&
      //       error.response.data.message) ||
      //     error.message ||
      //     error.toString();
      //   setMessage(resMessage);
      //   setSuccessful(false);
      // }
    );
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
