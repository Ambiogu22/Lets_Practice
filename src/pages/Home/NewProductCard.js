const NewProductCard = (props) => {
    return(
        <div className='flex flex-col justify-center items-center gap-8'>
            <h2 className="text-md font-bold text-[#FFF]">{props.title}</h2>
            <img src={props.img} alt="5x5 Detox Image"  className='w-screen'/>
            <p className='text-md font-semibold text-center px-8 text-[#FFF]'>{props.description}</p>
        </div>
    )
}

export default NewProductCard;