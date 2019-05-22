import React from 'react';
import Img from '../img/img.js';
import HeaderMenu from '../headerMenu/headerMenu.js';
import logo from '../../images/logo.svg';
import './header.less';

export default class Header extends React.Component {
	render() {
		return <div className='App-header'>
			<Img link={logo} name='logo'/>
	        <HeaderMenu />
		</div>
	}
}