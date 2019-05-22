import React from 'react';
import iconMenu from './images/icon-menu.svg';
import iconPlane from './images/icon-plane.svg';
import './App.css';
import './App.less';
import Header from './Components/header/header.js';
import Button from './Components/button/button.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container'>
        <div className='column column-left'>
          <div className='main-navbar'>
            <div className="left-container-navbar-icon">
              <Button classNameImg={'icon-menu'} linkImg={iconMenu} nameImg={'icon-menu'}/>
              <Button classNameImg={'icon-plane'} linkImg={iconPlane} nameImg={'icon-plane'}/>
            </div>
            {/*<nav className="navbar-menu">
              <ul className="topmenu">
                <li className="first-li">
                  <a className="topmenu-style">flights</a>
                  <ul className="sub-menu"></ul>
                </li>
                <li className="second-li">
                  <a className="topmenu-style">rent car</a>
                  <ul className="rent-car"></ul>
                </li>
                <li className="third-li">
                  <a className="topmenu-style">hotel</a>
                  <ul className="hotels"></ul>
                </li>
              </ul>
            </nav>*/}
          </div>
        </div>
        <div className='right-container'>
        </div>
      </main>
    </div>
  );
}

export default App;
