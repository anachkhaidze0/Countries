const Notification = ({message}) => {
    if(message === null) {
        return null
    }
    return(
        <p className="my-4 mx-6 text-fuchsia-400">{message}</p>
    )
}

export default Notification