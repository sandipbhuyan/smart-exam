import React, { Component } from 'react'
import { pageStateUpdate } from '../../actions/pageState'
import { connect } from 'react-redux'
import heart from '../../images/heart.png'

class PageState extends Component {
    constructor (props) {
        super(props)
        const { dispatch } = this.props;
        dispatch(pageStateUpdate("heloves"))
        this.changeState = this.changeState.bind(this)
        this.changeStateAgain = this.changeStateAgain.bind(this)
    }

    changeState() {
        const { dispatch } = this.props;
        dispatch(pageStateUpdate('back'))

    }

    changeStateAgain() {
        const { dispatch } = this.props
        dispatch(pageStateUpdate('heloves'))
    }
    render() {

        return(
            <div className='main-page'>
                <h1 className={this.props.pageStateReducer.pageState === 'heloves' ? '' : 'hide' }>Welcome to my world <span>,Sandip..</span></h1>
                <h1 className={this.props.pageStateReducer.pageState === 'back' ? '' : 'hide' }><span>React</span></h1>
                <img className={this.props.pageStateReducer.pageState === 'back' ? '' : 'hide' } src={heart} alt=""/>
                <div className='increase-page'>
                    <a className={this.props.pageStateReducer.pageState === 'heloves' ? 'btn btn-red' : 'hide' } href='#' onClick={this.changeState}>He Loves</a>
                    <a className={this.props.pageStateReducer.pageState === 'back' ? 'btn btn-red' : 'hide' } href='#' onClick={this.changeStateAgain}>back</a>
                </div>
            </div>
        )
    }


}

// PageState.propTypes = {
//     dispatch: React.PropTypes.func,
//     pageStateReducer: React.PropTypes.shape({
//         pageState: React.PropTypes.string
//     })
//
// }

const mapStateToProps = (state,ownProps) => {
    return state
}

export default connect(mapStateToProps)(PageState)