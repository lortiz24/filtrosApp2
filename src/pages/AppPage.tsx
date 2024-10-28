import { Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Register } from "../components/register/Register";

export const AppPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
