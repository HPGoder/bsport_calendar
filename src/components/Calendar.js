import React from 'react';
import {useState} from 'react';
import Navbar from './Navbar/Navbar'
import CoursesGrid from './courses/CoursesGrid'
import useFetch from './customHooks/useFetch';


export default function Calendar() {

    // Starting with today's date in proper format
    let new_date = new Date();
    let new_date_7= new Date();
    new_date_7.setDate(new_date.getDate()+7)
    const today = new_date.toISOString().split('T')[0]
    const today_7 = new_date_7.toISOString().split('T')[0]

    const [dates] = useState([today, today_7])
    const [url, setUrl] = useState(`https://api.staging.bsport.io/api/v1/offer/?min_date=${dates[0]}&max_date=${dates[1]}&company=6`)
    
    const handleDateChange = (date) => {
        let date_plus_seven = new Date(date);
        date_plus_seven.setDate(date.getDate()+7);
        date_plus_seven = date_plus_seven.toISOString().split('T')[0]
        const date_ = date.toISOString().split('T')[0]
        setUrl(`https://api.staging.bsport.io/api/v1/offer/?min_date=${date_}&max_date=${date_plus_seven}&company=6`)
    };

    const { data : offers } = useFetch(url)

    return (
        <div className="content">
            <Navbar dates ={dates} handleDateChange={handleDateChange}/>
            <div className="calendar">
                <div className="calendar-body" style={{'paddingTop':'50px'}}>
                    {offers && <CoursesGrid courses={offers}/>}
                </div>
            </div>
        </div>
    )
}
