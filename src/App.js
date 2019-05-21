import React from 'react';
import logo from './images/logo.svg';
import iconMenu from './images/icon-menu.png';
import iconPlane from './images/icon-plane.png';
import './App.css';
import Link from './Components/link/link.js';

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <img src={logo} alt="logo"/>
        <nav className='App-header-navbar'>
          <Link name='Book & Manage'/>
          <Link name='Prepare & Travel'/>
          <Link name='My Account'/>
        </nav>
      </header>
      <main className='container'>
        <div className='left-container'>
          <div className='main-navbar'>
            <div class="navbar-icon">
              <button class="icon-menu" type="image">
                 <img src={iconMenu} alt="menu"/>
              </button>
              <button class="icon-plane" type="image">
                <img src={iconPlane} alt="plane"/>
              </button>
            </div>
          <nav class="navbar-menu">
            <ul class="topmenu">
              <li class="first-li">
                <a class="topmenu-style">flights</a>
                <ul class="sub-menu"></ul>
              </li>
              <li class="second-li">
                <a class="topmenu-style">rent car</a>
                <ul class="rent-car"></ul>
              </li>
              <li class="third-li">
                <a class="topmenu-style">hotel</a>
                <ul class="hotels"></ul>
              </li>
            </ul>
          </nav>
          </div>
        </div>
        <div className='right-container'>
        </div>
      </main>
    </div>
  );
}

export default App;
