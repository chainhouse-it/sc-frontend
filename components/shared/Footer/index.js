import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='px-52 py-24 flex justify-between text-white relative xl:px-12 xl:py-14 sm:px-4'>
			<div className='w-1/4 lg:w-full'>
				<p className='text-4xl font-bold sm:text-2xl'>chainhouse.io</p>
				<p className='text-desc font-semibold py-4'>
					Learn about our competences in designing blockchain
					solutions for your needs - both
				</p>
				<div className='flex gap-3'>
					<a href='https://facebook.com' target='_blank'>
						<img src='/icons/footer/facebook.png' alt='' />
					</a>
					<a href='https://facebook.com' target='_blank'>
						<img src='/icons/footer/twitter.png' alt='' />
					</a>
					<a href='https://facebook.com' target='_blank'>
						<img src='/icons/footer/instagram.png' alt='' />
					</a>
					<a href='https://facebook.com' target='_blank'>
						<img src='/icons/footer/linkedin.png' alt='' />
					</a>
					<a href='https://facebook.com' target='_blank'>
						<img src='/icons/footer/github.png' alt='' />
					</a>
				</div>
			</div>
			<div className='w-1/4 flex flex-col items-end xl:hidden'>
				<ul className='flex flex-col gap-4 font-semibold'>
					<li>Overview</li>
					<li>Features</li>
					<li>Pricing</li>
					<li>About</li>
				</ul>
			</div>
			<div className='w-1/4 flex flex-col items-end xl:hidden'>
				<ul className='flex flex-col gap-4 font-semibold'>
					<li>Developer APIs</li>
					<li>Blockchain</li>
					<li>dApps</li>
				</ul>
			</div>
			<div className='w-1/4 flex flex-col items-end xl:hidden'>
				<ul className='flex flex-col gap-4 font-semibold'>
					<li>Assured Security</li>
					<li>Transparency</li>
					<li>Reliability</li>
					<li>Time Efective</li>
				</ul>
			</div>
		</footer>
	);
}
