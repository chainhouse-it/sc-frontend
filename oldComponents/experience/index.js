import LargeHeader from '../../shared/LargeHeader';
import PrimaryButton from '../../shared/PrimaryButton';
import SmallHeader from '../../shared/SmallHeader';
import Title from '../../shared/Title';

const projects = [
	{
		companyName: 'Soon!',
		title: 'Project is in progress!',
	},
];

export default function Experience() {
	return (
		<div className='w-full flex flex-row justify-between relative pb-96 md:flex-col md:pb-[400px]'>
			<div className='w-full flex flex-col justify-evenly items-start'>
				<div className='flex flex-col pl-32 sm:pl-4  lg:pl-10'>
					<Title text='Experience' />
					<div className='py-4'>
						<SmallHeader text='Project we have created' />
					</div>
				</div>
				<div className='h-1/2'></div>

				<div className='w-1/3 self-start absolute top-20 sm:w-4/5 md:w-2/5 md:top-20 lg:w-4/5 xl:top-40'>
					<img src='/images/fingerprint-image.svg' />
				</div>
			</div>
			<div className='w-screen flex flex-col justify-start pr-32 relative sm:pr-0 '>
				<div className='absolute w-1/3 right-0 bottom-0 sm:w-1/2'>
					<img src='/images/eclipse.svg' />
				</div>
				<div className='absolute left-44 top-72 md:left-4'>
					{projects.map((project) => {
						return (
							<div className='py-4'>
								<Title text={project.companyName} />
								<SmallHeader text={project.title} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
