import { Route, Routes } from "react-router-dom";
import { CardPage } from "../pages/CardPage";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/card/:id" element={<CardPage />}></Route>
      <Route path="/user/:id"></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Home />}></Route>
    </Routes>
  );
}
