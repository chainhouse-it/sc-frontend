import React from 'react';

const Network = () => {
	return (
		<div className='w-screen px-52   relative xl:px-12 sm:pr-8 sm:pl-4 mt-section'>
			<div className=' w-1/3 self-start absolute -scale-x-[1.5] scale-[1.5] z-40 -right-64 -rotate-12 lg:hidden  xl:opacity-50  top-[-40px]'>
				<img src='/images/fingerprint-image.svg' alt='' />
			</div>
			<div className=' text-white  lg:text-center'>
				{/* 1)Heading section */}
				<h3 className='text-[40px] lg:text-3xl md:text-2xl leading-[130%] tracking-[-0.03em] font-bold font-poppins'>
					The 3.0 network is intended to adapt the information shared
					to a specific person, as it happens in the real world of
					interpersonal communication
				</h3>
				{/* 2) Paragraph section */}
				<p className='paragraph mt-[25px] w-[65%] lg:w-full'>
					In its intention, Web3 will have access to a specific ocean
					of data through websites and web applications, which will be
					able to understand, use and adapt to individual users.
				</p>
				<p className='paragraph mt-[15px] font-bold italic'>
					In Web3 it is possible to tokenize... almost everything.
					Tokenization, which is a certain process that allows you to
					create or "move something" into the blockchain. This could
					be the creation of exchange units, i.e. tokens that are used
					to vote, distribute profits, and transfer value in a
					decentralized and almost unlimited manner.
				</p>
				<p className='paragraph mt-[15px]'>
					Another use of tokenization is the transfer of ownership of
					"something". This could be a real estate right or even a
					real estate right, but the most common use is in a virtual
					asset right. We can tokenize your username, artwork, in-game
					items, event tickets (online and offline), etc. Tokenization
					is possible thanks to various standards better known as NFT.
				</p>

				<p className='paragraph mt-[15px] font-bold italic  w-[75%] lg:w-full'>
					The right to ownership of the given assets is unforgettable
					and saved on the blockchain, which allows you to confirm
					their authenticity, and the given tokens can only be sent by
					their owner.
				</p>
			</div>
		</div>
	);
};

export default Network;
