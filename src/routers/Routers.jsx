import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "../pages/Mainpage";

const Routers = () => {
  return ( <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" exact element={<Mainpage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </> );
}
 
export default Routers;