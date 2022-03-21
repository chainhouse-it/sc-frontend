import Title from '../../shared/Title';
import LargeHeader from '../../shared/LargeHeader';
import Link from 'next/link';

function InfoBlock({ imgUrl, title, content }) {
	return (
		<div className='col-span-3 p-8 text-[white] font-[poppins] border-[1px] border-[#02FE85] backdrop-blur-[500px] rounded-xl'>
			<img src={imgUrl} className='w-[75px]' alt='' />
			<p className='text-[25px] font-bold py-4'>{title}</p>
			<p className='text-[16px] font-semibold text-[#CFCED8] pb-6 text-justify'>
				{content}
			</p>
		</div>
	);
}

export default function AboutWeb3() {
	return (
		<div
			className='w-screen px-52 xl:px-20 sm:px-10 xs:px-6 relative grid grid-cols-3 gap-4 justify-items-center py-24 font-[poppins]'
			name='web3'
			id='web3'
		>
			<div className='flex flex-col items-center col-span-3'>
				<Title text='TECHNOLOGY' />
				<div className='py-6 z-20 pb-20 sm:py-4'>
					<LargeHeader text='What exactly is web3?' />
				</div>
			</div>
			<img
				src='/images/background.png'
				alt=''
				className='absolute left-32 top-12
			z-10 object-cover scale-y-[1.4] scale-x-[2.1] opacity-40 xl:left-0
			sm:scale-[3]'
			/>
			<div className='relative w-full col-span-3 p-16  z-40 border-[1px] border-[#02FE85] backdrop-blur-[250px] text-[white] rounded-xl overflow-hidden sm:gap-5 sm:mt-20 sm:px-4 text-center'>
				<img
					src='/images/reverseSquare.svg'
					alt=''
					className='absolute top-0 right-0 z-10 object-cover  opacity-40 lg:hidden'
				/>
				<Title text='Web 3.0' />
				<div className='z-20 pt-4 font-bold text-[46px] sm:text-4xl'>
					<p className='z-20'>
						What makes Web 3.0 better than its predecessors?
					</p>
				</div>
				<p className='w-3/4 font-semibold text-[#CFCED8] font-[20px] py-8 pr-8 text-justify sm:px-2 lg:w-4/5 sm:w-full sm:font-4xl'>
					No Central Control Point: Since middlemen are eliminated
					from the equation, users&apos; data will no longer be
					controlled by them. This reduces the risk of censorship by
					governments and corporations, and reduces the effectiveness
					of Denial-of-Service (DoS) files.Increased Interconnectivity
					of Information: As more and more products connect to the
					Internet, larger datasets provide algorithms with more
					information for analysis. This can help to provide more
					accurate information that takes into account the needs of
					individual users. Browsing more efficiently: When using the
					internet search engines, finding the best result could be
					tiresome.
				</p>
				<Link href='/what-is-web3' passHref>
					<div className='font-medium text-[18px] flex sm:px-2 cursor-pointer'>
						<p className='hover:scale-[1.05] hover:pr-2 transition-all'>
							Learn More
						</p>
						<img
							src={'/icons/arrow.svg'}
							className={'scale-[0.9] pl-1 pb-1'}
							alt=''
						/>
					</div>
				</Link>
			</div>
			<div className='z-20 py-6 w-full col-span-3 grid grid-cols-3 gap-8 content-start xl:grid-cols-1'>
				<div className='col-span-1'>
					<InfoBlock
						imgUrl={'/about/flying-coins.png'}
						title='Naming'
						content='internet 3.0 is an open, trustless and permissionless network that permits a future wherein distributed users and machines are able to have interaction with data, value and different counterparties via a substrate of peer-to-peer networks without the need for third parties.3.0 is a term used to describe the next phase of the Internet, in which users can not only read and add content (web 2.0), but also “own” it.'
					/>
				</div>
				<div className='col-span-1'>
					<InfoBlock
						imgUrl={'/about/blockchain.png'}
						title='Decentralization'
						content='Internet applications in web3 do not run on a single server, but operate in a decentralized and scattered network of computers - these are the so-called "Decentralized Applications" (DApps). These applications do not require trust because they are open source, nor permission to use them (in most cases).'
					/>
				</div>
				<div className='col-span-1'>
					<InfoBlock
						imgUrl={'/about/candles.png'}
						title='Tokenization'
						content='In Web3 it is possible to tokenize ... almost everything. Tokenization, which is a certain process that allows you to create or "move something" into the blockchain. This could be the creation of exchange units, i.e. tokens that are used to vote, distribute profits, and transfer value in a decentralized and almost unlimited manner.'
					/>
				</div>
			</div>
		</div>
	);
}
