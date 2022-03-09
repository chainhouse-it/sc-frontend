import React from 'react';
import BreadCrumb from '../shared/Box/BreadCrumb';

const Hero = ({ breadcrumbText, title, text }) => {
	return (
		<div className='  text-white  mt-[100px] md:mt-[70px] min-h-[60vh] '>
			<div className='flex lg:flex-col flex-row gap-[84px] md:gap-4  section-wrapper'>
				{/* Left section */}
				<div className='flex flex-col gap-4 flex-[0.5]'>
					<BreadCrumb title={breadcrumbText} />

					<h1 className='font-poppins text-[50px] leading-[130%] md:text-3xl letter-spacing-[-0.03em] text-white font-bold'>
						{title}
					</h1>
					<p className='font-source text-[25px] leading-[40px] tracking-[-0.03em] text-[#CFCED8] '>
						{text}
					</p>
				</div>
				{/* Right section */}
				<div className='flex-[0.5] relative mt-2'>
					<img
						src='/images/web3/background.png'
						className='absolute  z-10 object-cover top-[-30px] opacity-80  left-0 scale-x-[1.5] scale-y-[1.8]'
					/>

					<img
						src='/images/web3/world.svg'
						alt='World map'
						className='w-full h-auto z-50 '
					/>
				</div>
			</div>

			<img
				src='/images/web3/spiral.png'
				alt=''
				className='w-full h-auto z-10 opacity-90 mt-5'
			/>
		</div>
	);
};

export default Hero;
