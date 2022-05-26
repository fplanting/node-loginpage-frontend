import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./screens/Home";
import { NotFound } from "./screens/NotFound";
import { Login } from "./screens/Login";
import { LoggedIn } from "./screens/LoggedIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoggedIn" element={<LoggedIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
