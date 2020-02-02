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
            let eventSpaceId = this.props.match.params.id
            this.docLookup(eventSpaceId, 'location')
            this.docLookup(eventSpaceId, 'event_space')
        } else if (this.props.history.action == "PUSH"){

            this.setState({currentSpace: this.props.currentPage})
        }
        
    }
    componentWillReceiveProps(){
        console.log(this.props)
        if (this.props.history.action == "POP"){
            console.log('URL')
            console.log(this.props)
            let eventSpaceId = this.props.match.params.id
            this.docLookup(eventSpaceId, 'location')
            this.docLookup(eventSpaceId, 'event_space')
            //alert('url')
        } else if (this.props.history.action == "PUSH"){
           // this.setState({currentLocation: this.props.})
            
            this.setState({currentSpace: this.props.currentPage})
        }
       
    }
    docLookup = (id, model) => {
        console.log(id)
        console.log(model)
        if (model == "location"){
            let locations = Array.from(this.props.locations)
            let eventSpaceid = id
           console.log(locations)
           
          let selectedLocation = locations.filter(location => location.event_space.includes(eventSpaceid))
          console.log(selectedLocation)
          this.setState({currentLocation: selectedLocation[0]})
        } else if (model == "event_space"){
            let spaces = Array.from(this.props.eventSpaces)
            console.log(spaces)
            let eventSpaceId = id
            let selectedSpace = spaces.filter(space => space._id == eventSpaceId)
            console.log(selectedSpace)
            this.setState({currentSpace: selectedSpace[0]})
        }
    }
    render(){
        console.log(this.state)
        return (
            <div>
                {this.state.currentSpace ?
                   
                    this.state.currentSpace.story
                    :
                    <div>loading...</div>
                }
                {
                    this.state.currentLocation ?
                    this.state.currentLocation.name.label
                    :
                    <div>loading...</div>
                }
               
            </div>
        )
    }
}
export default Test