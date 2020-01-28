import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'antd'
import styles from '../components/styles.css'

const Gallery = (props) => {

    let spaces = Array.from(props.eventSpaces)
    let setTab = props.setTab
     console.log(props)
    return (
        <div className="wrapper-horizontal">
           {
                spaces.map(space => (
                    <Link 
                        to={{
                            pathname: `/location/${space._id}`,
                            locations: props.locations,
                            state: {
                                _id: space._id,
                                currentSpace: space
                            }
                        }}
                        

                    > 
                   
                    <img 
                        className="card" 
                        src="https://www.fillmurray.com/200/200" 
                        onClick={() => setTab(space._id)}
                    />
                     </Link>
                ))
           }
        </div>
    )
}
export default Gallery

