import React from 'react';
import Heading from '../shared/Heading';
import { Flex } from '../shared/StyledComponent';

const Table = () => {
	return (
		<div className='section-wrapper mt-section'>
			{/* 1) Heading Section */}
			<Heading
				titleText='Decentralization'
				headingText='Centralization Vs Decentralization'
			>
				<p className='paragraph md:text-left md:w-full w-9/12 mx-auto my-element text-[25px]'>
					In the table below, we have a tendency to list a number of
					the broad strokes blessings and downsides of centralized and
					decentralised digital networks
				</p>
			</Heading>

			{/*2) Table section */}

			<div className='overflow-x-auto mb-section'>
				<Flex className='flex  border-[1px]  border-green-300 rounded-sm min-w-[500px]'>
					<h3 className='text-center  flex-1 min-w-[250px] py-[20px] lg:py-[12px] border-r-[1px] border-green-300 paragraph font-bold text-[27px] '>
						Centralized Systems
					</h3>

					<h3 className='text-center flex-1 min-w-[250px] py-[20px] lg:py-[12px]  paragraph font-bold text-[27px]'>
						Decentralized Systems
					</h3>
				</Flex>

				<Flex className='flex border-green-300 border-[1px] min-w-[500px]'>
					<div className='left flex-1 min-w-[250px] p-[30px] pt-[10px] md:p-[12px] border-r-[1px] border-green-300 '>
						<List text='Low network diameter (all participants square measure connected to a central authority); info propagates quickly, as propagation is handled by a central authority with various machine resources.' />
						<List text='Usually higher performance (higher outturn, fewer total machine resources expended) and easier to implement. sometimes lower performance (lower outturn, additional total machine resources expended) and additional complicated to implement.' />
						<List
							text=' malicious actors could also be ready to take down the network by targeting the central authority. No single purpose of failure: network will still perform albeit an oversized proportion of participants square measure attacked/ taken out.'
							boldText='Single purpose of failure:'
						/>
						<List text='Central authority will censor knowledge, probably separating components of the network from interacting with the remainder of the network.' />

						<List
							text='Participation within the network is controlled by the central authority.'
							italic
						/>
					</div>

					<div className='right flex-1 min-w-[250px] p-[30px] md:p-[12px] pt-[10px]'>
						<List text='The furthest participants on the network might probably be several edges removed from one another. info broadcast from one aspect of the network might take a protracted time to succeed in the opposite aspect.' />
						<List
							boldText='In the event of conflicting knowledge, resolution is evident and easy:'
							text=' the final word supply of truth is that the central authority. A protocol (often complex) is required for dispute resolution, if peers build conflicting claims concerning the state of information that participants square measure meant to be synchronous on.'
						/>
						<List text='Coordination among network participants is far easier, and is handled by a central authority. Central authority will compel network participants to adopt upgrades, protocol updates, etc., with little or no friction. '>
							<p className='paragraph text-[22px] md:text-[16px]'>
								Coordination is usually troublesome, as no
								single agent has the ultimate say in
								network-level choices, protocol upgrades, etc.
								within the worst case, network is at risk of
								fracturing once there square measure
								disagreements concerning protocol changes.
							</p>
						</List>

						<List text='Censorship is far more durable, as info has many ways to propagate across the network.' />
						<List text='Anyone will participate within the network; there are not any “gatekeepers.” Ideally, the price of participation is incredibly low.' />
					</div>
				</Flex>
			</div>
			{/* <Flex className='flex  overflow-x-auto border-[1px] border-t-[0.5px] p-[30px] md:p-[12px] border-green-300'>
				<div className='left flex-1 min-w-[250px] h-auto'>
					<h3 className='text-center py-[20px] lg:py-[12px] border-b-2  paragraph font-bold text-[27px] '>
						Centralized Systems
					</h3>
					<div className=''>
						<List text='Low network diameter (all participants square measure connected to a central authority); info propagates quickly, as propagation is handled by a central authority with various machine resources.' />
					</div>
				</div>

				<div className='right flex-1 min-w-[250px] h-auto'>
					<h3 className='text-center py-[20px] lg:py-[12px] border-[1px] border-l-[0.5px] border-green-300 rounded-sm paragraph font-bold text-[27px]'>
						Decentralized Systems
					</h3>

					<div className=''>
						<List text='The furthest participants on the network might probably be several edges removed from one another. info broadcast from one aspect of the network might take a protracted time to succeed in the opposite aspect.' />
					</div>
				</div>
			</Flex> */}
		</div>
	);
};

export default Table;

const List = ({ text, boldText, italic, children }) => {
	return (
		<li className='flex  gap-2.5 mt-5'>
			<div className='w-[10px] h-[10px] mt-2.5'>
				<div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#02FE85] to-[#02FED1]'></div>
			</div>
			<div className='flex flex-col'>
				<p
					className={`paragraph text-[22px] md:text-[16px] ${
						italic && 'italic'
					}`}
				>
					<span className='font-bold'>{boldText && boldText}</span>
					{text}
				</p>
				{children}
			</div>
		</li>
	);
};
