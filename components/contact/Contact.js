import {
	IoMailSharp,
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoLinkedin,
} from 'react-icons/io5';

import { FaTelegramPlane } from 'react-icons/fa';

export default function Contact() {
	return (
		<div className='flex flex-col px-48 w-full'>
			<div className='w-1/2'>
				<img src='/images/Get.svg' alt='' />
				<img src='/images/in touch.svg' alt='' />
				<img src='/images/with us.svg' alt='' />
			</div>
			<div className='w-1/2 self-end relative'>
				<p className='relative text-[#fff]'>
					<div className='w-full absolute h-1 top-0 left-0 bg-[#14f195]'></div>
					Message
				</p>
				<p className='text-[#fff]'>
					Let us know if u have any ideas, questions, or troubles with
					chain<span className='text-[#14F195]'>house.</span> Ask
					whatever you want.
				</p>
				<div className='cursor-pointer'>
					<FaTelegramPlane size='30' color='white' />
				</div>
				<div className='cursor-pointer'>
					<IoMailSharp size='30' color='white' />
				</div>
				<div className='cursor-pointer'>
					<IoLogoFacebook size='30' color='white' />
				</div>
			</div>
			<div className='w-1/2'>
				<p className='relative text-[#fff] text-5xl'>
					<div className='w-96 absolute h-1 top-0 left-0 bg-[#9945ff]'></div>
					Work with us
				</p>
				<p className='text-[#fff]'>
					If you’re interested in crypto, blockchain and you love to
					learn, get in touch with us. We’re looking for u
				</p>
				<div className='cursor-pointer'>
					<IoMailSharp size='30' color='white' />
				</div>
				<div className='cursor-pointer'>
					<IoLogoLinkedin size='30' color='white' />
				</div>
			</div>
		</div>
	);
}
