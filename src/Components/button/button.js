import React from 'react';
//import iconMenu from '../../images/icon-menu.svg';
import Img from '../img/img.js';
import './button.css';

export default class Button extends React.Component {
	render() {
		return <button className="icon-menu" type="image" >
			<Img className={this.props.classNameImg} link={this.props.linkImg} name={this.props.nameImg}/>	  
		</button>;
	}
}