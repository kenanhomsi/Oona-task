import { useAppSelector } from "../redux/store"
import clinetImage1 from '../assets/Logo1.png'
import clinetImage2 from '../assets/Logo2.png'
import clinetImage3 from '../assets/Logo3.png'
import clinetImage4 from '../assets/Logo4.png'
import clinetImage5 from '../assets/Logo5.png'
import clinetImage6 from '../assets/Logo6.png'
import clinetImage7 from '../assets/Logo7.png'
export default function Clients() {
    const images=[clinetImage1,clinetImage2,clinetImage3,clinetImage4,clinetImage5,clinetImage6,clinetImage7]
    const ClientsData=useAppSelector((state)=>state.home.clients);
  return (
    <div className="flex flex-col gap-4  overflow-hidden items-center md:px-sectionLg px-sectionMd py-6">
        <h3 className=" text-secondary text-3xl font-semibold">{ClientsData.sectionHeader}</h3>
        <p className=" text-threed text-sm">{ClientsData.sectionParagraph}</p>
        <div className="clinet_image_slider flex w-full  justify-between">
            {images.map((image,index)=>{
                return(
                    <img src={image} alt={image} key={index} className="w-[60px]" />
                )
            })}

        </div>
        
    </div>
  )
}
