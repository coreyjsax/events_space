import React from 'react'
import { Container, FormGroup, Label, ListGroupItemHeading} from 'reactstrap'

import { Select, Card, Drawer, Form, Button, Col, Row, Icon } from 'antd'
import getQuoteStyles from '../components/GetQuoteStyles.css'
const {Option} = Select

class GetQuotePg2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            drawerVisible: false,
            selectedItem: '',
            selectedItemTags: '',
            selectedItemChosenTag: '',
            selectedItemPriceByTag: '',
            selectedItemPrice: ''
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
    handleDiet = (e) => {
        this.setState({selectedItemChosenTag: e, selectedItemPrice: ''})
    }
    handlePrice = (e) => {
        let item = this.state.selectedItem[0]
        let itemPrices = item.prices
        let currentPrice = itemPrices.filter(price => price.size == e)
            currentPrice = currentPrice.filter(price => price.diet == this.state.selectedItemChosenTag.toLowerCase())
        
        this.setState({selectedItemChosenSize: e, selectedItemPrice: currentPrice})
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

        this.setState({selectedItem: selectedItem, selectedItemTags: fullTags})
        this.showDrawer()
    }
    getItemPrices = (itemTag, itemSize) => {
    
        let itemPrices = this.state.selectedItem[0].prices
        let itemPricesByTag = itemPrices.filter(price => price.diet == itemTag.toLowerCase())
            //itemPricesByTag = itemPricesByTag.toLowerCase()
           
       return itemPricesByTag
        
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
                                <Select 
                                    size={"large"} 
                                    style={{width: '100%'}} 
                                    placeholder="Select dietary"
                                    onChange={(e) => this.handleDiet(e)}
                                >
                                        <Option key="reg">regular</Option>
                                    {this.state.selectedItemTags.map(tag => {
                                        if (tag.name.value == "gfr" || tag.name.value == "vr"){
                                            return (
                                            <Option 
                                                key={tag._id} 
                                                value={tag.name.value == "vr" ? "VR" : tag.name.value == "gfr" ? "GFR" : "reg"}
                                            >
                                                {tag.name.label}
                                            </Option>
                                        )}
                                        
                                    })}
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    size={'large'}
                                    style={{width: '100%'}}
                                    placeholder="Select Size"
                                    onChange={(e) => this.handlePrice(e)}
                                >
                                   {
                                       this.getItemPrices(this.state.selectedItemChosenTag).map((price, i) => (
                                        <Option key={i} value={price.size}>{price.size}</Option>
                                       ))
                                           
                                   }
                                </Select>
                               
                            </Col>
                        </Row>
                        <Row>
                                {this.state.selectedItemPrice  
                                    ?   <span>
                                            {this.state.selectedItemPrice[0].diet} {this.state.selectedItemPrice[0].size} {this.state.selectedItemPrice[0].amount}
                                        </span> 
                                    :   <span>"Select dietary preference"</span>
                                }
                            
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