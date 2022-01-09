import useWindowWidth from '../../../hooks/useWindowWidth';

export default function Hero() {
	return (
		<div className='px-72 py-[10%] mt-24 bg-[#0F0F0F] flex items-center relative overflow-hidden xl:px-24 xl:py-[20%] sm:px-8 xs:mt-32'>
			<div className='w-1/2 xl:w-full xl:flex flex-col xl:justify-center'>
				<p className='text-6xl font-bold text-white sm:text-3xl'>
					{useWindowWidth() > 639 ? (
						<>
							<span className='text-[#05f899]'>Blockchain</span>
							<p>Software</p>
							<p>Development House</p>
						</>
					) : (
						<p>Blockchain Software Development House</p>
					)}
				</p>
				<h5 className='font-normal text-[#dcdcdc] text-justify py-5 text-lg sm:text-sm'>
					Learn about our competences in designing blockchain
					solutions for your needs - both commonly available
					ecosystems like or both commonly available ecosystems like -
					both commonly available ecosystems like
				</h5>
				<div className='flex gap-5 xs:flex-col'>
					<button className='btn-primary'>Get started</button>
					<button className='btn-primary bg-[#05F899] border-[#05f899] text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-[#05f899]  hover:border hover:border-[#05f899]'>
					Let's start
					</button>
				</div>
			</div>
			{/* rightSide */}
			<div className='absolute text-9xl text-[#1b1b1b] font-black -right-72 scale-125 select-none xl:hidden'>
				<p>Blockchain</p>
				<p>Software</p>
				<p>House</p>
			</div>
		</div>
	);
}
