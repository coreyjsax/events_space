import React from 'react'
import Hero from '../components/Hero'
import Locations from '../components/Locations'
import Masthead from '../components/Masthead'
import Nav from '../components/Nav'

import Restful, {FetchData} from "../tools/Restful"

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            eventSpaces: '',
            locations: ''
        }
        this.refreshData = this.refreshData.bind(this)
    }

    componentDidMount(){
        this.refreshData()
    }
    refreshData(){
        return Promise.all([FetchData('events_space'), FetchData('location')])
        .then(([eventsSpaces, locations]) => this.setState({eventSpaces: Array.from(eventsSpaces), locations: Array.from(locations)}))
        .catch(err => err)
    }
    render(){
        console.log(this.state)
        return (
            <div>
                <Masthead />
                <Nav />
                <Hero />
                <Locations 
                    eventSpaces={this.state.eventSpaces} 
                    locations={this.state.locations}
                />
            </div>
        )
    }
    
}
export default Home