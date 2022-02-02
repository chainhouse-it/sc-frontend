import useWindowWidth from '../../../hooks/useWindowWidth';
import { Fade as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

export default function Navbar() {
	const [open, cycleOpen] = useCycle(false, true);

	return (
		<nav
			className={`flex justify-between px-52 py-10 text-[#FFF] xl:px-12 sm:px-4`}
		>
			<p className='text-4xl font-light z-20'>
				<span className='font-bold'>chain</span>
				<span className='font-light'>house.io</span>
			</p>
			{useWindowWidth() < 1280 ? (
				<div
					className={`transition-opacity z-[60]`}
					onClick={cycleOpen}
				>
					<Hamburger />
				</div>
			) : (
				<>
					<div className='flex flex-row items-center justify-self-center font-medium gap-8 text-lg cursor-pointer'>
						<p>Overview</p>
						<p>Features</p>
						<p>Pricing</p>
						<p>About</p>
					</div>
					<button className='rounded-[999px] px-10 py-3 items-end backdrop-blur-[200px] bg-[#0E0D16] border'>
						Get In Touch
					</button>
				</>
			)}
			<AnimatePresence>
				{open && (
					<motion.div
						className={`w-full h-screen bg-red-500 z-50 left-0 top-0 absolute`}
						initial={{ height: 0 }}
						animate={{
							height: '100%',
						}}
						exit={{
							height: 0,
							transition: { duration: 0.3 },
						}}
					></motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
