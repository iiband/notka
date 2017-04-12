import React from 'react'

export default class About extends React.Component {
	loginStatusCallback(response) {
		console.log(response)
	}

	tellFriends() {
		FB.login(function(response) {
			if (response.authResponse) {
				var accessToken = response.authResponse.accessToken
				console.log(response)
				FB.api('/me', function(response) {
					var userId = response.id
					console.log(response)

					FB.ui({
						'method': 'share',
						'href': 'https://5670.eu/',
						'hashtag': '#мова',
						'quote': 'Закликаю парламент підтримати закон 5670 Про державну мову'
					}, function(response) {
						console.log(response);
					})

					return
					FB.api(`${userId}/albums`, 'post', {
						'is_default': true,
						'name': 'ї та є',
						'privacy': {
							'value': 'SELF'
						}
					}, function(response) {
						var albumId = response.id
						FB.api(`${albumId}/photos`, 'post', {
							'url': 'https://5670.eu/assets/img/yi320x320.png',
							'name': 'ї та є',
							'privacy': {
								'value': 'SELF'
							},
							'no_story': 1
						}, function(response) {
							console.log(response)
							var photoId = response.id

							FB.api(`${photoId}`, 'get', { fields: 'link'}, function(response) {
								console.log(response)
							})
							
						})
					})
				})

			} else {
				console.log('Login cancelled or some other shit happened')
				console.log(response)
			}
		}, {
			// scope: 'publish_actions,user_photos',
			'return_scopes': true
		})		
	}
  render() {
    return (
		<div>
	        <div className='jumbotron marketing'>
	          <img src="assets/img/tilko_yi.png" 
	            height="200" 
	            alt='Ї'></img>
	          <h1>ї та є</h1>
	          <p className='lead'>
	            Ми &mdash; особливі літери. Зазвичай нам допомагає апостроф.
	            <br/>
	            Та сьогодні нам потрібна твоя підтримка
	            <br/>
	            <br/>
	            Дуже багато шуму наробили нові мовні проекти у Парламенті, тож ми вирішили допомогти розібратись, що до чого
	          </p>
{/*	          <svg id="scrollHint" className='animatedHint' x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg>
*/}
	        </div>
	        <div className='row marketing'>
	          <div className='col-12'>
	            <button onClick={this.tellFriends} type='button' className='btn btn-secondary'>
	              <i className='fa fa-facebook'></i>&nbsp;&nbsp;Розкажу друзям про Ї та є
	            </button>
	            <br />
	            Не забудь сказати щось дружнє            
	          </div>
	        </div>
        </div>    	
    )
  }
}
