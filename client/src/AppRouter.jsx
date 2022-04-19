import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home-component";
import NavBar from "./Components/Features/Navbar/Navbar-component";
import Footer from "./Components/Features/Footer/Footer-component";
import Draw from './Components/Pages/Draw/draw-component';
import Guess from './Components/Pages/Guess/guess-component';
import Words from './Components/Pages/WordsLevel/words-component';
import Waiting from './Components/Pages/Waiting/waiting-component';
import Easy from "./Components/Features/Level/Easy/easy-component";
import Middle from "./Components/Features/Level/Middle/middle-component";
import Hard from "./Components/Features/Level/Hard/hard-component";
import Right from "./Components/Features/Answers/Right/right-component";
import Wrong from "./Components/Features/Answers/Wrong/wrong-component";

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
            {/* <Route exact path="/easy" element={<Easy />}> </Route>
            <Route exact path="/middle" element={<Middle />}> </Route>
            <Route exact path="/hard" element={<Hard />}> </Route> */}
            <Route exact path="/right" element={<Right />}> </Route>
            <Route exact path="/wrong" element={<Wrong />}> </Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>


    </div>
  );
};
