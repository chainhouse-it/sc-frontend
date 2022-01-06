import {
	IoLogoGithub,
	IoMailSharp,
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoLinkedin,
} from 'react-icons/io5';

export default function Footer() {
	return (
		<div className='h-[350px] px-72 mt-72 py-12 text-white flex flex-col justify-between relative'>
			<hr className='w-full' />
			<p className='font-light text-4xl mb-auto py-10'>chainhouse.io</p>
			<div className='flex justify-between w-full items-center'>
				<div className='flex flex-row justify-around items-center text-md font-light'>
					<p className='pr-8 cursor-pointer'>About</p>
					<p className='pr-8 cursor-pointer'>
						Work&nbsp;with&nbsp;us!
					</p>
					<p className='pr-8 cursor-pointer'>Contact</p>
					<p className='pr-8 cursor-pointer'>Privacy&nbsp;policy</p>
				</div>
				<div className='flex flex-row justify-around items-center'>
					<div className='cursor-pointer pl-8'>
						<IoLogoGithub size='30' />
					</div>
					<div className='cursor-pointer pl-8'>
						<IoMailSharp size='30' />
					</div>
					<div className='cursor-pointer pl-8'>
						<IoLogoFacebook size='30' />
					</div>
					<div className='cursor-pointer pl-8'>
						<IoLogoTwitter size='30' />
					</div>
					<div className='cursor-pointer pl-8'>
						<IoLogoLinkedin size='30' />
					</div>
				</div>
			</div>
		</div>
	);
}
