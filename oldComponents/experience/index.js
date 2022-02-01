import LargeHeader from '../../shared/LargeHeader';
import SmallHeader from '../../shared/SmallHeader';
import Title from '../../shared/Title';

const projects = [
	{
		companyName: 'everdome.io',
		title: 'Metaverse',
	},
	{
		companyName: 'articleverse.com',
		title: 'Article Verse',
	},
	{
		companyName: 'globeradius.com',
		title: 'Globe Radius',
	},
	{
		companyName: 'loungeverse.com',
		title: 'Lounge Verse',
	},
];

export default function Experience() {
	return (
		<div className='w-full h-screen flex flex-row justify-between relative  md:flex-col md:pb-[400px]'>
			<div className='w-full flex flex-col justify-evenly items-start'>
				<div className='flex flex-col pl-32 sm:pl-4 lg:pl-10'></div>
				<div className='h-1/2'></div>

				<div className='w-1/3 self-start absolute scale-[1.4] z-40 top-0 rotate-12 sm:w-4/5 md:w-2/5 md:top-20 lg:w-4/5 xl:top-40'>
					<img src='/images/fingerprint-image.svg' />
				</div>
			</div>
			<div className='w-screen flex flex-col justify-start pr-32 relative sm:pr-0 '>
				<Title text='Experience' />
				<LargeHeader text='Projects we have Completed' />

				<div className=' left-44 top-72 md:left-4'>
					{projects.map((project) => {
						return (
							<div className='py-4'>
								<div className="w-full h-[1px] bg-[#1F1E26] my-4"></div>
								<div className="py-2">
									<Title text={project.companyName} />
								</div>
								<SmallHeader text={project.title} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
