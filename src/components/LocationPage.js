import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Container, Row, Col, Button} from 'reactstrap'
import styles from '../components/styles.css'
import Restful, {FetchData} from "../tools/Restful"

import Test2 from '../components/Test'

var data

const Test = ({match, location}, props) => {

    return(
    <div>
        {match.params.id}
    </div>
    )
}

class LocationPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage: '',
            eventSpaces: '',
            locations: ''
        }
    }
    componentDidMount(){
        return Promise.all([FetchData('events_space'), FetchData('location')])
        .then(([eventsSpaces, locations]) => this.setState(
            {eventSpaces: Array.from(eventsSpaces), locations: Array.from(locations)}
        ))
        .catch(err => err)
    }
    render(){
        console.log(this.state)
        console.log(this.props)
        
        return (
            
           <>
                <Container>
                    <Route 
                        path="/location/:id" 
                        locations={this.state.locations}
                        render={(props) => <Test2 stuff={this.state.locations} {...props} />}
                    />
                    
                        
                </Container>
               
            </>
        )
    }
}
export default LocationPage