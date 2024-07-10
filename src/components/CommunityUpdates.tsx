import { useAppSelector } from "../redux/store"
import {AiOutlineArrowRight} from 'react-icons/ai'
import community1 from '../assets/community1.png'
import community2 from '../assets/community2.png'
import community3 from '../assets/community3.png'

export default function CommunityUpdates() {
    const CommunityUpData=useAppSelector((state)=>state.body.community_updates);
    return (
    <div id="Community" className="flex flex-col gap-2 px-sectionMd md:px-sectionLg py-16 items-center text-center">
        <h3 className="text-2xl sm:text-3xl text-secondary font-semibold">{CommunityUpData.sectionHeader}</h3>
        <p className=" text-threed line-clamp-3 sm:line-clamp-none text-sm w-[80%] sm:w-[50%]">{CommunityUpData.sectionParagraph}</p>
        <div className=" flex justify-center gap-24 sm:gap-3 flex-wrap sm:flex-nowrap  items-center  my-4 mb-14 ">
            {
                CommunityUpData.items.map((ele,index)=>{
                    return(
                        <div key={index} className="CommunityCard transition-transform flex relative flex-col justify-center items-center">
                            <img src={index===0?community1 :index ===1 ? community2 :community3} alt={ele.img} className="w-[255px] h-[200px]" />
                            <div className=" absolute  shadow-lg bg-bgPrimary w-[90%] rounded-lg p-5 bottom-[-70px] flex flex-col gap-2 justify-center items-center">
                                <p className="text-sm text-threed font-semibold ">{ele.text}</p>
                                <span className="flex gap-2  cursor-pointer items-center text-primary">Readmore <AiOutlineArrowRight/> </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}
