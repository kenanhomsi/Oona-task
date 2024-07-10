import { useAppSelector } from "../redux/store"
import image1 from '../assets/Com_home1.png'
import image2 from '../assets/Com_home2.png'
import image3 from '../assets/Com_home3.png'
export default function Community() {
    const CommunityData=useAppSelector((state)=>state.home.Community);
  return (
    <div className=" md:px-sectionLg px-sectionMd py-6 flex flex-col gap-7 items-center justify-center text-center ">
        <h3 className="text-secondary text-3xl max-w-md font-semibold">{CommunityData.sectionHeader}</h3>
        <p className=" text-threed text-sm">{CommunityData.sectionParagraph}</p>
        <div className=" flex gap-1 flex-wrap md:flex-nowrap  md:gap-5 items-center justify-center ">
            {
                CommunityData.community_types.map((ele,index)=>{
                    return(
                        <div key={index} className="communityCard  p-1 flex flex-col gap-1  md:gap-5 md:p-10 items-center  ">
                           <img className=" w-[50px]" src={index === 0? `${image1}`:index ===1 ?`${image2}`:`${image3}`} alt={ele.icon} />
                           <h4 className=" text-secondary text-sm sm:text-lg md:text-3xl font-bold w-[70%]">{ele.title}</h4>
                           <p className=" text-threed text-[10px] sm:text-xs md:text-sm w-[60%]">{ele.description}</p>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}
