import LargeHeader from '../../shared/LargeHeader';
import Title from '../../shared/Title';

function ContactSection() {
	return (
		<div className='relative' name='contact'>
			<div className='px-52 py-32 overflow-hidden xl:px-12 xl:py-14 sm:px-4 '>
				<img
					src='/images/contact/finalBg.png'
					alt=''
					className='absolute top-0 -left-2 w-full h-full object-cover z-0 scale-x-[1.2]'
				/>
				<img
					src='/images/contact/maskContact.png'
					className='absolute right-0 top-0 scale-y-[1.03] xl:hidden'
					alt=''
				/>
				<div className='flex flex-col w-1/2 xl:w-full'>
					<Title text='Contact' />
					<LargeHeader text='Contact us here!' />
					<p className='text-desc font-semibold text-lg py-6 z-10'>
						Explain why someone should contact them, and describe
						how they can help solve their visitors problems.
					</p>
					<a
						href='mailto:contact@chainhouse.it'
						className='w-[210px] cursor-pointer'
					>
						<div
							className={`text-white backdrop-blur-[200px] border font-semibold text-base px-8 py-3 rounded-full z-40 flex items-center
                        `}
						>
							<img
								src='/icons/mail.png'
								className='w-[20px]'
								alt=''
							/>
							<p className='pl-6'>Mail us here</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
