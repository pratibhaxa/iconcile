import React, { Component } from 'react';
import { useParams } from 'react-router-dom'

const Hotel = () => {
    const {hotel_id} = useParams();
    return (
        <div>
            Hotel Id of Current Route is : {hotel_id}
        </div>
    )
}

// class Hotel2 extends Component {
//     constructor();
//     const {hotel_id} = useParams();
//     render () {
//         return (

//         )
//     }
// }

export default Hotel;