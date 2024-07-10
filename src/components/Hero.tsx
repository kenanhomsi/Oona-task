import { useAppSelector } from "../redux/store"
import heroImage from '../assets/Illustration.png'
export default function Hero() {
    const heroData=useAppSelector((state)=>state.home.hero);
  return (
    <div  className=" bg-bgPrimary relative md:px-sectionLg px-sectionMd flex items-center py-28  justify-around">
        <div className="flex flex-col gap-6 ">
            <h1 className=" text-secondary my-5 text-6xl font-semibold tracking-in-expand">
                {heroData.H1_text1}
                <br />
                <span className=" text-primary">{heroData.H1_text2}</span>
            </h1>
            <p className=" text-threed">{heroData.p}</p>
            <div className="">
                <button className="text-white bg-primary px-6 py-2 ">{heroData.btn}</button>
            </div>
        </div>
        <div className="">
            <img src={heroImage} alt={heroData.hero_img} className="heroImage" />
        </div>
        <div className="circles absolute bottom-2 left-[50%] flex gap-2">
            <p className=" bg-primary"></p>
            <p className=" bg-primary/70"></p>
            <p className=" bg-primary/40"></p>
        </div>
    </div>
  )
}
