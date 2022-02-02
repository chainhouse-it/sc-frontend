import LargeHeader from '../../components/shared/LargeHeader';
import PrimaryButton from '../../components/shared/PrimaryButton';
import Title from '../../components/shared/Title';
import Box from '../../components/shared/Box';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function Hero() {
	return (
		<Box
			className={`${
				useWindowWidth() > 639 ? 'flex flex-col' : ''
			} mt-12 items-center`}
		>
			<p className='text-7xl font-bold text-white text-center sm:text-4xl sm:text-left'>
				Blockchain software
			</p>
			<p className='text-center text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#02FE85] to-[#02FED1] sm:text-4xl sm:text-left'>
				Development <span className='text-white'>House</span>
			</p>
			<p className='text-desc font-semibold text-lg w-1/2 py-8 text-center sm:w-full sm:text-left'>
				Learn about our competences in designing blockchain solutions
				for your needs - both commonly available ecosystems like
				Ethereum.
			</p>
			<div className='flex gap-4'>
				<PrimaryButton text='Get in touch' link='#' />
				<PrimaryButton text='Roadmap' link='#' isReversed />
			</div>
		</Box>
	);
}
