import { useAppSelector } from "../redux/store"
import UnlockImage from '../assets/unlock.png'
import { useEffect, useRef, useState } from "react";
function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}

export default function Unlock() {
    const myElementRef = useRef();
    const isInViewport = useIsInViewport(myElementRef);

    const UnlockData=useAppSelector((state)=>state.body.unlock)
  return (
    <div id="Features"  className="flex items-center  justify-between gap-5 py-8 px-sectionMd md:px-sectionLg" ref={myElementRef} >
        
        {
            isInViewport &&  <div className="w-[30%] md:w-[40%]  slide-right">
            <img src={UnlockImage} className=" w-[350px]" alt={UnlockData.unlock_img} />
        </div>
        }
        
        {/* info */}
        { isInViewport &&
        <div className="w-[45%]  md:w-[55%]  flex flex-col gap-3 md:gap-6 slide-left">
            <h3 className=" text-secondary font-semibold w-[100%] md:w-[80%] text-xl sm:text-2xl md:text-3xl">{UnlockData.sectionText}</h3>
            <p className="text-threed text-sm  line-clamp-3 md:line-clamp-none">{UnlockData.sectionParagraph}</p>
            <div  className="">
                <button className="text-white bg-primary px-2 py-1 sm:px-6  sm:py-2">{UnlockData.btn}</button>
            </div>
        </div>
}
    </div>
  )
}
