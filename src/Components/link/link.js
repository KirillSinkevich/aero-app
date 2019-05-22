import React from 'react';

/*export default class Link extends React.Component {
	render() {
		return <a>{this.props.name}</a>;
	}
}*/
//const export  Link = (props) => <a>{props.name}</a>;

/*export default function Link(props) {
	return <a>{props.name}</a>;
}*/

export default class Link extends React.Component {
	render() {
		const url = '/';
		return <div>
			<a href={url}>{this.props.label}</a>
		</div>
	}
}