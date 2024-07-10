import { useAppSelector } from "../redux/store"
import { CiFacebook , CiLinkedin ,CiTwitter ,CiYoutube } from "react-icons/ci";
import { BsSendArrowUp } from "react-icons/bs";

import Logo from '../assets/FooterLogo.png'
export default function Footer() {
    const footerData=useAppSelector((state)=>state.footer.buttomSection);
  return (
    <div className=" bg-[#263238] text-white px-sectionMd justify-between md:px-sectionLg py-16 flex gap-3 items-center">
        {/* info */}
        <div className="w-[30%]  flex flex-col gap-10">
            <img src={Logo} alt={footerData.info_section.icon} className=" w-[180px]" />
            <p className="w-[80%]">{footerData.info_section.text}</p>
            <div className=" flex gap-6 text-2xl">
               <button><CiFacebook/></button>
               <button><CiYoutube/></button>
               <button><CiLinkedin/></button>
               <button><CiTwitter/></button>
            </div>
        </div>
        {/* links */}
        <div className="w-[60%] flex gap-16 md:gap-16">
            <div className=" flex gap-16">
                {footerData.Links_section.columes.map((colume,index)=>{
                    return(
                    <div key={index} className="flex flex-col gap-3">
                        <h4 className="text-lg" >{colume.head}</h4>
                        <div className="flex flex-col gap-2">
                            {colume.links.map((ele,index)=>{
                                return(<p className=" cursor-pointer text-gray-400 text-sm" key={index}>{ele}</p>)
                            })}
                        </div>
                    </div>)
                })}
            </div>
            <div className=" flex flex-col gap-8 ">
                <h4 className="text-lg">Stay up to date</h4>
                <input type="text" className="p-2 rounded-md bg-gray-600" placeholder="Your email address" /> 
                <button className=" relative top-[-60px] right-[-165px] " ><BsSendArrowUp /></button>
            </div>
        </div>
    </div>
  )
}
