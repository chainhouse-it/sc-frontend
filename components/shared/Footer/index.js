import {
	IoLogoGithub,
	IoMailSharp,
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoLinkedin,
} from 'react-icons/io5';

export default function Footer() {
	return (
		<div className='h-[350px] lg:h-[32rem] px-48 mt-72 py-12 text-white flex flex-col justify-between relative xl:px-24 sm:px-12'>
			<hr className='w-full' />
			<p className='text-4xl mb-auto py-10 font-bold'>chainhouse.io</p>
			<div className='flex justify-between w-full items-center lg:flex-col lg:gap-10 lg:items-start'>
				<div className='flex gap-6 flex-row items-center text-md font-light lg:flex-col lg:items-start'>
					<p className='cursor-pointer'>About</p>
					<p className='cursor-pointer'>Work&nbsp;with&nbsp;us!</p>
					<p className='ursor-pointer'>Contact</p>
					<p className='cursor-pointer'>Privacy&nbsp;policy</p>
				</div>
				<div className='flex flex-row items-center gap-6 lg:gap-0 lg:w-full lg:justify-between'>
					<div className='cursor-pointer'>
						<IoLogoGithub size='30' />
					</div>
					<div className='cursor-pointer'>
						<IoMailSharp size='30' />
					</div>
					<div className='cursor-pointer'>
						<IoLogoFacebook size='30' />
					</div>
					<div className='cursor-pointer'>
						<IoLogoTwitter size='30' />
					</div>
					<div className='cursor-pointer'>
						<IoLogoLinkedin size='30' />
					</div>
				</div>
			</div>
		</div>
	);
}
