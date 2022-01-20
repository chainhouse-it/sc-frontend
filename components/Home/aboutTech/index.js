import SmallHeader from '../../shared/SmallHeader';
import Title from '../../shared/Title';
import PrimaryButton from '../../shared/PrimaryButton';

function SlideWrapper({ header, description }) {
	return (
		<div className='w-[350px] flex flex-col items-center bg-gradient-to-b from-[#00a153] to-[#000000] rounded xl:w-full'>
			<p className='text-2xl text-white font-bold mt-5 sm:text-lg'>
				{header}
			</p>
			<p className='p-10 text-justify text-[#e7e7e7] sm:text-sm sm:'>
				{description}
			</p>
		</div>
	);
}

function AboutTech() {
	return (
		<div className='h-[80vh] px-52 flex items-center relative mt-96 mb-96 xl:mt-[500px] xl:px-12 sm:mb-[500px] sm:px-4'>
			<img
				src='/images/backgroundTwo.png'
				className='absolute z-0 -right-96'
			/>
			<img
				src='/images/backgroundTwo.png'
				className='absolute z-0 -top-96 -left-96'
			/>
			<div className='flex flex-col px-32 rounded-3xl z-10 bg-black overflow-hidden sm:px-0'>
				<div className='text-center pt-12 sm:text-left'>
					<Title text='About' />
					<SmallHeader text='What exactly is web3? ' />
				</div>
				<div className='flex gap-24 py-12 justify-between relative items-center xl:flex-col'>
					<div className='w-1/2 xl:w-full'>
						<img
							src='/images/Blockchain.png'
							alt=''
							className='w-[450px] h-[450px] 2xl:w-[300px] 2xl:h-[300px] xl:w-full'
						/>
					</div>
					<div className='w-1/2 xl:w-full'>
						<p className='text-white text-2xl font-bold pt-10 pb-2 sm:text-lg'>
							Blockchain and dApps
						</p>
						<p className='text-white sm:text-sm'>
							High avaliability and trade matching engine to
							sustain a deep orderbook on all pains. High
							avaliability and trade matching engine to sustain a
							deep orderbook on all pains. High avaliability and
							trade matching engine to sustain a deep orderbook on
							all pains.
						</p>
						<div className='w-[115px] mt-5'>
							<PrimaryButton text='Learn more' link='#' />
						</div>
					</div>
				</div>
				<div className='flex justify-around gap-8 mt-20 xl:flex-col sm:gap-20'>
					<SlideWrapper
						header='dApps'
						description='High avaliability and trade matching engine to sustain a deep orderbook on all pains. High avaliability and trade matching engine to sustain a deep. '
					/>
					<SlideWrapper
						header='Blockchain'
						description='High avaliability and trade matching engine to sustain a deep orderbook on all pains. High avaliability and trade matching engine to sustain a deep.'
					/>
					{/* <SlideWrapper
						header='Decentralized'
						description='High avaliability and trade matching engine to sustain a deep orderbook on all pains. High avaliability and trade matching engine to sustain a deep. '
					/> */}
				</div>
			</div>
		</div>
	);
}

export default AboutTech;
