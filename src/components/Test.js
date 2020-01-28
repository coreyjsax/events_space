import React from 'react'

class Test extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSpace: '',
            currentLocation: ''
        }
        this.docLookup = this.docLookup.bind(this)
    }
    componentDidMount(){
        console.log(this.props)
        if (this.props.history.action == "POP"){
            //alert('url')
            
            console.log('URL')
            console.log(this.props)
            //alert(this.props.match.params.id)
            let locationId = this.props.match.params.id
            this.docLookup(locationId, 'test')
        } else if (this.props.history.action == "PUSH"){

            this.setState({currentSpace: this.props.currentPage})
        }
        
    }
    componentWillReceiveProps(){
        console.log(this.props)
        if (this.props.history.action == "POP"){
            console.log('URL')
            console.log(this.props)
            let locationId = this.props.match.params.id
            this.docLookup(locationId, 'test')
            //alert('url')
        } else if (this.props.history.action == "PUSH"){
        
            this.setState({currentSpace: this.props.currentPage})
        }
       
    }
    docLookup = (id, model) => {
        console.log(id)
        console.log(model)
        if (model == "location"){

        } else if (model == "space"){
            
        }
    }
    render(){
        console.log(this.state)
        return (
            <div>
                {this.props.match ?
                    <div>
                        URL Route : 
                        {this.props.match.params.id}
                        currentPage name : 
                        
                    </div>
                    
                    : 
                    <div>
                        UI Route : 
                        currentPage name : 
                        {this.props.currentPage.id || 'loading...'}
                    </div>
                }
            </div>
        )
    }
}
export default Test