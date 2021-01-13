import axios from 'axios';
import {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
// import MemberCard from './MemberCard';

const Bookings = (offerSelected) => {

    const [bookingsUrl, setBookingsUrl] = useState(null)
    const [bookings, setBookings] = useState(null);

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
    }, [offerSelected.offerSelected])

  
    return ( 
        <div>
            <Typography variant="overline" component="h1" align="center" color="primary">ATTENDENTS</Typography>
        </div>
     );
}
 
export default Bookings;