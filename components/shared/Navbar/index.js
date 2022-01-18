import useWindowWidth from '../../../hooks/useWindowWidth';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);

	return (
		<nav
			className={` w-full flex flex-row justify-between items-center px-36 py-6 text-[#FFF] font-[poppins] sm:p-4`}
		>
			<p className='text-3xl font-light z-20 '>
				<span className='font-bold'>chain</span>
				<span className='font-light'>house.io</span>
			</p>
			{useWindowWidth() < 1280 ? (
				<div className={`transition-opacity`}>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			) : (
				<div className='flex flex-row items-center font-semibold text-sm cursor-pointer'>
					<p className='px-6'>Overview</p>
					<p className='px-6'>Features</p>
					<p className='px-6'>Pricing</p>
					<p className='px-6'>About</p>
					{/* <p className='pl-20 flex flex-row items-center gap-2'>
						ENG
						<img
							src='/images/arrow.png'
							alt=''
							className='w-7 h-3'
						/>
					</p> */}
				</div>
			)}
			<div
				className={`${
					isOpen ? 'translate-y-1/2' : '-translate-y-full'
				} fixed w-full left-0 h-full transition-transform duration-500 sm:py-6 xl:py-6 z-50`}
			>
				<div className='w-full h-full bg-[#000] flex items-center justify-around px-40 xl:px-16'>
					<div className='flex  items-center flex-col font-normal text-xl cursor-pointer sm:text-sm'>
						<p className='p-6'>Overview</p>
						<p className='p-6'>Features</p>
						<p className='p-6'>Pricing</p>
						<p className='p-6'>About</p>
					</div>
				</div>
			</div>
		</nav>
	);
}
