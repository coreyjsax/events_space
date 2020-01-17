import React from 'react'
import {Card} from 'antd'
import styles from '../components/styles.css'

const locations = [
    {id: '1', name: 'location 1', image_url: 'https://www.fillmurray.com/200/200'},
    {id: '2', name: 'location 2', image_url: 'https://www.fillmurray.com/200/200'},
    {id: '3', name: 'location 3', image_url: 'https://www.fillmurray.com/200/200'},
    {id: '4', name: 'location 4', image_url: 'https://www.fillmurray.com/200/200'},
]
const Gallery = (props) => {
    let spaces = Array.from(props.eventSpaces)
    let locations = Array.from(props.locations)

    let setTab = props.setTab

    return (
        <div className="wrapper-horizontal">
           {
               spaces.map(space => (
                   <img className="card" src="https://www.fillmurray.com/200/200" onClick={() => setTab(space._id)} />
               ))
           }
        </div>
    )
}
export default Gallery

