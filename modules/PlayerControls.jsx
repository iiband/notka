import React from 'react'

export default class PlayerControls extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {

		var playOrPause = 'play'
		var onClick = this.props.onPlay

		if (this.props.playing) {
			playOrPause = 'pause'
			onClick = this.props.onPause
		}

		return (
			<div className="left menu">
				<a id="play" className="ui button icon item" onClick={onClick}>
					<i className={`large ${playOrPause} middle aligned icon`}></i>
				</a>
				<a className="ui icon item" onClick={this.props.onPrev}>
					<i className="middle aligned fast backward icon"></i>
				</a>
				<a className="ui icon item" onClick={this.props.onNext}>
					<i className="middle aligned fast forward icon"></i>
				</a>
			</div>
		)
	}
}