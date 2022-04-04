import LargeHeader from '../../shared/LargeHeader';
import Title from '../../shared/Title';

function Member({ name, role, link, photo }) {
	return (
		<div className='relative flex flex-col items-center 3xl:max-w-[400px] border-gradient-green'>
			<div className='my-10 border-2 border-[#02fe9e] rounded-[9999px] overflow-hidden'>
				<img
					src={photo}
					alt=''
					className='w-[150px] h-[150px] object-cover'
				/>
			</div>
			<p className='text-2xl font-bold text-[#f1f1f1]'>{name}</p>
			<p className='text-lg pt-4 font-light text-[#CFCED8] pb-4'>
				{role}
			</p>
			<a
				target='_blank'
				href={link}
				rel='noreferrer'
				className='absolute top-5 right-5'
			>
				<img
					src='/icons/linkedin.png'
					className='cursor-pointer'
					alt=''
				/>
			</a>
			{/* <div className='flex w-full gap-4 justify-center my-8'>
				<a target='_blank' href={links[0]} rel='noreferrer'>
				<img
				src='/icons/ig.png'
				className='cursor-pointer'
				alt=''
				/>
				</a>
				<a target='_blank' href={links[1]} rel='noreferrer'>
				<img
				src='/icons/twitter.png'
				className='cursor-pointer'
				alt=''
				/>
				</a>
				<a target='_blank' href={links[2]} rel='noreferrer'>
				<img
				src='/icons/linkedin.png'
				className='cursor-pointer'
				alt=''
				/>
				</a>
			</div> */}
		</div>
	);
}

function OurTeam() {
	return (
		<div
			className='px-52 py-24 xl:px-12 sm:px-4'
			name='ourTeam'
			id='ourTeam'
		>
			<div className='text-center my-20'>
				<Title text='Team' />
				<LargeHeader text='Meet our team ' />
			</div>
			<div className='grid grid-cols-4 gap-14 items-center 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'>
				{team.map(({ name, role, link, photo }, key) => (
					<Member
						name={name}
						role={role}
						link={link}
						photo={photo}
						key={key}
					/>
				))}
			</div>
		</div>
	);
}

export default OurTeam;

const team = [
	{
		name: 'Amelia Legan',
		role: 'CEO',
		photo: '/images/members/amelia-legan.jpg',
		link: 'https://www.linkedin.com/in/amelia-legan-700702192/',
	},
	{
		name: 'Senior dev',
		role: 'Web3 dev',
		photo: '/images/members/z.jpg',
		link: 'https://www.linkedin.com/in//',
	},
	{
		name: 'Dev 2',
		role: 'Web3 dev',
		photo: '/images/members/.jpg',
		link: 'https://www.linkedin.com/in//',
	},
	{
		name: 'Dev 3',
		role: 'Fullstack dev',
		photo: '/images/members/j.jpg',
		link: 'https://www.linkedin.com/in//',
	},
	{
		name: 'Team ui/ux',
		role: 'UI/UX designer',
		photo: '/images/members/.jpg',
		link: 'https://www.linkedin.com/in/uxeasin/',
	},
	{
		name: 'Senior full stack Dev',
		role: 'Senior blockchain dev',
		photo: '/images/members/.jpg',
		link: 'https://www.linkedin.com/in//',
	},
];

	
