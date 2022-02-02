import LargeHeader from '../../shared/LargeHeader';
import Title from '../../shared/Title';
import PrimaryButton from '../../shared/PrimaryButton';

export default function Hero() {
	return (
		<div className='w-full h-screen text-white flex justify-around items-start relative'>
			<div className='py-44 flex justify-around items-center flex-col sm:items-start sm:py-48 sm:px-4'>
				<Title text='DESIGN SMARTER, NOT HARDER' />
				<div className='w-1/2 py-4 text-center sm:text-left sm:w-full'>
					<LargeHeader text='Blockchain Software Development House' />
				</div>
				<p className='w-1/2 pt-2 text-center font-extralight text-md font-[poppins] sm:text-left sm:w-full sm:text-sm'>
					Learn about our competences in designing blockchain
					solutions for your needs - both commonly available
					ecosystems like Ethereum.
				</p>
				<div className='w-1/3 pt-10 flex justify-evenly items-center flex-row sm:w-full sm:gap-4 sm:justify-start md:gap-8 md:w-1/2'>
					<PrimaryButton text='Get In Touch' link='#' />
					<PrimaryButton text='Roadmap' link='#' isReversed />
				</div>
				<div className='flex justify-around flex-col items-center gap-3 absolute bottom-16 self-center z-50 sm:bottom-4'>
					<img src='/images/scroll-icon.svg' className='w-5' alt='' />
					<p className='font-[poppins] font-medium text-xs'>
						Scroll down
					</p>
					<img src='/images/arrow-icon.svg' className='h-5' alt='' />
				</div>
			</div>
		</div>
	);
}
