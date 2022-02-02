import SmallHeader from '../../shared/SmallHeader';
import Title from '../../shared/Title';
import Image from 'next/image';
function Technologies() {
	return (
		<div className='h-2/3 relative grid place-items-center px-32 mt-12 select-none xl:px-12 sm:px-4'>
			<Image
				src='/images/background.png'
				alt=''
				className='absolute left-32 z-10 object-cover scale-[1.5] scale-x-[2.1] opacity-50 xl:left-0 sm:scale-[3]'
			/>
			<div className='w-4/5 flex items-center justify-center flex-col gap-0 text-center z-40  border-[2px] border-[#02FE85] backdrop-blur-[200px] rounded-lg p-4 pt-8 sm:gap-5 sm:mt-20'>
				<Title text='TRUSTED COMPANY' />
				<div className='pt-4'>
					<SmallHeader text='Trusted by over a lot of companies.' />
				</div>
				<div className='flex gap-14 justify-center flex-wrap items-center'>
					<div className='relative w-[130px] mt-2 sm:w-[80px]'>
						<Image src='/images/typescript.png' alt='' />
					</div>
					<div className='relative w-[100px] sm:w-[80px]'>
						<Image src='/images/next.png' alt='' />
					</div>
					<div className='relative w-[140px] sm:w-[80px]'>
						<Image src='/images/tailwind.png' alt='' />
					</div>
					<div className='relative w-[120px] sm:w-[80px]'>
						<Image src='/images/nest-js.png' alt='' />
					</div>
					<div className='relative w-[140px] sm:w-[120px]'>
						<Image src='/images/ethereum.png' alt='' />
					</div>
					<div className='relative w-[200px] sm:w-[150px]'>
						<Image src='/images/metamask.png' alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Technologies;