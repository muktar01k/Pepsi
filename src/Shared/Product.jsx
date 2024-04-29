
import Can8 from '../assets/Can8.png'
import Can10 from '../assets/Can10.png'
import Can4 from '../assets/Can4.png'
import Can6 from '../assets/Can6.png'
import Can1 from '../assets/Can1.png'




export const ProdDetails = ({ paragraph1, paragraph2, paragraph3, paragraph4 }) => {
    return(
        <div className="pt-[2rem] flex justify-center bg-[black]">
        <div className="border-2 border-[blue] w-[80rem] grid grid-row-span-4 grid-flow-col ">
            <div className=" border-2 border-[blue] h-[20rem] w-[100%] ">
                <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>{paragraph1}</p>
                <div className="flex justify-center">
                    <img className='w-[40%] mt-[1rem] self-end object-contain' src={Can10} alt="" />
                </div>
            </div>
            <div className=" border-2 border-[blue] h-[20rem]">
                <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>{paragraph2}</p>
                <div className="flex justify-center">
                    <img className='w-[40%] mt-[1rem] self-end object-contain' src={Can8} alt="" />
                </div>
            </div>
            <div className=" border-2 border-[blue] h-[20rem] ">
                <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>{paragraph3}</p>
                <div className="flex justify-center">
                    <img className='w-[50%] h-[15rem]  mt-[1.5rem] self-end object-contain' src={Can1} alt="" />
                </div>
            </div>
            <div className=" border-2 border-[blue] h-[20rem]">
                <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>{paragraph4}</p>
                <div className="flex justify-center">
                    <img className='w-[40%] mt-[1rem] self-end object-contain' src={Can4} alt="" />
                </div>
            </div>
        </div>

    </div>
    )
}
