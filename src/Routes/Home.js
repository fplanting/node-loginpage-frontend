import { Button, Container, Row } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to login-page</h1>
            </div>
            <div>
              <div className="buttonContainer">
                <Link to="/login">
                  <Button size="lg" className="landingButton" variant="dark">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    size="lg"
                    className="landingButton"
                    variant="outline-dark"
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
