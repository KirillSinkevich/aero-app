import React from 'react';
import Link from '../link/link.js';
import './headerMenu.css';

export default class HeaderMenu extends React.Component {
	render() {
		let menus = [
			'Book & Manage',
			'Prepare & Travel',
			'My Account'
		]
		return <div className='App-header-navbar'>
			{menus.map((value, index)=>{
				return <Link label={value} key={index} />;
			})}
		</div>
	}
}			
