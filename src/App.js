import React from 'react';
//import iconMenu from './images/icon-menu.svg';
//import iconPlane from './images/icon-plane.svg';
import './App.css';
import './App.less';
import Header from './Components/header/header.js';
import Button from './Components/button/button.js';
import Svg from './Components/svg/svg.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container container--center'>
        <div className='column column--left'>
          <div className='navbar'>
            <div className="navbar__btn">
              <Button type='menu'/>
              <Button type=''/>
            </div>
            <svg className="svg-icon">
              <use xlinkHref="#svg-plane"></use>
            </svg>
            <Svg type='plane' />
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
