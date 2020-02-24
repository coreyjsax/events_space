import React from 'react'
import {Row, Col} from 'reactstrap'
import {Card} from 'antd'

const Estimate = (props) => {
    const estimateSections = () => {
        let categoryLookUp = props.categories
        let estimateCategoryIds = [...new Set(props.cart.map(item => item.category[0]))]
        let estimateCategories = estimateCategoryIds.map(id => {
            let categories = categoryLookUp.filter(category => category._id === id)
            return categories[0]
        })
        for (let i = 0; i < estimateCategories.length; i++){
            estimateCategories[i].items = props.cart.filter(item => item.category[0] == estimateCategories[i]._id)
            if (estimateCategories[i].subTotal === undefined){
                estimateCategories[i].subTotal = 0
            }
            console.log(estimateCategories[i].items[0].prices[0].amount)
            estimateCategories[i].subTotal += parseFloat(estimateCategories[i].items[0].prices[0].amount)
        }
        return estimateCategories
    }
    let categorySubTotal = (categoryId) => {
        let category = props.category.filter(category => category._id == categoryId)
        console.log(category)
        return (
        <div>{category._id}</div>
        )
    }
    let categories = estimateSections()
    
    console.log(categories)
    
    return (
        <div className="estimate-container">
            <div>My Estimate</div>
            {categories ?
                categories.map(category => {
                    return (
                        <>
                        <div>

                        
                        <div className="category-title">
                            <Row>
                                <Col>
                                    {category.name.label}
                                </Col>
                                <Col>
                                    sub-total: $ {category.subTotal}
                                </Col>
                            </Row>
                        </div>
                            <ul>
                               {category.items.map(item => (
                                <Card className="estimate-item-card" onClick={(e) => alert('this')}>
                                    <Row>
                                        <Col sm={4}>
                                            {item.name.label}  
                                        </Col>
                                        
                                        <Col sm={4}>
                                            {item.prices[0].amount}
                                        </Col>
                                    </Row>
                                </Card>
                                ))}
                            </ul>
                            estimate total goes here
                            </div>
                        </>
                    )
                })
                : <span></span>
            }
        </div>
        
    )
}
export default Estimate