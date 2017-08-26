import React, { Component } from 'react'
import PageState from './pagestate/index'
import Header from './header/index'

class CoreLayout extends Component {
	render() {
		return (
			<div className='component-container'>
				<Header />
				<PageState />
			</div>

		)
	}
}

export default CoreLayout;