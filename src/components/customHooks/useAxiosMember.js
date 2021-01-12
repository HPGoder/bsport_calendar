import axios from 'axios';
import {useState, useEffect} from 'react';

const useAxiosMember = (url) => {
    const [data, setData] = useState(null)
    useEffect(() =>{
        axios.get(url,{
            headers : {
                Authorization: "Basic eW9nYUBic3BvcnQuaW86eW9nYQ==",
            }
        }).then(res =>{
            console.log(res.data.results[0])
            setData(res.data.results[0])
            
        }).catch(error => {
            console.log('Members ' + error)
        })
        return data
    }, [url])   
}
export default useAxiosMember;