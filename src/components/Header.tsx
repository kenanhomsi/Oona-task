import { useAppSelector } from "../redux/store"
import logo from '../assets/Logo.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function Header() {
    const headerData=useAppSelector((state)=>state.header);
  return (
    <div id="Home" className=" fixed z-[10] bg-white w-full  flex  items-center justify-between py-4 md:px-sectionLg px-sectionMd">
        <div className="">
           <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-8  items-center">
        <nav className=" gap-4 hidden md:flex  text-[#4D4D4D]">
            { headerData.navBarItems.map((ele,index)=>{
                return(
                    <a href={`#${ele}`} className=" hover:text-primary" key={index}>{ele}</a>
                )

            })}
        </nav>
        <button className="text-white  px-2 py-1
        flex items-center gap-1 bg-primary rounded-sm
         hover:gap-5 transition-all sm:px-6 sm:py-2">
            Register Now <AiOutlineArrowRight />
        </button>
        </div>
        
    </div>
  )
}
