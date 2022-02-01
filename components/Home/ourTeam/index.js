import Link from 'next/link';
import LargeHeader from '../../shared/LargeHeader';
import Title from '../../shared/Title';

function Member({ name, role, links, photo }) {
	return (
		<div className='flex flex-col items-center 3xl:max-w-[400px] border-gradient-green'>
			<div className='my-10 border-2 border-[#02fe9e] rounded-[9999px] overflow-hidden'>
				<img
					src={photo}
					alt=''
					className='w-[150px] h-[150px] object-cover'
				/>
			</div>
			<p className='text-2xl font-bold text-[#f1f1f1]'>{name}</p>
			<p className='text-lg pt-4 font-light text-[#CFCED8]'>{role}</p>
			<div className='flex w-full gap-4 justify-center my-8'>
				<a target='_blank' href={links[0]}>
					<img src='/icons/ig.png' className='cursor-pointer' />
				</a>
				<a target='_blank' href={links[1]}>
					<img src='/icons/twitter.png' className='cursor-pointer' />
				</a>
				<a target='_blank' href={links[2]}>
					<img src='/icons/linkedin.png' className='cursor-pointer' />
				</a>
			</div>
		</div>
	);
}

function OurTeam() {
	return (
		<div className='px-52 py-24 xl:px-12 sm:px-4'>
			<div className='text-center my-20'>
				<Title text='Team' />
				<LargeHeader text='Meet our team ' />
			</div>
			<div className='grid grid-cols-4 gap-14 items-center 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'>
				{team.map(({ name, role, links, photo }) => (
					<Member
						name={name}
						role={role}
						links={links}
						photo={photo}
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
		links: [
			'https://google.com',
			'https://twitter.com',
			'https://facebook.com',
		],
		photo: '/members/mike.jpg',
	},
	{
		name: 'Konrad Kowalik',
		role: 'Frontend dev',
		links: [
			'https://google.com',
			'https://twitter.com',
			'https://facebook.com',
		],
		photo: '/members/rob.png',
	},
	{
		name: 'Piotr Galka',
		role: 'Blockchain dev',
		links: [
			'https://google.com',
			'https://twitter.com',
			'https://facebook.com',
		],
		photo: '/members/rob.png',
	},
	{
		name: 'Babilonczyk69',
		role: 'Blockchain dev',
		links: [
			'https://google.com',
			'https://twitter.com',
			'https://facebook.com',
		],
		photo: '/members/rob.png',
	},
];
