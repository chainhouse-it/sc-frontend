export default function About() {
    return (
        <>
            <AboutHero />
            <div className="w-full flex flex-col justify-start ">
                {/* info */}
                <div className="flex w-full px-48 py-32 justify-between items-center flex-row">
                    <div className=" text-white block w-1/3 text-lg text-justify" >
                        View Player Transactions, their items and NFTs. Take pride in your game collection and collect them. Vote for video games and leave comments under players and profiles! Follow infuencers and friends.
                        View Player Transactions, their items and NFTs. Take pride in your game collection and collect them.
                    </div>
                    <div className="w-1/2 h-max text-red-400">

                    </div>
                </div>
                {/* tech stack */}
                <div className="flex w-full flex-col px-48 items-start py-32">
                    <span className="w-1/2 h-32 text-white block text-4xl font-light relative" >
                        Tech <span className="text-[#9945FF] ">stack</span>
                        <div className="absolute top-12 left-0 bg-[#ffffff] h-[1px] w-[150px]"></div>
                    </span>
                    <div className="w-max h-max ">
                        <img
                            src='/images/tech-stack.png'
                        />
                    </div>
                </div>
                {/* team */}
                <div className="flex w-full flex-col px-48 items-start py-32">
                    <span className="w-1/2 h-32 text-white block text-4xl font-light relative" >
                        Meet our <span className="text-[#9945FF] ">team</span>
                        <div className="absolute top-12 left-0 bg-[#ffffff] h-[1px] w-[222px]"></div>
                    </span>
                    <div className="flex w-full flex-row h-max justify-evenly items-center flex-wrap lg:flex-col">
                        <TeamMember imageUrl='/images/binance.png' role="Frontend dev" fullname="Robert Gryń" />
                        <TeamMember imageUrl='/images/binance.png' role="Frontend dev" fullname="Robert Gryń" />
                        <TeamMember imageUrl='/images/binance.png' role="Frontend dev" fullname="Robert Gryń" />
                        <TeamMember imageUrl='/images/binance.png' role="Frontend dev" fullname="Robert Gryń" />
                        <TeamMember imageUrl='/images/binance.png' role="Frontend dev" fullname="Robert Gryń" />
                        <TeamMember imageUrl='/images/binance.png' role="Frontend dev" fullname="Robert Gryń" />
                        <TeamMember imageUrl='/images/binance.png' role="Frontend dev" fullname="Robert Gryń" />
                        <TeamMember imageUrl='/images/binance.png' role="Frontend dev" fullname="Robert Gryń" />
                    </div>
                </div>
            </div>
        </>
    )
}

function AboutHero() {
    return (
        <div className='px-48 pt-48 relative md:py-24 md:px-0'>
            <div className='relative flex'>
                <img
                    src='/images/about-text.svg'
                    className='absolute bottom-3 z-10 2xl:scale-75 xl:top-1/2 xl:bottom-0 lg:hidden md:hidden'
                />
                <div className='h-8 border bg-[#0F0F0F] z-0 w-3/4 -translate-x-96 xl:hidden'></div>
            </div>
        </div>
    )
}

function TeamMember(props) {
    return (
        <div className="flex flex-col items-center justify-start w-1/4 py-12 ">
            <div className = "relative w-[320px] h-[320px]">
                <img
                    className="w-full h-full absolute"
                    src={props.imageUrl}
                />
            </div>
            <span className="text-[#9945FF] font-light" >{props.role}</span>
            <span className="text-white text-2xl font-light" >{props.fullname}</span>
        </div>
    );
}