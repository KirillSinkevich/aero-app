import React from 'react';

export default class Img extends React.Component {
	render() {
		return <img className={this.props.className} src={this.props.link} alt={this.props.name}/>
	}
}