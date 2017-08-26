import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return(
			<header>
				<section className='logo-container'>
          Logo container
        </section>
				<section className='nav-bar'>
          navigation ll be here
        </section>
			</header>
		)
	}

}


const mapStateToProps = (state,ownProps) => {
	return state
}

export default connect(mapStateToProps)(Header)