import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../../images/logo.png'

class Header extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return(
			<header>
				<section className='logo-container'>
					<img src={logo} alt='' />
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