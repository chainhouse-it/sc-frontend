import useWindowWidth from '../../../hooks/useWindowWidth';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);

	return (
		<nav
			className={`${
				isOpen ? 'fixed' : ''
			} bg-[#0F0F0F] w-full top-0 flex flex-row justify-between items-center px-48 pt-12 text-[#C1C1C1] z-50 font-[Montserrat] xl:px-24 sm:px-8`}
		>
			<p className='text-3xl font-light z-20 '>BSH</p>
			{useWindowWidth() < 1280 ? (
				<div className={`transition-opacity z-50`}>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			) : (
				<div className='flex flex-row items-center font-normal text-md cursor-pointer'>
					<p className='px-6'>About</p>
					<p className='px-6'>Contact</p>
					<p className='px-6'>Community</p>
					<p className='px-6'>Work</p>
					<p className='pl-20 flex flex-row items-center gap-2'>
						ENG
						<img
							src='/images/arrow.png'
							alt=''
							className='w-7 h-3'
						/>
					</p>
				</div>
			)}
			<div
				className={`${
					isOpen ? 'translate-y-1/2' : '-translate-y-full'
				} fixed w-full left-0 h-4/5 transition-transform duration-500 sm:py-6 xl:py-6`}
			>
				<div className='w-full h-full bg-[#0F0F0F] flex items-center justify-around px-40 xl:px-16'>
					<div className='flex  items-center flex-col font-normal text-xl cursor-pointer sm:text-sm'>
						<p className='p-6'>About</p>
						<p className='p-6'>Contact</p>
						<p className='p-6'>Community</p>
						<p className='p-6'>Work</p>
						<p className='p-6 flex flex-row items-center gap-2'>
							ENG
							<img
								src='/images/arrow.png'
								alt=''
								className='w-7 h-3'
							/>
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
}
