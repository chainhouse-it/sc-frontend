import { IoMailSharp, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5';

import { FaTelegramPlane } from 'react-icons/fa';

export default function Contact() {
	return (
		<div className='flex flex-col px-48 w-full py-48 pt-72 xl:px-24 sm:px-8 sm:py-48	'>
			<div className='w-1/2 relative mb-24 sm:w-full xl:scale-75 sm:grid sm:place-items-center'>
				<img
					src='/images/Get.svg'
					className='xl:h-[100px] xl:w-[150px]'
				/>
				<img
					src='/images/in touch.svg'
					className='xl:h-[100px] xl:w-[275px]'
				/>
				<img
					src='/images/with us.svg'
					className='translate-x-40 sm:translate-x-0'
				/>
			</div>
			<div className='w-1/3 self-end relative xl:w-2/3 sm:w-full sm:self-start'>
				<p className='relative text-[#fff] font-semibold text-3xl sm:text-lg'>
					<div className='w-[120px] absolute h-[2px] -top-1 left-0 bg-[#14f195]'></div>
					Message
				</p>
				<p className='text-[#fff] text-xl font-light py-6 sm:text-sm'>
					Let us know if u have any ideas, questions, or troubles with
					chain<span className='text-[#14F195]'>house.</span> Ask
					whatever you want. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Aliquam!
				</p>
				<div className='flex items-center gap-6'>
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
			</div>
			<div className='w-1/3 xl:mt-24 xl:w-2/3 sm:w-full sm:self-start'>
				<p className='relative text-[#fff] text-3xl font-semibold sm:text-lg'>
					<div className='w-[180px] absolute h-[2px] -top-1 left-0 bg-[#9945ff]'></div>
					Work with us
				</p>
				<p className='text-[#fff] text-xl font-light py-6 sm:text-sm'>
					If you’re interested in crypto, blockchain and you love to
					learn, get in touch with us. We’re looking for you. Lorem
					ipsum dolor sit amet. Lorem, ipsum.
				</p>
				<div className='flex items-center gap-6'>
					<div className='cursor-pointer'>
						<IoMailSharp size='38' color='white' />
					</div>
					<div className='cursor-pointer'>
						<IoLogoLinkedin size='30' color='white' />
					</div>
				</div>
			</div>
		</div>
	);
}
