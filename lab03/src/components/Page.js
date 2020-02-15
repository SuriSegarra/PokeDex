import React, { Component } from 'react'

export default class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>this.props.backPage()}>Back</button>
                <button onClick={()=>this.props.nextPage()}>Next</button>

            </div>
        )
    }
}


