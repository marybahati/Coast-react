import React from 'react'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Content from './Content';
import Activities from './Activities';
import Culture from './Culture';
import Navbar from './Navbar';
import Contact from './Contact';

class Home extends React.Component{
    render() {
      return (
<div>
          <div id="intro">
						<h1>The<br />
						Beauty of the coast</h1>
						
						<ul className="actions">
							<li><a href="#header" className="oi oi-arrow-thick-bottombutton icon solid solo fa-arrow-down scrolly">Continue</a><span class=""></span></li>
						</ul>
			</div>


        <Navbar/>
        <Content/>
        

    </div>

      )
    }
  }
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
  
  
  export default Home;