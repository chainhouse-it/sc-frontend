import LargeHeader from '../../shared/LargeHeader';
import Title from '../../shared/Title';
function List({ category, services }) {
	return (
		<div className='ml-10'>
			<div className='flex items-center gap-4 relative w-[300px]'>
				<img
					src='/icons/servicesIcon.png'
					className='absolute -left-10'
					alt=''
				/>
				<p className='text-2xl font-bold text-white py-4'>{category}</p>
			</div>
			<ul className='list-disc pl-5'>
				{services.map((service, key) => (
					<li className='text-primaryGreen py-2' key={key}>
						<div className='text-lg font-light text-white'>
							{service}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

function ServicesSection() {
	return (
		<div className='px-52 py-24 xl:px-12 sm:px-4'>
			<div className='my-20'>
				<Title text='Services' />
				<LargeHeader text='What we can do' />
			</div>
			<div className='flex justify-around xl:flex-wrap xl:gap-y-10 sm:flex-nowrap sm:flex-col sm:items-center'>
				{dataServices.map(({ category, services }, key) => (
					<List category={category} services={services} key={key} />
				))}
			</div>
		</div>
	);
}

export default ServicesSection;

const dataServices = [
	{
		category: 'Smart contracts',
		services: [
			'Smart Contracts',
			'NFT Platforms Development',
			'Cryptocurrency Exchanges',
			'Practical Blockchains',
			'Blockchain Backed Platforms',
			'Coin/token development',
		],
	},
	{
		category: 'STO (security token offering)',
		services: [
			'Smart Contracts',
			'NFT Platforms Development',
			'Cryptocurrency Exchanges',
			'Practical Blockchains',
			'Blockchain Backed Platforms',
			'Coin/token development',
		],
	},
	{
		category: 'Blockchain set up and development',
		services: [
			'Smart Contracts',
			'NFT Platforms Development',
			'Cryptocurrency Exchanges',
			'Practical Blockchains',
			'Blockchain Backed Platforms',
			'Coin/token development',
		],
	},
];
