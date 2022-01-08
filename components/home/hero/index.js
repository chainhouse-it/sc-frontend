import useWindowWidth from '../../../hooks/useWindowWidth';

export default function Hero() {
	return (
		<div className='px-72 py-[10%] bg-[#0F0F0F] flex items-center relative overflow-hidden xl:px-24 xl:py-[20%] sm:px-8'>
			<div className='w-1/2 xl:w-full xl:flex flex-col xl:justify-center'>
				<p className='text-6xl font-bold text-white sm:text-3xl'>
					{useWindowWidth() > 639 ? (
						<>
							Blockchain
							<p>Software</p>
							<p>Development House</p>
						</>
					) : (
						<p>Blockchain Software Development House</p>
					)}
				</p>
				<h5 className='font-light text-white text-justify py-5 text-lg sm:text-sm'>
					Learn about our competences in designing blockchain
					solutions for your needs - both commonly available
					ecosystems like{' '}
					<span className='text-[#8befc8]'>Ethereum </span>or
					<span className='text-[#8befc8]'> Cardano </span>
					and specific custom solutions like Hyperledger Fabric or R3
					Corda.
				</h5>
				<div>
					<button className='btn-primary'>let's start</button>
				</div>
			</div>
			{/* rightSide */}
			<div className='absolute text-9xl text-[#1b1b1b] font-black -right-72 scale-125 select-none xl:hidden'>
				<p>Blockchain</p>
				<p>Software</p>
				<p>House</p>
			</div>
		</div>
	);
}
