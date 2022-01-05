export default function Navbar() {
	return (
		<div className='w-screen flex flex-row justify-between items-center px-48 pt-12 text-[#C1C1C1] font-[Montserrat]'>
			<p className='text-3xl font-light'>BSH</p>
			<div className='flex flex-row items-center font-normal text-md cursor-pointer'>
				<p className='px-6'>About</p>
				<p className='px-6'>Contact</p>
				<p className='px-6'>Community</p>
				<p className='px-6'>Work</p>
				<p className='px-16 flex flex-row items-center gap-2'>
					ENG
					<img src='/images/arrow.png' alt='' className='w-7 h-3' />
				</p>
			</div>
		</div>
	);
}
