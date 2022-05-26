import React,{useState} from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import './App.css';
import { FaAlignJustify } from 'react-icons/fa';
import NavMenu from "./components/NavMenu";
import NavBar from "./components/NavBar.jsx";


function App() {
    const [showNav, setShowNav] = useState(false);
  return (
    <>
    {/* <div className="toggle"
    
    >
    <FaAlignJustify className="toggle" />
     </div>
    
      <div className="navlinks">
        <ul>
          <div className="navlink-item">
          <li>
            <a href="/">Home</a>
          </li>
            </div>

            <div className="navlink-item">
          <li>
            <Link to="/about">About</Link>
          </li>
            </div>

            <div className="navlink-item">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
            </div>

            <div className="navlink-item">
          <li>
            <Link to="/event">Event</Link>
          </li>
            </div>
        </ul>
       
      </div> */}
      {/* <NavMenu/> */}
      <NavBar/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;

// import React, { Component } from 'react';
// import { FaAlignRight } from 'react-icons/fa';
// import './App.css';

// export default class App extends Component {
//   state = {
//       toggle:false
//   }
//   Toggle = () => {
//       this.setState({toggle:!this.state.toggle})
//   }
//   render() {

//     const NavItem = [
//       {
//           link: "/",
//           text:"Home"
//       },
//       {
//           link: "/about/",
//           text:"About us"
//       },
//       {
//           link: "/contact/",
//           text:"Contact us"
//       }
// ];

//       return (
//         <>

//               <div className="navBar">
//                     <button onClick={this.Toggle}>
//                         <FaAlignRight />
//                     </button>
//                     <ul className={this.state.toggle ? "links show-nav" : "links"}>
//                         {
//                             NavItem.map((objLink, i) => {
//                                 return ( <li key={i}><a href={objLink.link}>{objLink.text}</a></li> )
//                             })
//                         }
//                     </ul>
//               </div>

//         </>
//       );
//   }
// }
