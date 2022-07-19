const Searched = (props) => {
    const languages = Array.from(props.languages)
    return(
        <div className="space-y-4">
            <h1>{props.name}</h1>

            <div>
                <p>Capital - {props.capital}</p>
                <p>Area - {props.area} km²</p>
                <p>Population - {props.population}</p>
            </div>

            <div>
                <h3>Languages:</h3>
                <ul>
                    {languages.map(language => (
                        <li className="list-none" key={language}>{language}</li>)
                    )}
                </ul>
            </div>

            <div className="container flex justify-center">
            <div className="bg-gray-200 px-1 pt-1 w-1/2">
                <img className="" src={props.image} alt={props.alt} width="100%"/>
            </div>
            </div>

            <div className="space-y-1">
                <h2>Weather in {props.capital}</h2>
                <p>Temperature {props.temperature} °C</p>
                <p>{props.main}</p>
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.alt2} />
                <p>Wind: {props.wind} m/s</p>
            </div>
        </div>
    )
}

export default Searched