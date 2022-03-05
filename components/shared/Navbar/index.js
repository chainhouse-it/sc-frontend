import useWindowWidth from '../../../hooks/useWindowWidth';
import { Fade as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import Router from 'next/router';

export default function Navbar() {
	const [open, cycleOpen] = useCycle(false, true);
	// const navigate = useNavigate();

	return (
		<nav
			className={`flex justify-between relative px-52 py-10 text-[#FFF] xl:px-12 sm:px-4`}
		>
			<p
				className='text-4xl font-light z-20 flex cursor-pointer'
				onClick={() => Router.push('/')}
			>
				<span className='font-bold'>chain</span>
				<span className='font-light'>house.it</span>
			</p>
			{useWindowWidth() < 1280 ? (
				<div
					className={`transition-opacity z-[60]`}
					onClick={cycleOpen}
				>
					<Hamburger toggled={open} />
				</div>
			) : (
				<>
					<div className='flex flex-row items-center justify-self-center font-medium text-lg cursor-pointer'>
						<Link href='#about' passHref>
							<p className='px-3'>How we work</p>
						</Link>
						<Link href='what-is-web3' passHref>
							<p className='px-3'>What is Web3</p>
						</Link>
						<Link href='#ourTeam' passHref>
							<p className='px-3'>Our Team</p>
						</Link>
						<Link href='#services' passHref>
							<p className='px-3'>Services</p>
						</Link>
						<Link href='#development' passHref>
							<p className='px-3'>Development</p>
						</Link>
					</div>
					<Link href='#contact' passHref>
						<button className='rounded-[999px] px-10 py-3 items-end backdrop-blur-[200px] bg-[#0E0D16] border'>
							Estimate the project
						</button>
					</Link>
				</>
			)}
			<AnimatePresence>
				{open && (
					<motion.div
						className={`w-full h-screen bg-[#000] z-50 left-0 top-0 absolute grid place-items-center`}
						initial={{ height: 0 }}
						animate={{
							height: '80vh',
						}}
						exit={{
							height: 0,
						}}
						transition={{ duration: 0.5, type: 'tween' }}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
								transition: 0.1,
							}}
							transition={{ duration: 0.2, delay: 0.3 }}
							className='text-center'
						>
							<p
								className='font-medium py-6 cursor-pointer'
								onClick={cycleOpen}
							>
								<Link href='#about' passHref>
									How we work
								</Link>
							</p>
							<p
								className='font-medium py-6 cursor-pointer'
								onClick={cycleOpen}
							>
								<Link href='#web3' passHref>
									What is web3
								</Link>
							</p>
							<p
								className='font-medium py-6 cursor-pointer'
								onClick={cycleOpen}
							>
								<Link href='#ourTeam' passHref>
									Our Team
								</Link>
							</p>
							<p
								className='font-medium py-6 cursor-pointer'
								onClick={cycleOpen}
							>
								<Link href='#services' passHref>
									Services
								</Link>
							</p>
							<p
								className='font-medium py-6 cursor-pointer'
								onClick={cycleOpen}
							>
								<Link href='#development' passHref>
									Development
								</Link>
							</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
