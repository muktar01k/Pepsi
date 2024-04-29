import { useState } from 'react'
import 'animate.css'
import Logo from '../assets/Logo.png'
import Pepsi from '../assets/hand.png'
import Pepsi1 from '../assets/pepsi1.jpg'
import Pepsi2 from '../assets/pepsi2.jpg'
import Pepsi3 from '../assets/pepsi.png'
import TabMenu from './TabMenu'
import TabCard from './TabCard'
import Can1 from '../assets/Can1.png'
import Can2 from '../assets/Can2.png'
import Can4 from '../assets/Can4.png'
import Can6 from '../assets/Can6.png'
import { ProductDetails } from '../Shared/Data'
import { ProdDetails } from '../Shared/Product'



const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1)

    function toggleTab(activeTab) {
        setActiveTab(activeTab)
    }





    return (
        <div className="">
            <nav className='flex gap-[20rem] pt-[0.5rem] bg-[blue] fixed w-full'>
                <div className="w-[10rem] ml-[2rem]">
                    <img src={Logo} alt="" />
                </div>
                <div className="flex gap-[8rem] mt-[1rem] font-semibold">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Histroy</a>
                    <a href="">Cart</a>
                    <a href="">All Product</a>

                </div>
            </nav>

            <div className="bg-background bg-cover h-[30rem] flex justify-center gap-[2rem] ">
                <div className="mt-[8rem] flex flex-col">
                    <h4 className='font-bold text-[white] text-3xl w-[15rem] text-center'>Available in your State</h4>
                    <div className="mt-[2rem]">
                        <p className='w-[20rem] text-center font-semibold text-[white] text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum atque, cupiditate incidunt architecto excepturi! </p>
                    </div>
                </div>
                <div className=" w-[30rem] ">
                    <img src={Pepsi} alt="" />
                </div>
                <div className="mt-[8rem] flex flex-col">
                    <h5 className="font-bold text-[white] text-3xl w-[15rem] text-center">Order from your Home</h5>
                    <div className=" mt-[2rem] bg-black text-white h-[5rem] w-[18rem] rounded-[5rem]  text-center pt-[1.5rem] mt-[3rem]">
                        <button className='font-semibold '>Order Now !</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full justify-center items-center  pt-[2rem] bg-[black] text-[white]">
                <div className="flex gap-5">
                    <TabMenu
                        text="Histroy"
                        onClick={() => toggleTab(1)}
                        className={activeTab === 1 && "bg-[blue] text-white border-none "}
                    />
                    <TabMenu
                        text="Courier"
                        onClick={() => toggleTab(2)}
                        className={activeTab === 2 && "bg-[blue] text-white border-none "}
                    />
                    <TabMenu
                        text="Resturant or store owner"
                        onClick={() => toggleTab(3)}
                        className={activeTab === 3 && "bg-[blue] text-white border-none "}
                    />
                    <TabMenu
                        text="Fleet owner"
                        onClick={() => toggleTab(4)}
                        className={activeTab === 4 && "bg-[blue] text-white border-none "}
                    />
                    <TabMenu
                        text="Fleet owner"
                        onClick={() => toggleTab(5)}
                        className={activeTab === 5 && "bg-[blue] text-white border-none "}
                    />
                </div>

                <div className="mt-[4rem] ">
                    {activeTab === 1 && <TabCard textOne="Pepsi, originally created in 1893 by Caleb Bradham and named Brad's Drink, was first sold in his drugstore in New Bern, North Carolina. Renamed Pepsi-Cola in 1898 due to its supposed digestive benefits, it was shortened to Pepsi in 1961. The beverage's formula initially included sugar and vanilla but not pepsin, despite speculation on the origin of its name. Early on, Pepsi struggled with financial stability, going bankrupt in 1923 but was subsequently purchased and revived by Charles Guth, who reformulated the syrup. Pepsi gained popularity with the introduction of a 12-ounce bottle during the Great Depression and clever marketing strategies like the Nickel, Nickel jingle, doubling sales by emphasizing its " textTwo={Pepsi2} />}
                    {activeTab === 2 && <TabCard textOne="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio commodi laudantium eos, nesciunt odio numquam incidunt dicta eius porro veritatis quasi quisquam modi corporis neque iusto maiores. Quidem, aliquid cumque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio commodi laudantium eos, nesciunt odio numquam incidunt dicta eius porro veritatis quasi quisquam modi corporis neque iusto maiores. Quidem, aliquid cumque" textTwo={Pepsi1} />}
                    {activeTab === 3 && <TabCard textOne="THREE" textTwo={Pepsi3} />}
                    {activeTab === 4 && <TabCard textOne="FOUR" textTwo="FOUR B" />}
                    {activeTab === 5 && <TabCard textOne="Five" textTwo="Five B" />}
                </div>
            </div>
            <div className="">
                <p className='text-center font-bold text-4xl bg-[black] text-[white] pt-[3rem]'>Available Product</p>
            </div>

            {
                ProductDetails.map((ProductDetail) => (<ProdDetails {...ProductDetail}/>))
            }

            {/* <div className="pt-[2rem] flex justify-center bg-[black]">
                <div className="border-2 border-[blue] w-[80rem] grid grid-row-span-4 grid-flow-col ">
                    <div className=" border-2 border-[blue] h-[20rem] w-[100%] ">
                        <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>Pepsi</p>
                        <div className="flex justify-center">
                            <img className='w-[40%] mt-[1rem] self-end object-contain' src={Can10} alt="" />
                        </div>
                    </div>
                    <div className=" border-2 border-[blue] h-[20rem]">
                        <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>Pepsi Max </p>
                        <div className="flex justify-center">
                            <img className='w-[40%] mt-[1rem] self-end object-contain' src={Can8} alt="" />
                        </div>
                    </div>
                    <div className=" border-2 border-[blue] h-[20rem] ">
                        <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>Pepsi Diet</p>
                        <div className="flex justify-center">
                            <img className='w-[50%] h-[15rem]  mt-[1.5rem] self-end object-contain' src={Can1} alt="" />
                        </div>
                    </div>
                    <div className=" border-2 border-[blue] h-[20rem]">
                        <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>Pepsi</p>
                        <div className="flex justify-center">
                            <img className='w-[40%] mt-[1rem] self-end object-contain' src={Can4} alt="" />
                        </div>
                    </div>
                </div>

            </div> */}
            <div className="flex justify-center bg-[black]">
                <div className="border-2 border-[blue] w-[80rem] grid grid-row-span-4 grid-flow-col ">
                    <div className=" border-2 border-[blue] h-[20rem] w-[100%] ">
                        <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>Pepsi</p>
                        <div className="flex justify-center">
                            <img className='w-[50%] h-[15rem]  mt-[1.5rem] self-end object-contain' src={Can2} alt="" />
                        </div>
                    </div>
                    <div className=" border-2 border-[blue] h-[20rem]">
                        <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>Pepsi Max </p>
                        <div className="flex justify-center">
                            <img className='w-[35%] mt-[1rem] self-end object-contain' src={Can6} alt="" />
                        </div>
                    </div>
                    <div className=" border-2 border-[blue] h-[20rem] relative">
                        <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>Pepsi Diet</p>
                        <div className="flex justify-center">
                            <img className='w-[50%] h-[15rem]  mt-[1.5rem] self-end object-contain' src={Can1} alt="" />
                        </div>
                    </div>
                    <div className=" border-2 border-[blue] h-[20rem]">
                        <p className='pt-[1rem] text-center text-[white] font-bold text-xl'>Pepsi</p>
                        <div className="flex justify-center">
                            <img className='w-[35%] mt-[1rem] self-end object-contain' src={Can4} alt="" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="bg-[black] text-[white] text-center ">
                <button className='bg-[blue] mt-[2rem] text-[black] w-[20rem] h-[5rem] font-bold text-4xl rounded-[1rem]'>SHOP NOW</button>
            </div>

            <div className="">
                <div className="">

                </div>
            </div>
        </div>
    )
}
export default Tabs