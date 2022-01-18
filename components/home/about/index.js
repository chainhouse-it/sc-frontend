import PrimaryButton from '../../shared/PrimaryButton';
import SmallHeader from '../../shared/SmallHeader';
import Title from '../../shared/Title';

function TextBox({ header, description }) {
	return (
		<div className='w-1/2 sm:w-full'>
			<p className='text-white text-2xl font-bold pt-10 pb-2 sm:text-lg'>
				{header}
			</p>
			<p className='text-white sm:text-sm'>{description}</p>
		</div>
	);
}

function About() {
	return (
		<div className='px-32 py-72 flex relative overflow-hidden xl:px-12 sm:px-4 sm:py-32'>
			<div className='w-1/2 xl:w-full'>
				<Title text='Overview' />
				<SmallHeader text='How we work' />
				<div className='flex flex-col gap-10 sm:gap-0'>
					<div className='w-10/12 flex gap-14 sm:block'>
						<TextBox
							header='Solid security'
							description='High avaliability and trade matching engine to sustain a deep orderbook on all pains. '
						/>
						<TextBox
							header='Solid security'
							description='High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
						/>
					</div>
					<div className='w-10/12 flex gap-14 sm:block'>
						<TextBox
							header='Solid security'
							description='High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
						/>
						<TextBox
							header='Solid security'
							description='High avaliability and trade matching engine to sustain a deep orderbook on all pains.'
						/>
					</div>
				</div>
				<div className='my-10 w-[115px]'>
					<PrimaryButton text='Learn more' link='#' />
				</div>
			</div>
			<img
				src='/images/rocket.png'
				className='absolute w-[600px] -right-[150px] xl:w-[300px] xl:-right-[75px] xl:top-12 sm:-right-[50px] sm:w-[150px]'
			/>
		</div>
	);
}

export default About;
