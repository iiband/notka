import React from 'react'
import Playlist from './Playlist'
import PlaylistSearch from './PlaylistSearch'
import Player from './Player'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<div id="mainMenu" className="ui top inverted borderless menu">
					<a className="item">
						<i className="home icon"></i>
					</a>
					<div className="item right">
						<div id="subscribe" className="ui animated fade inverted teal button" tabIndex="0">
							<div className="visible content">Sign-up for a Pro account</div>
							<div className="hidden content">
								$2.99 a month
							</div>
						</div>
					</div>
				</div>
				<div id="contentBody">
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
					<div className="ui pusher">
						<div className="ui grid">
							<div className="four wide column">
							</div>
							<div className="eight wide column">
								<Player />
								<PlaylistSearch />
								<Playlist />
							</div>
						</div>
					</div>
				</div>
			</div>			
		)
	}
}