import React from 'react'

export default class PlayerActionBar extends React.Component {
	render() {
		return (
			<div className="right menu">
				{this.props.children}
			</div>
		)
	}
}