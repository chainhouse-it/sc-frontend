import useWindowWidth from '../../../hooks/useWindowWidth';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);

	return (
		<nav className='flex flex-row justify-between items-center px-48 pt-12 text-[#C1C1C1] font-[Montserrat] xl:px-24 sm:px-10'>
			<p className='text-3xl font-light'>BSH</p>
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
				} absolute w-full left-0 h-1/2 p-10 z-40 transition-transform duration-500`}
			>
				<div className='w-full h-full bg-gradient-to-t from-[#00FE9B] bg-[#7A41F6] rounded-2xl flex items-center px-40 xl:px-16'></div>
			</div>
		</nav>
	);
}
