import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { Button, Container } from "react-bootstrap";

export const Profile = () => {
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState(false);

  const handleSubscription = (e) => {
    console.log("Handle");
    e.preventDefault();
    AuthService.updateUser(!subscription).then((response) => {
      console.log("Update");
      setSubscription(response.data.data.subscription);
    });
  };

  useEffect(() => {
    AuthService.getCurrentUser().then((response) => {
      let data = response.data.data;
      setEmail(data.email);
      setSubscription(data.subscription);
    });
  });
  return (
    <div className="main">
      <Container>
        <h3>
          <strong>Hello {email}</strong>
        </h3>
        <p>
          <strong>Are you a subscriber of our newsletter? </strong>
          {subscription ? "Yes" : "No"}
        </p>
        <Button variant="dark" onClick={handleSubscription}>
          Change subscription
        </Button>
      </Container>
    </div>
  );
};
