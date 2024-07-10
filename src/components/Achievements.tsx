import { useAppSelector } from "../redux/store"
import booking from '../assets/booking.png'
import clubs from '../assets/clubs.png'
import payments from '../assets/payments.png'
import member from '../assets/member.png'
import { useEffect, useState,useRef } from "react"

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
export default function Achievements() {
    const myElementRef = useRef();
    const isInViewport = useIsInViewport(myElementRef);
    const [counterFinish,setcounterFinish]=useState(false);
    const AchieveData=useAppSelector((state)=>state.body.achievements);
    const CountUpAnimation = ({
        initialValue,
        targetValue,
    }:{
        initialValue:number,
        targetValue:number,
    }) => {
        const [count, setCount] = useState(initialValue);
        const duration = 5; // 4 seconds
        
        console.log(isInViewport);
        useEffect(() => {
            let startValue = initialValue;
            const interval = Math.floor(
                duration / (targetValue - initialValue));
     
            const counter = setInterval(() => {
                startValue +=500;
                setCount(startValue);
                if (startValue >= targetValue) {
                    clearInterval(counter);
                    setcounterFinish(true);
                }
            }, duration);
     
            return () => {
                clearInterval(counter);
            };
        }, []);
     
        return (
            < >
                {count}
            </>
        );
    };
    return (
    <div className="flex bg-bgPrimary justify-between py-20 items-center px-sectionMd md:px-sectionLg">
        {/* text */}
        <div className=" w-[40%] md:w-[50%] flex flex-col gap-2">
            <h3  className="flex flex-col gap-1 text-secondary  text-2xl md:text-3xl font-semibold">{AchieveData.sectionText1}
                <span className="text-primary">{AchieveData.sectionText2}</span>
            </h3>
            <p className="text-sm">{AchieveData.sectionParagraph}</p>
        </div>
        {/* numbers */}
        <div className=" w-[50%] flex flex-wrap gap-2 sm:grid  sm:grid-cols-2 " ref={myElementRef}>
            {isInViewport &&
                AchieveData.achievements_items.map((ele,index)=>{
                    return(
                        <div key={index} className="flex gap-4 items-center">
                                <div className="">
                                    <img className="w-[34px]" src={ ele.icon === 'member' ? member : ele.icon === 'clubs' ? clubs : ele.icon === 'payments' ? payments :   booking } alt={ele.icon} />
                                </div>
                                <div className="">
                                    <p className=" text-secondary transition-all  text-xl font-bold"> {counterFinish?ele.number: <CountUpAnimation initialValue={0} targetValue={+ele.number}/>}</p>
                                    <span className="text-threed text-sm">{ele.text}</span>
                                </div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}
