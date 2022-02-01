import PrimaryButton from '../../shared/PrimaryButton';
import LargeHeader from '../../shared/LargeHeader';
import Title from '../../shared/Title';

function TextBox({ header, description, imgLink }) {
	return (
		<div className='w-1/2 h-[300px] rounded-lg flex items-start flex-col justify-evenly border-gradient-only-green sm:w-full'>
			<div className="flex justify-start items-start ">
				<img src={imgLink} className="h-min pt-10 px-4" />
				<div className="">
					<p className='text-white text-2xl font-bold  pt-10 sm:text-lg'>
						{header}
					</p>
					<p className='text-[#E6E6E6] w-[90%] text-base font-semibold py-4 pb-12'>{description}</p>
				</div>
			</div>
			<div className="w-full h-[1px] bg-[#1F1E26]"></div>

			<div className="text-white pl-10 font-medium text-[18px]  flex items-center">
				Learn More
				<img src={"/icons/arrow.svg"} className={"scale-[0.9] pl-1 pb-1"} />

			</div>
		</div>
	);
}

function About() {
	return (
		<div className='px-32 py-72 flex justify-start items-start z-50 relative overflow-hidden xl:px-12 sm:px-4 sm:py-32 font-[poppins]'>
			<div className='w-1/2 xl:w-full'>
				<Title text='OVERVIEW' />
				<div className="py-8">

					<LargeHeader text='How we work' />
				</div>
				<p className="text-[#CFCED8] text-sm pb-20">
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
