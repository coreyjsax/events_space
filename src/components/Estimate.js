import React from 'react'

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
        }
        return estimateCategories
    }
    let categories = estimateSections()
    console.log(categories)
    return (
        <div>
            <div>My Estimate</div>
            {categories ?
                categories.map(category => {
                    return (
                        <>
                        <div>{category.name.label}</div>
                            <ul>
                               {category.items.map(item => (
                                   <div>
                                       {item.name.label} || {item.prices[0].amount}
                                   </div>
                                ))}
                            </ul>
                        </>
                    )
                })
                : <span></span>
            }
        </div>
        
    )
}
export default Estimate