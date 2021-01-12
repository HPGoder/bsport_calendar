import {useState, useEffect} from 'react';


const useFetch2 = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setData(data.results[0]);
        }).catch((err) => console.log(err))
        
    }, [url]);

    return { data}

}
 
export default useFetch2;