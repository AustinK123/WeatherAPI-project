import React,{useEffect,useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Home=()=>{

    const [Data,setData]=useState({
        Company:'',
        Description:''
    })
    const [colorsData,setColorsData]=useState([])

    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
            .then(res=>{
                let companyData=res.data.data;
            console.log(res)
            setData({Company:companyData.company,Description:companyData.text})
            setColorsData(res.data.data)
                        })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
        <h1>{Data.Company}</h1>
        <p>{Data.Description}</p>
        <Colors data={colorsData}/>
    </>
    )
}

export default Home;