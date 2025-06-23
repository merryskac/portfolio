import { HashRouter, Route, Routes } from "react-router-dom";
import Mainpage from "../pages/Mainpage";

const Routers = () => {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" exact element={<Mainpage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default Routers;
