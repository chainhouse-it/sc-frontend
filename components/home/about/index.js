export default function About() {
    return (
        <AboutHero/>
    )
}

function AboutHero() {
    return (
        <div className='px-72 py-48 relative md:py-24 md:px-0'>
        <div className='py-40 relative flex justify-center'>
            <img
                src='/images/about-text.svg'
                className='absolute bottom-40 z-10 2xl:scale-75 xl:top-1/2 xl:bottom-0 lg:hidden md:hidden'
            />
            <div className='h-8 border bg-[#0F0F0F] z-0 w-full xl:hidden'></div>
        </div>
    </div>
    )
}