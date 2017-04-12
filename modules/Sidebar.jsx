import React from 'react'

class Sidebar extends React.Component {
	render() {
		return (
			<div className="ui left vertical sidebar labeled icon menu">
				<a className="item">
					<i className="music icon"></i>
					Songs
				</a>
				<a className="item">
					<i className="block layout icon"></i>
					Gallery
				</a>
				<a className="item">
					<i className="content icon"></i>
					Playlists
				</a>
			</div>			
		)
	}
}