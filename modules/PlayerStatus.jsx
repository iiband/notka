import React from 'react'

export default class PlayerStatus extends React.Component {
	render() {
		return (
			<div className="ui item">
				<div className="ui basic segment" style={{padding: 0, width: '100%'}}>
					<div className="ui text menu" style={{margin: 0}}>
						<div className="left menu">
							<div id="react-container" className="item">
								<a className="header hidden"></a>
							</div>
						</div>
						<div className="item">
							<a className="description">{this.props.track.artist} - {this.props.track.title}</a>
						</div>
						<div className="right menu">
							<div className="item">
								<a>4:01</a>
							</div>
						</div>
					</div>
					<div className="ui bottom attached progress">
						<div className="bar"></div>
					</div>
				</div>
			</div>
		)
	}
}