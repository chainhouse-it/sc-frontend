import Link from 'next/link';
export default function Footer() {
	return (
		<footer className='flex justify-between text-white relative section-wrapper mt-section'>
			<div className='w-1/4 lg:w-full'>
				<p className='text-4xl font-bold sm:text-2xl'>chainhouse.io</p>
				<p className='text-desc font-semibold py-4'>
					Learn about our competences in designing blockchain
					solutions for your needs - both
				</p>
				<div className='flex gap-3'>
					<a
						href='https://www.facebook.com/Chainhouseit-103783152230842'
						target='_blank'
						rel='noreferrer'
					>
						<img src='/icons/footer/facebook.png' alt='' />
					</a>
					<a
						href='https://twitter.com/chainhouse_it'
						target='_blank'
						rel='noreferrer'
					>
						<img src='/icons/footer/twitter.png' alt='' />
					</a>
					<a
						href='https://www.instagram.com/chainhouse.it/'
						target='_blank'
						rel='noreferrer'
					>
						<img src='/icons/footer/instagram.png' alt='' />
					</a>
					<a
						href='https://www.linkedin.com/company/chainhouse'
						target='_blank'
						rel='noreferrer'
					>
						<img src='/icons/footer/linkedin.png' alt='' />
					</a>
					{/* <a
						href='https://facebook.com'
						target='_blank'
						rel='noreferrer'
					>
						<img src='/icons/footer/github.png' alt='' />
					</a> */}
				</div>
			</div>
			<div className='w-1/4 flex flex-col items-end xl:hidden'>
				<ul className='flex flex-col gap-4 font-semibold'>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>Overview</li>
					</Link>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>Features</li>
					</Link>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>Pricing</li>
					</Link>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>About</li>
					</Link>
				</ul>
			</div>
			<div className='w-1/4 flex flex-col items-end xl:hidden'>
				<ul className='flex flex-col gap-4 font-semibold'>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>Developer APIs</li>
					</Link>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>Blockchain</li>
					</Link>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>dApps</li>
					</Link>
				</ul>
			</div>
			<div className='w-1/4 flex flex-col items-end xl:hidden'>
				<ul className='flex flex-col gap-4 font-semibold'>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>Assured Security</li>
					</Link>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>Transparency</li>
					</Link>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>Reliability</li>
					</Link>
					<Link href='/soon' passHref>
						<li className='cursor-pointer'>Time Efective</li>
					</Link>
				</ul>
			</div>
		</footer>
	);
}
