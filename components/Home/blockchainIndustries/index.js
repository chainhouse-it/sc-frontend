import { data } from 'autoprefixer';
import useWindowWidth from '../../../hooks/useWindowWidth';
import Title from '../../shared/Title';

function Card({ name }) {
	return (
		<div className='border-gradient-greenSmall flex gap-8 py-6 pl-8 pr-2 items-center'>
			<img src={`/icons/industriesIcon/${name}.png`} />
			<p className='text-white font-bold text-xl'>{name}</p>
		</div>
	);
}

function BlockchainIndustries() {
	return (
		<div className='px-52 py-24 xl:px-12 sm:px-4 relative overflow-hidden'>
			<img
				src='/images/background.png'
				alt=''
				className='absolute z-10 -left-[25px] top-[200px] blur-md scale-[1.5] opacity-20 xl:hidden'
			/>
			<div className='text-center z-20 sm:text-left'>
				<Title text='development' />
				<p className='text-7xl text-white font-bold sm:text-4xl'>
					Industries we serve using
					{useWindowWidth() > 639 ? <br /> : <></>}
					blockchain
					<span className='bg-clip-text text-transparent bg-gradient-to-br from-primaryGreen to-[#03FFD1]'>
						{' '}
						development
					</span>
				</p>
			</div>
			<div className='py-24 sm:py-12 sm:pt-24'>
				<div className='flex items-center gap-4'>
					<img src='/icons/servicesIcon.png' alt='' />
					<p className='text-2xl font-bold text-white'>Industries:</p>
				</div>
			</div>
			<div className='grid grid-cols-3 gap-14 lg:grid-cols-2 sm:grid-cols-1 sm:gap-6'>
				{dataIndustries.map((name) => (
					<Card name={name} />
				))}
			</div>
		</div>
	);
}

export default BlockchainIndustries;

const dataIndustries = [
	'Investment',
	'Real estate',
	'Decentralise finance',
	'Automative',
	'Decentralise Networks',
	'Energy & Utilities',
	'Healthcare & Life Sciences',
	'Insurance',
	'KYC blockchain solution',
	'Payment processing',
	'Quality Assurance',
	'Transport and logistic',
	'Telecom',
	'Oil & Gas',
	'Goverment',
	'Aviaton',
];
