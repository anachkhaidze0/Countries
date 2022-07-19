const Input = (props) => {
    return(
        <div className="flex justify-center pt-10 pb-6 lg:text-2xl">
            Find Countries <input 
                className="ml-4 px-2 p-0.5 bg-white border-none shadow-md shadow-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 sm:"
                type={props.type} 
                value={props.value}
                onChange={props.onChange}
                autoFocus
            />
        </div>
    )
}

export default Input