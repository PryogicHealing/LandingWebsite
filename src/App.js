import React  from 'react';
// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './styles/App.css';

import Nav from "./components/Nav";
import Home from "./components/pages/home_page";
import Register from "./components/pages/register_page";
import About from "./components/pages/about_page";
import Testimonials from "./components/pages/testimonials_page";
import Footer from "./components/pages/footer_page";


function App() {
  return (
    <>
      {/* <Router> */}
          <Nav/>
          <Home/>
          <About/>
          <Testimonials/>
          <Register/>
          <Footer/>
          {/* <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/about" exact Component={About} />
            <Route path="/Register" exact Component={Register} />
            <Route path="/Testimonials" exact Component={Testimonials} />
            <Route path="/Footer" exact Component={Footer} />
          </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;

