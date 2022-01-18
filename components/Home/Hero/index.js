import LargeHeader from '../../shared/LargeHeader';
import Title from '../../shared/Title';
import PrimaryButton from '../../shared/PrimaryButton';
export default function Hero() {
	return (
		<div className='w-full h-max text-white flex justify-around items-center pb-48'>
			<div className='py-44 flex justify-around items-center flex-col sm:items-start sm:py-20 sm:px-4'>
				<Title text='DESIGN SMARTER, NOT HARDER' />

				<div className='w-1/2 py-4 text-center sm:text-left'>
					<LargeHeader text='Blockchain Software Development House' />
				</div>

				<p className='w-1/2 pt-2 text-center font-extralight text-md font-[poppins] sm:text-left sm:w-full sm:text-sm'>
					Learn about our competences in designing blockchain
					solutions for your needs - both commonly available
					ecosystems like Ethereum.
				</p>

				<div className='w-1/3 pt-10 flex justify-evenly items-center flex-row sm:w-full sm:gap-4 sm:justify-start'>
					<PrimaryButton text='Get In Touch' link='#' />

					<PrimaryButton text='Roadmap' link='#' isReversed />
				</div>
			</div>
		</div>
	);
}
