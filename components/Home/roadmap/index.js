import LargeHeader from "../../shared/LargeHeader";
import Title from "../../shared/Title";

export default function Roadmap() {
    return (
        <div className="w-screen px-52 py-32 grid grid-cols-1 justify-items-stretch relative xl:px-12 sm:px-4">
            <div className='w-1/3 self-start absolute -scale-x-[1.5] scale-[1.5] z-40 top-96 -right-64 -rotate-12 xs:hidden sm:w-4/5 md:w-4/5 md:top-20 lg:w-4/5  xl:opacity-50 xl:w-4/5'>
                <img src='/images/fingerprint-image.svg' alt='' />
            </div>
            <div className="justify-self-center">
                <Title text="TARGET" />
            </div>
            <div className="justify-self-center">
                <LargeHeader text="Roadmap" />
            </div>

            <div className="w-full text-[18px] flex justify-between leading-[50px] py-16 items-center text-center font-semibold lg:flex-col lg:w-full lg:gap-5">
                <div className="w-1/5 border-b-2 bottom-border-gradient lg:w-3/4">
                    <p className="bg-clip-text bg-gradient-to-br from-[#02FE85] to-[#02FED1] text-transparent cursor-pointer">
                        Q4-2021
                    </p>
                </div>
                <div className="w-1/5 border-b-2 border-[#62616F] lg:w-3/4">
                    <p className="text-[#62616F] cursor-pointer">
                        Q1-2022
                    </p>
                </div>
                <div className="w-1/5 border-b-2 border-[#62616F] lg:w-3/4">
                    <p className="text-[#62616F] cursor-pointer">
                        Q2-2022
                    </p>
                </div>
                <div className="w-1/5 border-b-2 border-[#62616F] lg:w-3/4">
                    <p className="text-[#62616F] cursor-pointer">
                        Q3-2022
                    </p>
                </div>
                <div className="w-1/5 border-b-2 border-[#62616F] lg:w-3/4">
                    <p className="text-[#62616F] cursor-pointer">
                        Q4-2022
                    </p>
                </div>
            </div>

            <div className={`w-4/5 grid text-[white] ${roadmapElements.length > 7 ? "grid-rows-7" : ""} grid-flow-col sm:justify-items-center sm:grid-flow-row 2xl:w-full `}>
                {roadmapElements.map(element => (
                    <div className="
                    py-4 
                    border-b-[1px] 
                    border-[#222125] 
                    w-4/5
                    text-[18px]
                    tracking-tight
                    flex
                    gap-5
                    sm:w-4/5
                    xs:w-5/6
                    ">
                        <img src={`/icons/roadmap/${element.isDone ? "done" : "planned"}.svg`} />
                        {element.content}
                    </div>
                ))}
            </div>

        </div>
    )
}

const roadmapElements = [
    { content: 'Setting up legal entity', isDone: true },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },
    { content: 'Setting up legal entity', isDone: false },

]