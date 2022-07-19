const Footer = ({info}) => {
    return(
        <footer className="absolute bottom-0 w-full pt-8 pb-2 flex justify-center align-center">
            <p className="text-xs">©2022 Coded by {info}</p>
        </footer>
    )
}

export default Footer