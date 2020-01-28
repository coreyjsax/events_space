import React from 'react'
import Gallery from '../components/Gallery'
import LocationPage from '../components/LocationPage'
import styles from '../components/styles.css'


class Locations extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentTab: '',
            currentSpace: '',
            currentLocation: ''
        }
        this.setTab = this.setTab.bind(this)
    }
    setTab(num){
        console.log(num)
        let locations = Array.from(this.props.locations)
        let spaces = Array.from(this.props.eventSpaces)
        let selectedSpace = spaces.find(space => space._id == num)
        let selectedLocationId = selectedSpace.location
        let selectedLocaton = locations.find(location => location._id == selectedLocationId)
        this.setState({currentTab: num, currentSpace: selectedSpace, currentLocation: selectedLocaton})
    }
    render(){
       console.log(this.state)
       console.log(this.props)
        return (
            <>
            <div className="magenta location-gallery">
                <div>location page title</div>
                <span>current tab: {this.state.currentTab}</span>
                <Gallery 
                    setTab={this.setTab} 
                    locations={this.props.locations} 
                    eventSpaces={this.props.eventSpaces} 
                />
            </div>
            <div>
                <LocationPage 
                    currentTab={this.state.currentTab} 
                    currentLocation={this.state.currentLocation}
                    currentSpace={this.state.currentSpace}
                    Title={this.props.Title}
                    Locations={this.props.locations}
                />
            </div>
            </>
        )
    }
}
export default Locations