import LargeHeader from '../../shared/LargeHeader';
import SmallHeader from '../../shared/SmallHeader';
import Title from '../../shared/Title';
import Link from 'next/link';

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

function About() {
	return (
		<div
			className='px-52 py-32 xl:px-12 sm:px-4 flex justify-start items-start font-[poppins]'
			name='about'
			id='about'
		>
			<div className='w-full '>
				<Title text='OVERVIEW' />
				<div className='py-8'>
					<LargeHeader text='How we work' />
				</div>
				<p className='text-[#CFCED8] text-lg pb-20 w-1/2 xl:w-full'>
					We start with a meeting to get to know you and your idea.
					That&apos;s when a lot of ideas come in - both ways. You can
					come to us with ready technical documentation and have the
					already described and designed system created. We can then
					start work on software development the next day after
					agreeing the terms of cooperation. The system you outsource
					is created quickly and efficiently
				</p>
				<div className='grid grid-cols-2 gap-14 xl:grid-cols-1'>
					<TextBox
						header='List of products to be made'
						description='This is a list of all the things you will need to do for the project. The list is never complete - it evolves along with the product itself and can be freely changed at any point in the project development process. We also set the MVP of the project (Minimum Viable Product), which will allow the project to be implemented in stages and gradually expand the application.'
						ImageLink='/images/circle.png'
					/>
					<TextBox
						header='Performance'
						description='
						This is the stage where the product is presented. The client gives. his last corrections and learns about the product he made. Why such technologies were used, why such components. this is how it looks like in the future, you can change the product, adjusting it to the trends, how the customer will be able to operate and take over the product after receipt. If changes are needed, we go back and keep working. We deal with it until we meet the requirements.
						
						'
						ImageLink='/images/chart.png'
					/>
					<TextBox
						header='To-do list'
						description='the team selects tasks and goals that we have set together. An action plan is established and people are assigned to tasks. Full access to our project management tool allows you to see the progress 24/7. You can communicate directly with the team as often as you wish.'
						ImageLink='/images/shield.png'
					/>
					<TextBox
						header='Retrospective'
						description='During the meeting, the team focuses not on the software, but on improving the development process itself. In this way, it is always in line with changing conditions and the different stages of the software life cycle, as well as with the news of the trend.'
						ImageLink='/images/wallet.png'
					/>
				</div>
			</div>
			<img
				src='/images/rocket.png'
				className='absolute w-[400px]
			-right-[0px] z-20 xl:w-[300px] xl:-right-[75px] xl:hidden xl:top-12
			sm:-right-[50px] sm:w-[150px]'
				alt=''
			/>
		</div>
	);
}

export default About;
