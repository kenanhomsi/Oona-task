import { useAppSelector } from "../redux/store"
import {AiOutlineArrowRight} from 'react-icons/ai'

export default function UpperFooter() {
    const upperData=useAppSelector((state)=>state.footer.upperSection)
  return (
    <div className=" bg-bgPrimary px-sectionMd md:px-sectionLg text-center py-16 flex flex-col justify-center items-center gap-10">
        <h3 className=" text-black/80 text-3xl md:text-5xl font-semibold  w-[60%]">{upperData.text}</h3>
        <button className="text-white px-6 py-2 
        flex items-center gap-1 bg-primary rounded-sm
         hover:gap-5 transition-all">{upperData.btn} <AiOutlineArrowRight/></button>
    </div>
  )
}
