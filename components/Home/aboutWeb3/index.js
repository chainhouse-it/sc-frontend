import Title from '../../shared/Title';
import LargeHeader from '../../shared/LargeHeader';
import Link from 'next/link';

function InfoBlock({ imgUrl, title, content }) {
	return (
		<div className='col-span-3 p-8 text-[white] font-[poppins] border-[1px] border-[#02FE85] backdrop-blur-[500px] rounded-xl'>
			<img src={imgUrl} className='w-[75px]' alt='' />
			<p className='text-[25px] font-bold py-4'>{title}</p>
			<p className='text-[16px] font-semibold text-[#CFCED8] pb-6 text-justify'>
				{content}
			</p>
		</div>
	);
}

export default function AboutWeb3() {
	return (
		<div
			className='w-screen px-52 xl:px-20 sm:px-10 xs:px-6 relative grid grid-cols-3 gap-4 justify-items-center py-24 font-[poppins]'
			name='web3'
		>
			<div className='flex flex-col items-center col-span-3'>
				<Title text='EXPERIENCE' />
				<div className='py-6 z-20 pb-20 sm:py-4'>
					<LargeHeader text='What exactly is web3?' />
				</div>
			</div>
			<img
				src='/images/background.png'
				alt=''
				className='absolute left-32 top-12
			z-10 object-cover scale-y-[1.4] scale-x-[2.1] opacity-40 xl:left-0
			sm:scale-[3]'
			/>
			<div className='relative w-full col-span-3 p-16  z-40 border-[1px] border-[#02FE85] backdrop-blur-[250px] text-[white] rounded-xl overflow-hidden sm:gap-5 sm:mt-20 sm:px-4 text-center'>
				<img
					src='/images/zawijas.svg'
					alt=''
					className='absolute top-0 right-0 z-10 object-cover  opacity-40 lg:hidden'
				/>
				<Title text='EXPERIENCE' />
				<div className='z-20 pt-4 font-bold text-[46px] sm:text-4xl'>
					<p className='z-20'>Blockchain and dApps</p>
				</div>
				<p className='w-3/4 font-semibold text-[#CFCED8] font-[20px] py-8 pr-8 text-justify sm:px-2 lg:w-4/5 sm:w-full sm:font-4xl'>
					High avaliability and trade matching engine to sustain a
					deep orderbook on all pains. High avaliability and trade
					matching engine to sustain a deep orderbook on all pains.
					High avaliability and trade matching engine to sustain a
					deep orderbook on all pains.High avaliability and trade
					matching engine to sustain a deep orderbook on all pains.
				</p>
				<Link href='/soon' passHref>
					<div className='font-medium text-[18px] flex sm:px-2'>
						<p className=''>Learn More</p>
						<img
							src={'/icons/arrow.svg'}
							className={'scale-[0.9] pl-1 pb-1'}
							alt=''
						/>
					</div>
				</Link>
			</div>
			<div className='z-20 py-6 w-full col-span-3 grid grid-cols-3 gap-8 content-start xl:grid-cols-1'>
				<div className='col-span-1'>
					<InfoBlock
						imgUrl={'/about/flying-coins.png'}
						title='dApps'
						content='High  avaliability  and trade  matching engine to sustain a deep orderbook on all pains. High avaliability '
					/>
				</div>
				<div className='col-span-1'>
					<InfoBlock
						imgUrl={'/about/flying-coins.png'}
						title='dApps'
						content='High  avaliability  and trade  matching engine to sustain a deep orderbook on all pains. High avaliability '
					/>
				</div>
				<div className='col-span-1'>
					<InfoBlock
						imgUrl={'/about/flying-coins.png'}
						title='dApps'
						content='High  avaliability  and trade  matching engine to sustain a deep orderbook on all pains. High avaliability '
					/>
				</div>
			</div>
		</div>
	);
}
