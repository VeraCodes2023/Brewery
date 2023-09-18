import {useState,useEffect } from 'react';
import axios from 'axios';


const  useFetch = (url:string) => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");

    useEffect(
        ()=>{
            setLoading(true)
            try{
                axios.get(url)
                .then(
                    response=>{
                        if(response.status === 200 && (response.data !== undefined)){
                            setData(response.data)
                        }else{
                            setError("An error occurred while fetching data.")
                        }
                    })
            }catch(err:any){
                if(err.AxiosError.message === 'Network Error'){
                    setError("Internet disconnected, please check your network...")
                }else {
                    console.log(error)
                    setError(error)
                }
              
            }finally{
                setLoading(false)
            }
        },[url,error]
    )
    return {loading,error,data}
}

export default useFetch