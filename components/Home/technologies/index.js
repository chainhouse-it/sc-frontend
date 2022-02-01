import useWindowWidth from '../../../hooks/useWindowWidth';
import SmallHeader from '../../shared/SmallHeader';
import Title from '../../shared/Title';

function Technologies() {
	return (
		<div className='h-2/3 relative grid place-items-center px-32 mt-12 select-none xl:px-12 sm:px-4'>
			<img
				src='/images/background.png'
				alt=''
				className='absolute left-32 z-20 object-cover blur-md scale-[1.5] opacity-40 xl:left-0 sm:scale-[3]'
			/>
			<div className='w-4/5 flex items-center justify-center flex-col gap-0 text-center z-40  border-[2px] border-[#02FE85] backdrop-blur-[200px] rounded-lg p-4 pt-8 sm:gap-5 sm:mt-20'>
				<Title text='TRUSTED COMPANY' />
				<div className='pt-4'>
					<SmallHeader text='Trusted by over a lot of companies.' />
				</div>
				<div className='flex gap-14 justify-center flex-wrap items-center'>
					<div className='relative w-[130px] mt-2 sm:w-[80px]'>
						<img src='/images/typescript.png' alt='' />
					</div>
					<div className='relative w-[100px] sm:w-[80px]'>
						<img src='/images/next.png' alt='' />
					</div>
					<div className='relative w-[140px] sm:w-[80px]'>
						<img src='/images/tailwind.png' alt='' />
					</div>
					<div className='relative w-[120px] sm:w-[80px]'>
						<img src='/images/nest-js.png' alt='' />
					</div>
					<div className='relative w-[140px] sm:w-[120px]'>
						<img src='/images/ethereum.png' alt='' />
					</div>
					<div className='relative w-[200px] sm:w-[150px]'>
						<img src='/images/metamask.png' alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Technologies;
