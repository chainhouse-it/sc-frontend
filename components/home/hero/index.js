export default function Hero() {
	return (
		<div className='px-72 py-48 bg-[#0F0F0F] flex items-center relative overflow-hidden'>
			<div className='w-1/2'>
				<p className='text-6xl font-bold text-white'>
					Blockchain Software
					<p>Development House</p>
				</p>
				<p className='font-thin text-[#DCDCDC] text-justify py-5 text-lg w-10/12'>
					Learn about our competences in designing blockchain
					solutions for your needs - both commonly available
					ecosystems like Ethereum or Cardano and specific custom
					solutions like Hyperledger Fabric or R3 Corda.
				</p>
				<button className='btn-primary'>let's start</button>
			</div>
			{/* rightSide */}
			<div className='absolute text-9xl text-[#1b1b1b] font-black -right-72 scale-125'>
				<p>Blockchain</p>
				<p>Software</p>
				<p>House</p>
			</div>
		</div>
	);
}
