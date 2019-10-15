import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Activities from './components/Activities';
import Culture from './components/Culture';
import Contact from './components/Contact';
import Footer from './components/Footer';
class App extends React.Component{
  render() {
    return (
      <div className="is-preload">
      <div id="wrapper" className="fade-in">
        <Home/>
      
        <Footer/>
      </div>
      </div>
    )
  }
}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}


export default App;
