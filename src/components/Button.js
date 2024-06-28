const Button = (props) => {
    return(
        <div>
            <button className='text-lg bg-[#FFF] text-[#000] py-2 px-6 rounded-lg font-semibold'>{props.title}</button>
        </div>
    )
}

export default Button;