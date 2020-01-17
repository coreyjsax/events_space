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
        }
        this.setTab = this.setTab.bind(this)
    }
    setTab(num){
        let locations = Array.from(this.props.locations)
        let spaces = Array.from(this.props.eventSpaces)
        let selectedLocation = locations.find(store => store._id == num)
        console.log(selectedLocation)
        this.setState({currentTab: num})
    }
    render(){
       
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
                <LocationPage currentTab={this.state.currentTab} />
            </div>
            </>
        )
    }
}
export default Locations