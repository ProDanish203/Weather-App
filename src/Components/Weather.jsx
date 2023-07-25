import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Loader } from "./Loader";

export const Weather = ({setStats, dark}) => {

    const [city, setCity] = useState("")
    const [lon, setLon] = useState()
    const [lat, setLat] = useState()
    const [noRecord, setNoRecord] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState()

    const key = "37f57f00eda53f17a1fcae8513aeeb5b"

    const getCoordinates = async () => {
        try{
            const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`);
            if(data.length > 0){
                setNoRecord(false);
                setLat(data[0]?.lat)
                setLon(data[0]?.lon)
            }else{
                setNoRecord(true);
            }
        }catch(error){
            // console.log(error)
        }
    }

    const getWeather = async () => {
        try{
            setLoading(true);
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)

            setStats(data.main);
            setWeather(data.weather[0]);
            setLoading(false);
        }catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getCoordinates();
    }, [city])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!city) return;

        if(noRecord) return toast.error("No records exists for this area")

        if(lon && lat) {
            await getWeather();
        }
    }

  return (
    <>
    <div className='w-full max-w-[500px] mx-auto flex items-center min-h-[350px] flex-col dark:bg-gray-500 bg-gray-100 relative rounded-md shadow-md px-3 py-5'>

        <form onSubmit={handleSubmit} className='w-full flex gap-2 sm:flex-row flex-col items-center justify-center'>
            <input type="text" placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)}
            className='px-3 py-2.5 rounded-md outline-none w-full dark:bg-gray-700 bg-gray-300 shadow-md dark:text-white'
            />
            <button className='bg-sky-900 rounded-md px-3 py-2.5 sm:flex block sm:w-auto w-full text-white' type='submit'>Search</button>
        </form>

        {loading ? (
            <>
            <div className='h-[200px] flex items-center justify-center'>
                <Loader dark={dark ? false : true}/>
            </div>
            </>
        )
         : weather && (
                <>
                <div className='flex items-center flex-col justify-center mt-10'>
                    <i className='fas fa-cloud text-4xl dark:text-white mb-2'></i>
                    <h2 className='text-4xl font-bold dark:text-white mb-2'>{weather?.main}</h2>
                    <p className='text-xl dark:text-white'>{weather?.description}</p>
                </div>
                </>
            )
        }

    </div>
    </>
  )
}
