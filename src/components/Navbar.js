import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Content from './Content';
import Activities from './Activities';
import Culture from './Culture';
import Home from './Home'

class Navbar extends React.Component{
    render() {
      return (
        <BrowserRouter>
        <nav id="nav">
 
<ul className="links">
{/* <li className="active">Home</li>  */}
 {/* <li className="active"><Link to="/Home">Home</Link></li>  */}
   {/* <li><Link to="/Activities">Places</Link></li>
<li><Link to="/Culture">Cultures</Link></li> */}
 </ul>

  <Route path="/Home" exact component={Home}></Route>
   {/* <Route path="/Activities" component={Activities} />
  <Route path="/Culture" component={Culture} />  */}
  				
  <header id="header">
						
</header>
   </nav>
 </BrowserRouter>
      




      )
    }
  }
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
  
  
  export default Navbar;