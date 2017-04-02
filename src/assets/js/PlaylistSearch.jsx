class PlaylistSearch extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		content: [{
		        name: 'Kavinsky'
		    }, {
		        name: 'Within Temptation'
		    }, {
		        name: 'Dream Theater'
		    }, {
		        name: 'Ozzy Osbourne'
		    }, {
		        name: 'Metallica'
		    }, {
		        name: 'PillowTalk'
		    }, {
		        name: 'Slayer'
		    }, {
		        name: 'DJ Koze'
		    }, {
		        name: 'Crazy Penis'
		    }, {
		        name: 'Def Leppard'
		    }, {
		        name: 'Queen'
		    }, {
		        name: 'Creedence Clearwater Revival'
		    }, {
		        name: 'AC/DC'
		    }, ]
		}
	}
	render() {
		return (
			<div className="ui container">
				<div className="ui fluid search">
					<div className="ui icon input" style={{width: '100%'}}>
						<input className="prompt" type="text" placeholder="Search songs..." style={{borderRadius: '5px'}}></input>
						<i className="search icon"></i>
					</div>
					<div className="results"></div>
				</div>
			</div>
		)
	}

	componentDidMount() {
	    $('.ui.search')
	        .search({
	            source: this.state.content,
	            searchFields: [
	                'name'
	            ],
	            fields: {
	                title: 'name'
	            }
	        });
	}
}
