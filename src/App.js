import { useState, useEffect } from "react";
import axios from 'axios'
import Country from './components/Country'
import Searched from "./components/Searched";
import Input from "./components/Input";
import Buttoned from "./components/Buttoned";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeater] = useState([])
  const [message, setMessage] = useState('')
  const api_key = process.env.REACT_APP_API_KEY
  let matches = ""

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => 
        setCountries(response.data))
  }, [])

  const countriesToShow = search
  ? countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  :  countries
  
  const [capital, setCapital] = useState('helsinki')

  const searchedCountry = countries.find(c => c.name.common.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
      if(search !== ''){
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`)
          .then(response => {
            setWeater(response.data)
            setCapital(searchedCountry.capital)
          })
      }  
   }, [capital, api_key, search, searchedCountry])

  

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    if(searchedCountry.name.common === 'Georgia'){
      setMessage(`This app doesn't work for Georgia.`)
      setTimeout(() => {
        setMessage(null)
      }, 4000)
    }else{
      setMessage(null)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  if(countriesToShow.length > 10 && search.length !== 0){
    matches = "Too many matches, Specify another filter"
  }else if(countriesToShow.length < 10 && countriesToShow.length > 1){
    matches=""
    return(
      <div className="relative h-screen font-sans text-lg bg-gradient-to-tl from-cyan-400 to-indigo-500">
        <Input type={"search"} value={search} onChange={handleSearch} />
        <Notification message={message}/>
        <div className="container mt-4">
         {countriesToShow.map(country => 
            <Buttoned key={country.name.common} value={country.name.common} country={country.name.common} onClick={handleClick} />
          )}
        </div>
        <Footer info={"Ana Chkhaidze"} />
      </div>
    )
  }

  if(countriesToShow.length === 1){
  return(
      <div className="relative font-sans min-h-screen pb-12 bg-gradient-to-tl from-cyan-400 to-indigo-500">
        <Input type={"search"} value={search} onChange={handleSearch} />
        <div className="flex justify-center align-center text-center">
        {countriesToShow.map(country => 
            <Searched key={country.name.common} name={country.name.common} capital={country.capital} area={country.area} population={country.population} languages={Object.values(country.languages)} image={country.flags.png} alt="flag" temperature={weather.main.temp} main={weather.weather[0].main} icon={weather.weather[0].icon} alt2={'icon'} wind={weather.wind.speed} />
        )}
        </div>
        <Footer info={"Ana Chkhaidze"} />

      </div>
    )
  }


  return (
    <div className="w-full min-h-screen relative pb-12 font-sans bg-gradient-to-l from-cyan-400 to-indigo-500 text-sm lg:text-lg">
      <Input type={"search"} value={search} onChange={handleSearch} />
      <Notification message={message}/>
      <div className="flex justify-center pb-6">
        <p>{matches}</p>
      </div>
      <ul className="columns-2 md:columns-3 lg:columns-5 text-center">
        {countriesToShow.map(country => 
            <Country key={country.name.common} country={country.name.common} />
        )}
      </ul>
      <Footer info={"Ana Chkhaidze"} />
    </div>
  );
}

export default App;
