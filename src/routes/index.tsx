import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/card/id"></Route>
      <Route path="/user/id"></Route>
      <Route path="*" element={<Home />}></Route>
    </Routes>
  );
}
