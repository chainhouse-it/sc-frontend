import useWindowWidth from '../../../hooks/useWindowWidth';
import SmallHeader from '../../shared/SmallHeader';
import Title from '../../shared/Title';
import Image from 'next/image';
function Contact() {
	return (
		<div className='flex items-center relative w-full px-52 justify-between xl:flex-col md:px-4 md:pt-40 sm:pt-0'>
			<div className='sm:text-center'>
				<Title text='Contact' />
				<div className='flex py-2 items-center sm:py-0 sm:flex-col'>
					<SmallHeader text='Contact us here!' />
					{useWindowWidth() > 639 ? (
						<a href='mailto: kowalik0konrad@gmail.com'>
							<p
								className={`text-black bg-white border-white border-2 font-bold font-base text-xs px-5 py-2 rounded-full cursor-pointer font-[Poppins] z-40 flex items-center ml-8 whitespace-nowrap sm:ml-0
                            `}
							>
								<Image
									src='/images/email.png'
									className='w-[20px]'
									alt=''
								/>
								<p className='pl-2'>Mail us here</p>
							</p>
						</a>
					) : (
						<></>
					)}
				</div>
			</div>
			<div className='relative'>
				<Image src='/images/contactImage.png' className='z-50' alt='' />
				<Image
					src='/images/contactShadow.png'
					alt=''
					className='absolute -right-[400px] top-0 scale-[2] z-10'
				/>
			</div>
			{useWindowWidth() < 639 ? (
				<p
					className={`text-black bg-white border-white border-2 font-bold font-base text-xs px-5 py-2 rounded-full cursor-pointer font-[Poppins] z-40 flex items-center ml-8 whitespace-nowrap sm:ml-0
                    `}
				>
					<Image
						src='/images/email.png'
						className='w-[20px]'
						alt=''
					/>
					<p className='pl-2'>Mail us here</p>
				</p>
			) : (
				<></>
			)}
		</div>
	);
}

export default Contact;
