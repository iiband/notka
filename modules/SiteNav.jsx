import React from 'react'
import { Link } from 'react-router'

export class SiteNav extends React.Component {
	render() {
		return (
        	<ul className='nav nav-pills justify-content-center flex-column flex-sm-row'>
				{this.props.children}
	        </ul>
		)
	}
}

export class SiteNavButton extends React.Component {
	render() {
		return (
			<li className='nav-item'>
				<Link activeClassName='active' className='flex-sm-fill text-sm-center nav-link' {...this.props}>
				  {this.props.children}
				</Link>								
			</li>
		)
	}
}