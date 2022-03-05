import React from 'react';
import SmallHeader from '../shared/SmallHeader';
import Title from '../shared/Title';

const Experience = () => {
	return (
		<div className='mt-[140px] md:mt-24 pl-[28px] pr-[188px] lg:px-6 text-white'>
			<div className='flex gap-[38px]'>
				{/* left */}
				<div className='flex-[0.4] lg:hidden opacity-80 w-full max-h-[750px]'>
					<img
						src='images/web3/spiral.svg'
						alt='Spiral image'
						className='w-full h-full'
					/>
				</div>
				{/* Right */}
				<div className='flex-[0.6] lg:flex-1 lg:text-center'>
					<div className='flex flex-col'>
						<Title text='Experience' />
						<SmallHeader text='What is web 3.0?' />
						<p className='paragraph mt-[25px] leading-[] '>
							Web2 is an internet dominated by companies that
							provide services in exchange for our personal data.
							Web3 in context refers to decentralized applications
							that run on a blockchain. These are applications
							that allow anyone to participate without earning
							money on their personal data.
						</p>
						<p className='paragraph italic font-bold mt-[15px]'>
							Internet 3.0 is an open, trustless and
							permissionless network that permits a future wherein
							distributed users and machines are able to have
							interaction with data, value and different
							counterparties via a substrate of peer-to-peer
							networks without the need for third parties.
						</p>
						<p className='paragraph  mt-[15px]'>
							Web3, or Web 3.0, is a term used to describe the
							next generation of the Internet, the core of which
							is to operate in a decentralized, much more open and
							trustless manner, which is based on blockchain
							technology.
						</p>
						<p className='paragraph italic font-bold mt-[15px]'>
							3.0 is a term used to describe the next phase of the
							Internet, in which users can not only read and add
							content (web 2.0), but also !own” it. This
							possession is largely based on blockchain technology
							and cryptocurrencies.
						</p>

						<p className='paragraph  mt-[15px]'>
							Internet applications in web3 do not run on a single
							server, but operate in a decentralized and scattered
							network of computers - these are the so-called
							"Decentralized Applications" (DApps). These
							applications do not require trust because they are
							open source, nor permission to use them (in most
							cases).
						</p>

						<p className='paragraph italic font-bold mt-[15px]'>
							In web3, through applications on the blockchain
							called wallets such as "Metamask", they allow you to
							represent the assets held and the online identity of
							a person without the need to use banks or
							registration services that require our private data.
						</p>

						<p className='paragraph  mt-[15px]'>
							In web3, through applications on the blockchain
							called wallets such as "Metamask", they allow you to
							represent the assets held and the online identity of
							a person without the need to use banks or
							registration services that require our private data.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
