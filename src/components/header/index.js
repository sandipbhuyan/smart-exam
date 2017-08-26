import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return(
			<header>
         hello world
      </header>
		)
	}

}


const mapStateToProps = (state,ownProps) => {
	return state
}

export default connect(mapStateToProps)(Header)