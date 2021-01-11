import React from 'react';
import {useState, useEffect} from 'react';
import Navbar from './Navbar'
import CoursesGrid from './courses/CoursesGrid'

export default function Calendar() {

    const [offers, setOffers] = useState(null);
    const [dates, setDates] = useState(['2019-03-28', '2019-04-04'])
    const [url, setUrl] = useState(`https://api.staging.bsport.io/api/v1/offer/?min_date=${dates[0]}&max_date=${dates[0]}&company=6`)
    
    const handleDateChange = (date) => {
        let date_plus_seven = new Date(date);
        date_plus_seven.setDate(date.getDate()+7);
        date_plus_seven = date_plus_seven.toISOString().split('T')[0]
        const date_ = date.toISOString().split('T')[0]
        console.log(date_plus_seven, date_)
        setUrl(`https://api.staging.bsport.io/api/v1/offer/?min_date=${date_}&max_date=${date_plus_seven}&company=6`)
        console.log(url)
    };
    useEffect(() => {
            fetch(url)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setOffers(data.results);
            }).catch((err) => console.log(err))
            console.log(offers)
    }, [url]);

    return (
        <div className="content">
            <Navbar dates ={dates} handleDateChange={handleDateChange}/>
            <div className="calendar">
                <div className="calendar-header">
                </div>
                <div className="calendar-body" style={{'paddingTop':'50px'}}>
                    {offers && <CoursesGrid courses={offers}/>}
                </div>
            </div>
        </div>
    )
}
