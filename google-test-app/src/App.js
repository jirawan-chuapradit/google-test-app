import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Circle from "./pages/Circle";
import HomePage from "./pages/HomePage";
import Gmail from "./pages/Gmail";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <HomePage/>
      break;
    case "/circle":
      component = <Circle/>
      break;
    case "/home":
      component = <HomePage/>
      break;
    case "/gmail":
        component = <Gmail/>
        break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
      {component}
      </div>
      <Footer />
    </>
  );
}

export default App;
