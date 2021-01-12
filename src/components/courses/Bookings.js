import axios from 'axios';
import {useState, useEffect} from 'react';
// import MemberCard from './MemberCard';

const Bookings = (offerSelected) => {

    const [bookingsUrl, setBookingsUrl] = useState(null)
    const [bookings, setBookings] = useState(null);
    // const [idmemberList, SetIdMemberList] = useState(null);

    useEffect(() =>{
        setBookingsUrl(`https://api.staging.bsport.io/api/v1/booking/?offer=${offerSelected.offerSelected}`);
        axios.get(bookingsUrl,{
            headers : {
                Authorization: "Basic eW9nYUBic3BvcnQuaW86eW9nYQ==",
            }
        }).then(res =>{
            setBookings(res.data.results)
        }).catch(error => {
            console.log('Booking error ' + error)
         })
        //  if (bookings){
        //     const IDs = bookings.map( booking =>{
        //         return booking.member
        //     });
        //     SetIdMemberList(IDs)
        // }
    }, [offerSelected.offerSelected])

  
    return ( 
        <div>
            Attendents
        </div>
     );
}
 
export default Bookings;