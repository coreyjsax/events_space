import React from 'react'
import { Container, FormGroup, Label} from 'reactstrap'

import { Select, Card, Drawer, Form, Button, Col, Row, Icon } from 'antd'
import getQuoteStyles from '../components/GetQuoteStyles.css'
const Option = {Select}

class GetQuotePg2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            drawerVisible: false,
            selectedItem: ''
        }
        //this.convertToParty = this.convertToParty.bind(this)
    }
    showDrawer = () => {
        this.setState({drawerVisible: true})
    }
    hideDrawer = () => {
        this.setState({drawerVisible: false})
    }
    convertToParty = (menu) => {
        
    }
    selectItem  = (e, id) => {
        let items = this.props.items
        let tags = this.props.tags

        let itemId = id
        let selectedItem = items.filter(item => item._id == itemId)
        let selectedItemTags = selectedItem[0].tags
        
        let fullTags = selectedItemTags.map(tag => {
            let newTag = tags.filter(fullTag => fullTag._id == tag)
                newTag = newTag[0]
                return newTag
        })
        console.log(fullTags)
        console.log(selectedItemTags)
        this.setState({selectedItem: selectedItem})
        this.showDrawer()
    }
    render(){
        console.log(this.props)
        console.log(this.state)
        let menu = this.props.menu[0]
        this.convertToParty(menu)
        return (
            <div>
                <div>My Estimate</div>
                {menu.sections.map(section => (
                    <>
                    <p className="pink">{section.name.label}</p>
                    
                    <div className="wrapper-horizontal" sectionId={section._id}>
                        {
                           section.items.map(item => (
                               <Card 
                                    onClick={(e) => this.selectItem(e, item._id)}
                                    className="item-card"
                                    hoverable
                                    cover={<img alt="example" src={item.image.url} />}
                                >
                                   {item.name.label}
                               </Card>
                           ))
                        }
                    </div>
                    </>
                ))}
                <Drawer
                    title={this.state.selectedItem ? 
                        this.state.selectedItem[0].name.label : 'loading...'}
                    closable={true}
                    onClose={this.hideDrawer}
                    visible={this.state.drawerVisible}
                    placement="bottom"
                    bodyStyle={{paddingBottom:80}}
                >
                {this.state.selectedItem ? 
                    <div>
                        <Row gutter={16}>
                            <Col span={32} >
                            {this.state.selectedItem[0].description[0].description_text}
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Select size={"large"} mode="tags" style={{width: '100%'}} placeholder="Select dietary">
                                   
                                </Select>
                            </Col>
                            <Col span={12}>
                                col 2
                            </Col>
                        </Row>
                    </div>
                    
                    : <span>loading...</span>
                }
                </Drawer>
            </div>
        )
    }
}
export default GetQuotePg2