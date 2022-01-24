function LoadingScreen() {
	return (
		<div className='w-100 h-screen grid place-items-center bg-black'>
			<div>
				<span className='font-montserrat text-6xl select-none scale-animation flex md:text-6xl'>
					<span className='text-white font-bold'>
						<span>chain</span>
						<div className='border-b-4 border-[#02FE85] borderAnimationOne md:mt-2'></div>
					</span>
					<span className='text-white font-light'>
						<span>house</span>
						<div className='w-0 border-b-4 border-white borderAnimationTwo md:mt-2'></div>
					</span>
				</span>
			</div>
		</div>
	);
}

export default LoadingScreen;
