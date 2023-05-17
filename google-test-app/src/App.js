import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Circle from "./pages/Circle";
import HomePage from "./pages/HomePage";
import Gmail from "./pages/Gmail";
import { Route,Routes } from "react-router-dom";

function App() {
  // let component
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <HomePage/>
  //     break;
  //   case "/circle":
  //     component = <Circle/>
  //     break;
  //   case "/home":
  //     component = <HomePage/>
  //     break;
  //   case "/gmail":
  //       component = <Gmail/>
  //       break;
  // }
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/circle" element={<Circle/>}></Route>
          <Route path="/gmail" element={<Gmail/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
