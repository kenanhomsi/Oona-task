import { useAppSelector } from "../redux/store"
import CustomerImage from '../assets/Customers.png'
import clinetImage1 from '../assets/Logo1.png'
import clinetImage2 from '../assets/Logo2.png'
import clinetImage3 from '../assets/Logo3.png'
import clinetImage4 from '../assets/Logo4.png'
import clinetImage5 from '../assets/Logo5.png'
import clinetImage6 from '../assets/Logo6.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

export default function Customers() {
    const CustomerData=useAppSelector((state)=>state.body.customers)
    const images=[clinetImage1,clinetImage2,clinetImage3,clinetImage4,clinetImage5,clinetImage6]
  return (
    <div className=" bg-bgPrimary px-sectionMd md:px-sectionLg py-16 flex  justify-between ">
        <div className=" w-[30%] md:w-[35%]">
            <img src={CustomerImage} alt={CustomerData.customer_img} />
        </div>
        <div className=" w-[65%] flex flex-col gap-3">
          <div className=" flex flex-col gap-2">
          <p className=" text-secondary text-sm line-clamp-4 md:line-clamp-none">{CustomerData.sectionParagraph}</p>
            <h4 className="text-primary text-xl font-semibold">{CustomerData.Writer}</h4>
            <span className="text-threed text-sm">{CustomerData.WriterPosition}</span>
          </div>
          <div className=" flex gap-5 justify-between md:justify-center items-center">
            { <div className=" flex gap-1 md:gap-5 w-[40%] md:w-[70%]  justify-between">
            {images.map((image,index)=>{
                return(
                    <img src={image} alt={image} key={index} />
                )
            })}

        </div>}
            <p className="w-[40%] md:w-[30%] flex items-center gap-1 text-primary font-semibold text-sm md:text-lg">Meet all customers <AiOutlineArrowRight /></p>
          </div>
        </div>
    </div>
  )
}
