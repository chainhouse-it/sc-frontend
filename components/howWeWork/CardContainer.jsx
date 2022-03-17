import React from 'react';
import Link from 'next/link';
import SmallHeader from '../shared/SmallHeader';

const CardContainer = () => {
	return (
		<div className='grid grid-cols-2 gap-14 xl:grid-cols-1 mt-section section-wrapper relative'>
			<img
				src='images\howWework\workbg.png'
				alt='background'
				className='absolute top-0 left-0 w-full h-full'
			/>
			<TextBox
				header='High performance'
				description='High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
				ImageLink='/images/circle.png'
			/>
			<TextBox
				header='Best effieciency'
				description='
					High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
				ImageLink='/images/chart.png'
			/>
			<TextBox
				header='Solid security'
				description='High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
				ImageLink='/images/shield.png'
			/>
			<TextBox
				header='Wallet Development'
				description='High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
				ImageLink='/images/wallet.png'
			/>
		</div>
	);
};

export default CardContainer;

function TextBox({ header, description, ImageLink }) {
	return (
		<div className='w-full rounded-lg flex items-start flex-col justify-between border-gradient-only-green sm:w-full'>
			<div className='flex justify-start items-start sm:relative sm:flex-col'>
				<img
					src={ImageLink}
					className='px-8 pr-2 pt-6 sm:absolute sm:right-0 sm:top-0
				sm:w-[125px] xs:w-[100px] xs:top-2'
					alt=''
				/>
				<div className='p-6 '>
					<div className='pr-10'>
						<SmallHeader text={header} />
					</div>
					<p className='text-[#E6E6E6] text-base font-semibold py-6 sm:pt-12 '>
						{description}
					</p>
				</div>
			</div>
			<div className='w-full h-[1px] bg-[#1F1E26] '></div>

			<Link href='/how-we-work' passHref>
				<div className='text-white pl-10 py-8 font-medium text-[18px] flex items-center justify-around cursor-pointer z-50'>
					<p className='hover:scale-[1.05] hover:pr-2 transition-all'>
						Learn More
					</p>
					<img
						src={'/icons/arrow.svg'}
						className={'scale-[0.9] pl-1 pb-1'}
						alt=''
					/>
				</div>
			</Link>
		</div>
	);
}
