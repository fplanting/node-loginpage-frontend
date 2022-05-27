import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./Routes/Home";
import { NotFound } from "./Routes/NotFound";
import { Login } from "./Routes/Login";
import { Profile } from "./Routes/Profile";
import { Register } from "./Routes/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
