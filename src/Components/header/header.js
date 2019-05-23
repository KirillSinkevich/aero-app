import React from 'react';
import Img from '../img/img.js';
import HeaderMenu from '../headerMenu/headerMenu.js';
import logo from '../../images/logo.svg';
import './header.css';

export default class Header extends React.Component {
	render() {
		return <header className='App-header container'>
			<div>
				<Img className={'App-header__logo'} link={logo} name='logo'/>
			</div>
	        <HeaderMenu />
		</header>
	}
}