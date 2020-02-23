import React from 'react'
import { Container, Row, Col, Button, Form, Input, FormGroup, Label} from 'reactstrap'
import {DatePicker, Select} from 'antd'
import Restful, {FetchData} from "../tools/Restful"

import GetQuotePg2 from '../components/GetQuotePg2'

const {Option} = Select

const categories = [
    {label: "Rehearsal Dinner", value: "rehearsal-dinner", id: 1},
    {label: "Birthday Party", value: "birthday-party", id: 2},
    {label: "Corporate Event", value: "corporate-event", id: 3},
    {label: "Catering to your site", value: "catering-to-your-site", id: 4}
]



class GetQuote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentFormPage: 0
        }
        this.filteredLocations = this.filteredLocations.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }
    handleNext(e, direction){
        console.log('hi')
        let currentFormPage = this.state.currentFormPage
        
        if(direction == 'up') this.setState({currentFormPage: currentFormPage +1})
        else if (direction == 'down') this.setState({currentFormPage: currentFormPage -1})
    }
    filteredLocations(){
        let locations = Array.from(this.props.locations)
        let locationsWithEventSpaces = locations.filter(location => location.event_space.length > 0)
        return locationsWithEventSpaces
    }
    render(){
        console.log(this.state)
        console.log(this.props)
        return ( 
            <div className="get-quote">
                <Container>
                    <h1 className="card-title">Let's Party!</h1>
                    {this.state.currentFormPage == 0 ?
                        <Form>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" onChange={(event) => this.props.handleInput(event, 'QuoteName')} defaultValue={this.props.name || "loading..."}/>
                        </FormGroup>
                        <Row>
                            <Col sm="6">
                                <Label>Phone</Label>
                                <Input type="text" />
                            </Col>
                            <Col sm="6">
                                <Label>Email</Label>
                                <Input type="email" onChange={(event) => this.props.handleInput(event, 'QuoteEmail')}/>
                            </Col>
                        </Row>
                        <FormGroup>
                            
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col sm="6">
                                    <Label>Date & Time</Label>
                                    <div>
                                        <DatePicker size={"large"} showTime onChange={(event) => this.props.handleInput(event, 'QuoteDate')} />
                                    </div>
                                </Col>
                                <Col sm="6">
                                    <label>Event Type</label>
                                    <Select size={"large"} mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={(event) => this.props.handleInput(event, 'QuoteTags')}>
                                        {categories.map(category => (
                                            <Option key={category.id} value={category.value} >{category.label}</Option>
                                        ))}
                                    </Select>
                                </Col>
                            </Row>
                            
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col sm="6">
                                    <Label>Guests</Label>
                                    <Input type="number"/>
                                </Col>
                                <Col sm="6">
                                    <Label>Locations</Label>
                                    <Select size={"large"} mode="multiple" style={{ width: '100%' }} placeholder="select locations" onChange={(event) => this.props.handleInput(event, 'QuoteLocations')}>
                                        {this.filteredLocations().map(location => (
                                            <Option key={location._id} value={location._id} >{location.name.label}</Option>
                                        ))}
                                    </Select>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                    : <span></span>
                    }
                    {this.state.currentFormPage == 1 ?
                        <GetQuotePg2 menu={this.props.menu} items={this.props.items} tags={this.props.tags} addItemToCart={this.props.addItemToCart}/>
                        : <span></span>
                    }
                    {this.state.currentFormPage == 2 ?
                        <div>page 3</div>
                        : <span></span>
                    }
                    {this.state.currentFormPage > 0 ? 
                        <Button onClick={(e) => this.handleNext(e, "down")}>Back</Button>
                        : <span></span>
                    }
                    {this.state.currentFormPage < 5 ?
                        <Button onClick={(e) => this.handleNext(e, "up")}>Next</Button>
                        : <span></span>
                    }
                </Container>
            </div>
        )
    }
}
export default GetQuote 