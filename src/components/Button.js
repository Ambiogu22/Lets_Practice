const Button = (props) => {
    return(
        <div>
            <button className='text-md bg-[#FFF] text-[#000] py-2 px-4 rounded-full font-semibold'>{props.title}</button>
        </div>
    )
}

export default Button;