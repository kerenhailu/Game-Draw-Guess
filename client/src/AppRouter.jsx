import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home-component";
import Login from "./Components/Pages/Login/Login-component";
import NavBar from "./Components/Features/Navbar/Navbar-component";
import Footer from "./Components/Features/Footer/Footer-component";
import { UsersContext } from "./Context/User/User-context";
import { useContext } from "react";
// import Admin from "./Components/Pages/Admin/Admin-component";
// import AdminTab from "./Components/Features/AdminTab/AdminTab-component";
import Draw from './Components/Pages/Draw/draw-component';
import Guess from './Components/Pages/Guess/guess-component';
import Words from './Components/Pages/Words/words-component';
import Waiting from './Components/Pages/Waiting/waiting-component';

import StickyLight from "./Components/Features/StickyLight/StickLight-component";


export const AppRouter = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UsersContext);
  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && <NavBar />}
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={isLoggedIn ? <Home /> : <Login />}></Route>
            <Route exact path="/home" element={<Home />}> </Route>
            <Route exact path="/draw" element={<Draw />}> </Route>
            <Route exact path="/guess" element={<Guess />}> </Route>
            <Route exact path="/waiting" element={<Waiting />}> </Route>
            <Route exact path="/words" element={<Words />}> </Route>


            {/* <Route className="adminRoutContainer" exact path="/admin" element={<Admin />}>
              <Route exact path=":AdminTab" element={<AdminTab />} />
            </Route> */}

          </Routes>
        </div>
        {/* {isLoggedIn?<Footer />: null} */}
        {/* <Footer/> */}
        {isLoggedIn && <Footer />}
      </BrowserRouter>


    </div>
  );
};
