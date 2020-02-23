import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Hero from '../components/Hero'
import Locations from '../components/Locations'
import Masthead from '../components/Masthead'
import Nav from '../components/Nav'
import GetQuote from '../components/GetQoute'

import Restful, {FetchData} from "../tools/Restful"

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            eventSpaces: '',
            locations: '',
            categories: '',
            QuoteName: '',
            QuoteEmail: '',
            QuoteDate: '',
            QuotePhone: '',
            cart: []
        }
        this.refreshData = this.refreshData.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount(){
        this.refreshData()
    }
    addItemToCart = (item, itemPrice) => {
        let tempCart = this.state.cart
        item[0].prices = itemPrice
        tempCart.push(item[0])
        console.log(tempCart.length)
        console.log(itemPrice)
        this.setState({cart: tempCart})
    }
    refreshData(){
        return Promise.all([FetchData('events_space'), FetchData('location'), FetchData('category')])
        .then(([eventsSpaces, locations, category]) => this.setState(
            {   eventSpaces: Array.from(eventsSpaces), 
                locations: Array.from(locations), 
                categories: Array.from(category)
            }
        ))
        .catch(err => err)
    }
    handleInput(event, state){
        console.log(event)
       if (event && event._d) this.setState({QuoteDate: event._d})
       else if (event && !event.target) this.setState({QuoteLocations: event})
       else if (event) this.setState({[state]: event.target.value})
    }
    render(){
        console.log(this.state)
        console.log(this.props)
        console.log(`cart contents: ${this.state.cart}`)
        return (
            <div>
                <Masthead />
                <Nav cart={this.state.cart} />
                
                <Route path="/" render={(props) => <Hero locations={this.state.locations} eventSpaces={this.state.eventSpaces} {...props}/>} />
                <Route path="/plan" render={(props) => (
                    <GetQuote 
                        locations={this.state.locations}
                        categories={this.state.categories}
                        eventSpaces={this.state.eventSpaces} 
                        handleInput={this.handleInput} 
                        name={this.state.getQuoteName} 
                        menu={this.props.Menu} {...props}
                        items={this.props.Items}
                        tags={this.props.Tags}
                        addItemToCart={this.addItemToCart}
                        cart={this.state.cart}
                    /> )} 
                    
                /> 
                <Locations 
                    eventSpaces={this.state.eventSpaces} 
                    locations={this.props.Locations}
                    Title={this.props.Title}
                    menu={this.props.Menu}
                    
                />
               
                <div>Download our full menu here</div>
            </div>
        )
    }
    
}
export default Home