import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home-component";
import NavBar from "./Components/Features/Navbar/Navbar-component";
import Footer from "./Components/Features/Footer/Footer-component";
import Draw from './Components/Pages/Draw/draw-component';
import Guess from './Components/Pages/Guess/guess-component';
import Words from './Components/Pages/WordsLevel/words-component';
import Waiting from './Components/Pages/Waiting/waiting-component';

export const AppRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route exact path="/draw" element={<Draw />}> </Route>
            <Route exact path="/guess" element={<Guess />}> </Route>
            <Route exact path="/waiting" element={<Waiting />}> </Route>
            <Route exact path="/words" element={<Words />}> </Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>


    </div>
  );
};
