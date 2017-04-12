class Playlist extends React.Component {
	render() {		
		return (
			<div className="ui container playlist">
				<div className="ui relaxed list">
					<div className="item">
						<div className="right floated content">
							<div className="mini ui icon basic button" style={{boxShadow: 'none'}}>
								<i className="aligned write icon"></i>
							</div>
							<div className="mini ui icon basic button" style={{boxShadow: 'none'}}>
								<i className="aligned plus icon"></i>
							</div>
							<div className="mini ui icon basic button" style={{boxShadow: 'none'}}>
								<i className="aligned remove icon"></i>
							</div>
							<div className="mini ui icon basic button" style={{boxShadow: 'none'}}>
								<i className="aligned sound icon"></i>
							</div>
							<div className="mini ui icon basic button" style={{boxShadow: 'none'}}>
								<i className="aligned checkmark icon"></i>
							</div>
						</div>
						<i className="big video play middle aligned icon"></i>
						<div className="content middle aligned">
							Within Temptation &mdash; Say My Name
						</div>
					</div>

					<div className="item">
						<div className="right floated content">
							<span>4:33</span>
						</div>
						<i className="big pause circle middle aligned icon"></i>
						<div className="content middle aligned">
							Kavinsky &mdash; Testarossa Nightdrive
						</div>
					</div>
					<div className="item">
						<i className="big video play middle aligned icon"></i>
						<div className="content middle aligned">
							Kavinsky &mdash; Testarossa Nightdrive
						</div>
					</div>
					<div className="item">
						<i className="big video play middle aligned icon"></i>
						<div className="content middle aligned">
							Tenacious D &mdash; Master Exploder
						</div>
					</div>
				</div>
			</div>
		)
	}
}