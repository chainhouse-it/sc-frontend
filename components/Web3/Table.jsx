import React from 'react';
import Heading from '../shared/Heading';
import List from '../shared/List';
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
			<Flex className='flex  overflow-x-auto'>
				{/*2.1 Left section */}
				<div className='left flex-1 min-w-[250px]'>
					<h3 className='text-center py-[20px] lg:py-[12px] border-[1px] border-r-[0.5px] border-green-300 rounded-sm paragraph font-bold text-[27px] '>
						Centralized Systems
					</h3>
					<div className='border-[1px] border-t-[0.5px] p-1 border-green-300'>
						<List text='Low network diameter (all participants square measure connected to a central authority); info propagates quickly, as propagation is handled by a central authority with various machine resources.' />
					</div>
				</div>
				{/* 2.2 Right Section */}
				<div className='right flex-1 min-w-[250px]'>
					<h3 className='text-center py-[20px] lg:py-[12px] border-[1px] border-l-[0.5px] border-green-300 rounded-sm paragraph font-bold text-[27px]'>
						Decentralized Systems
					</h3>
				</div>
			</Flex>
		</div>
	);
};

export default Table;
