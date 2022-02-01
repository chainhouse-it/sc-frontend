import PrimaryButton from '../../shared/PrimaryButton';
import LargeHeader from '../../shared/LargeHeader';
import Title from '../../shared/Title';

function TextBox({ header, description, imgLink }) {
	return (
		<div className='w-1/2 flex justify-around items-center sm:w-full rounded-lg btn'>
			<div className="bg-[#0D0D0D] w-[99.5%] h-[99.5%] rounded-lg z-10">
				<div className="flex justify-startitems-start ">
					<img src={imgLink} className="h-min pt-10 px-4" />
					<div className="">
						<p className='text-white text-2xl font-bold  pt-10 sm:text-lg'>
							{header}
						</p>
						<p className='text-[#E6E6E6] text-sm font-semibold py-4 pb-12'>{description}</p>
					</div>
				</div>
				<div className="w-full h-[1px] bg-[#1F1E26]"></div>
				<div className="text-white p-4 text-md">
					Learn More
				</div>
			</div>

		</div>
	);
}

function About() {
	return (
		<div className='px-32 py-72 flex justify-start items-start z-50 relative overflow-hidden xl:px-12 sm:px-4 sm:py-32 font-[poppins]'>
			<div className='w-1/2 xl:w-full'>
				<Title text='OVERVIEW' />
				<LargeHeader text='How we work' />
				<p className="text-[#CFCED8] text-sm py-6">
					Learn about our competences in designing blockchain solutions for your needs - both commonly available ecosystems like Ethereum.
				</p>
				<div className='w-max flex flex-col justify-around items-center gap-10  sm:gap-0  '>
					<div className='w-max flex gap-14 sm:block'>
						<TextBox
							header='High performance'
							description='High avaliability and trade matching engine to sustain a deep orderbook on all pains. '
							imgLink='/images/circle.png'
						/>
						<TextBox
							header='Best effieciency'
							description='High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
							imgLink='/images/chart.png'
						/>
					</div>
					<div className='w-max flex gap-14 sm:block'>
						<TextBox
							header='Solid security'
							description='High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
							imgLink='/images/shield.png'
						/>
						<TextBox
							header='Quality of customer service'
							description='High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
							imgLink='/images/wallet.png'
						/>
					</div>
				</div>
			</div>
			<img
				src='/images/rocket.png'
				className='absolute w-[400px] -right-[0px] z-20 xl:w-[300px] xl:-right-[75px] xl:top-12 sm:-right-[50px] sm:w-[150px]'
			/>
		</div>
	);
}

export default About;
