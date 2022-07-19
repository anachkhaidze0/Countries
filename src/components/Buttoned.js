const Buttoned = (props) => {
    return(
        <div className="mx-6">
            <p className="h-10">{props.country} <button className="bg-transparent p-1.5 text-xs rounded-full border-dotted border-green-500  hover:bg-green-400 hover:text-white hover:font-bold hover:border-solid hover:animate-pulse font-sans" value={props.country} onClick={props.onClick}>Show</button></p> 
        </div>
    )
}

export default Buttoned