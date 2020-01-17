import React from 'react'
import styles from '../components/styles.css'

class LocationPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage: ''
        }
    }
    render(){
        return (
            <div>
                {this.props.currentTab}
            </div>
        )
    }
}
export default LocationPage