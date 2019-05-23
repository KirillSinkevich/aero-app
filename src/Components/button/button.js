import React from 'react';
//import Img from '../img/img.js';
import Svg from '../svg/svg.js';
import './button.css';

export default class Button extends React.Component {
	render() {
		return <button className='navbar__btn' type="image" >
			<Svg />
		</button>;
	}
}