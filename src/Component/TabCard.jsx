// import Pepsi2 from '../assets/pepsi2.jpg'
// import Pepsi1 from '../assets/pepsi1.jpg'

const TabCard = ({ textOne, textTwo }) => {
    return (
        <div className="flex gap-[15rem] justify-center px-[5rem] ">
            <div className="w-[35rem] font-semibold text-[white] text-xl">{textOne} </div>
            <div className=''><img className='w-[15rem] h-[20rem] rounded-xl' src={textTwo} alt="" />
            </div>

        </div>

    )
}

export default TabCard