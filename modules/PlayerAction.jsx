import React from 'react'

export default class PlayerAction extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var action = this.props.action;
		if (! action) {
			action = (function(e) {
				console.log(this.props.icon)
			})
		}
		return (
			<a className="ui icon item" onClick={action.bind(this)}>
				<i className={`middle aligned icon ${this.props.icon}`}></i>
			</a>
		)
	}
}