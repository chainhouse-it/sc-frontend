import LargeHeader from '../../shared/LargeHeader';
import SmallHeader from '../../shared/SmallHeader';
import Title from '../../shared/Title';
import { useRouter } from 'next/router';

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
	const router = useRouter();
	return (
		<div className='w-full py-24 px-52  xl:px-20 sm:px-10 xs:px-6 grid grid-cols-10 relative xl:grid-cols-4 md:grid-cols-1'>
			<div className='w-1/3 self-start absolute scale-[1.4] z-40 top-10 rotate-12 xs:hidden sm:w-4/5 md:w-4/5 md:top-20 lg:w-4/5 lg:opacity-30 xl:opacity-30 xl:w-4/5'>
				<img src='/images/fingerprint-image.svg' alt='' />
			</div>
			<div className='col-span-5 col-start-6  flex flex-col lg:col-start-2  lg:col-span-3 xl:col-span-2 xl:col-start-3'>
				<Title text='Experience' />
				<LargeHeader text='Projects we have Completed' />
				<div className='pt-10 '>
					{projects.map((project, key) => {
						return (
							<div key={key}>
								<div className='w-full h-[1px] bg-[#1F1E26] mt-4 sm:my-2'></div>
								<div className='flex justify-between items-center py-4'>
									<div>
										<div className='py-2'>
											<Title text={project.companyName} />
										</div>
										<SmallHeader text={project.title} />
									</div>
									<div
										onClick={() =>
											router.push('/case-studies')
										}
										className='cursor-pointer hover:scale-125'
									>
										<img
											src='/icons/arrow2.svg'
											alt='arrow2'
											className='w-[30px] mr-16'
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
