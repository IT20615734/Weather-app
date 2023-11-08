import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserLocations() {

    const [username,setUsername] = useState();
    const [long,setLong] = useState();
    const [lat,setLat] = useState();
    const [date,setDate] = useState();

    const [weatherData,setWeatherData] = useState([])

    const [image,setImage] = useState('sample');


    const refreshMinutes = 10800000


    useEffect(() => {

        const interval = setInterval(() => { 
           console.log('refreshed')
        }, refreshMinutes); 

    }, [])
    

    const handleSubmit = (e) =>{
        e.preventDefault();

        const data = {
            userName:username,
            long,
            lat,
            date
        }

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${long}&lon=${lat}&appid=7a49c0ad79261572c4b3b587f0077ecc`).then((res) =>{
        console.log(res.data.weather[0].main)
            setWeatherData(res.data.weather)
            setImage(res.data.weather[0].icon)
        })


        // axios.post("http://localhost:8080/Users/addUser",data).then((res) =>{
        //     console.log("added")
        // }).catch((err) =>{
        //     alert(err)
        // })
        

    }


  return (
<>
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) =>{setUsername(e.target.value)}}
        required
        />
    </div>
    <div>
      <label htmlFor="long">Longitude:</label>
      <input
        type="text"
        id="long"
        name="long"
        value = {long}
        onChange={(e) =>{setLong(e.target.value)}}
        required
      />
    </div>
    <div>
      <label htmlFor="lat">Latitude :</label>
      <input
        type="text"
        id="lat"
        name="lat"
        value = {lat}
        onChange={(e) =>{setLat(e.target.value)}}
        required
        />
    </div>
    <div>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value = {date}
        onChange={(e) =>{setDate(e.target.value)}}
        required
        />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  {image === 'sample' ? (

      <lable></lable>

      ):(
          <div>
            <lable>Current weather : {weatherData[0].main}</lable><br/>
            <lable>Description : {weatherData[0].description}</lable><br/>
          <img src = {`https://openweathermap.org/img/wn/${image}@2x.png`}  alt = {image}/>
          </div>
  )}
    </>

  )
}

export default UserLocations