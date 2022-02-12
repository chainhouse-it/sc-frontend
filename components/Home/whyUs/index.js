import LargeHeader from '../../shared/LargeHeader';
import Title from '../../shared/Title';

function WhyUs() {
	return (
		<div className='px-52 py-12 xl:px-12 sm:px-4'>
			<div className='my-20 text-center'>
				<Title text='Why us?' />
				<LargeHeader text='Why you should pick us?' />
			</div>
			<div className='mt-20 flex gap-14 justify-between lg:flex-col'>
				<div className='w-1/3 lg:w-full'>
					<img src='/icons/shieldIcon.png' alt='' />
					<p className='text-3xl text-white font-semibold py-5 sm:text-2xl'>
						Transparency
					</p>
					<p className='text-lg text-[#CFCED8]'>
						What sets us apart from other companies is an individual
						approach to the client. We provide a constant
						communication between you and the team on the platform
						of your choice.
					</p>
				</div>
				<div className='w-1/3 lg:w-full'>
					<img src='/icons/moneyIcon.png' alt='' />
					<p className='text-3xl text-white font-semibold py-5 sm:text-2xl'>
						Growth
					</p>
					<p className='text-lg text-[#CFCED8]'>
						We are committed to constantly expanding the team by
						adding new senior blockchain developers to keep the
						project from standing still.
					</p>
				</div>
				<div className='w-1/3 lg:w-full'>
					<img src='/icons/ethIcon.png' alt='' />
					<p className='text-3xl text-white font-semibold py-5 sm:text-2xl'>
						Loyal team
					</p>
					<p className='text-lg text-[#CFCED8]'>
						We place importance to long term cooperations, so we are
						not afraid of long-term projects with
						implmentation/development time of several years to
						complete.
					</p>
				</div>
			</div>
		</div>
	);
}

export default WhyUs;
