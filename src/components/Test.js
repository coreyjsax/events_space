import React from 'react'

class Test extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        console.log(this.props)
        return (
            <div>

                {this.props.match ?
                    this.props.match.params.id
                    : <span></span>
                }
            </div>
        )
    }
}
export default Test