import React from 'react';
import Link from '../link/link.js';

export default class HeaderMenu extends React.Component {
	render() {
		let menus = [
			'Book & Manage',
			'Prepare & Travel',
			'My Account'
		]
		return <div className='App-header-navbar'>
			{menus.map((value, index)=>{
				return <div key={index}><Link label={value} /></div>
			})}
		</div>
	}
}			

/*class Link extends React.Component {
	render() {
		const url = '/';
		return <div>
			<a href={url}>{this.props.label}</a>
		</div>
	}
}*/