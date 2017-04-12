class Player extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			playing: false,
			track: {
				stream: 'music/song2.mp3',
				artist: 'Олександр Малінін',
				title: 'Ой у лузі червона калина',
				length: 241000
			}
		}
	}
	render() {
		return (
			<div className="ui container player">
				<div className="ui top text menu">
					<audio id="audioElement" style={{display: 'hidden'}}>
						<source src={this.state.track.stream} type="audio/ogg" />
						Your browser can't play music
					</audio>

					<PlayerControls 
						playing={this.state.playing}
						onPlay={this.playOrPause.bind(this)}
						onPause={this.playOrPause.bind(this)}
						onNext={this.playNext.bind(this)}
						onPrev={this.playPrev.bind(this)}
						/>

					<PlayerStatus track={this.state.track}/>
					<PlayerActionBar>
						<PlayerAction icon="plus" />
						<PlayerAction icon="checkmark" />
						<PlayerAction icon="write" />
						<PlayerAction icon="random" />
						<PlayerAction icon="repeat" />
						<PlayerAction icon="feed" />
					</PlayerActionBar>
				</div>
			</div>			
		)
	}

	componentDidMount() {
		this.audioController = new AudioController(document.getElementById('audioElement'));
	}

	playOrPause(e) {
        this.audioController.toggle(function() {
            console.log(this.currentTime() + ':' + this.duration());
        });

        this.setState({ paused: this.state.playing = ! this.state.playing })

		e.preventDefault()
	}

	playNext(e) {
		console.log('playing next')
	}

	playPrev(e) {
		console.log('playing prev')
	}
}