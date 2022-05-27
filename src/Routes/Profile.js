import React from "react";
import AuthService from "../services/auth.service";
import { Button, Container } from "react-bootstrap";

export const Profile = () => {
  const handleSubscription = (e) => {
    e.preventDefault();
    // setMessage("");
    // setSuccessful(false);
    // form.current.validateAll();
    // if (checkBtn.current.context._errors.length === 0) {
    AuthService.updateUser().then(
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
      // setMessage(resMessage);
      //     // setSuccessful(false);
      //   }
    );
  };

  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="main">
      <Container>
        <h3>
          <strong>{currentUser.email}</strong> Profile
        </h3>
        <p>
          <strong>Subscription:</strong> {currentUser.subscription}
        </p>
        <Button variant="dark" onSubmit={handleSubscription}>
          Change subscription
        </Button>
      </Container>
    </div>
  );
};
