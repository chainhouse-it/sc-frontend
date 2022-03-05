import React from 'react';
import Title from '../shared/Title';
import styled from 'styled-components';
import List from '../shared/List';
import Heading from '../shared/Heading';

const FlexContainer = styled.div``;

const Comparision = () => {
	return (
		<div className='section-wrapper mt-section text-white'>
			{/* Top section */}
			<Heading
				titleText='Comparision'
				headingText='Practical Comparisons'
			/>
			{/* Card section */}
			<FlexContainer className='flex mt-[50px] sm:flex-col flex-row sm:gap-3'>
				<Card title='Web2'>
					<List text='Facebook can censor any account or post.' />
					<List
						text='The payment service may decide not to accept payment
							for certain types of work'
					/>
					<List
						text='The application servers of the economic giants can
							be turned off and affect the income of employees'
					/>
				</Card>

				<Card title='Web3'>
					<List text='Facebook in Web3 could not be censored as control is decentralized' />
					<List text='Web3 payment applications do not require any personal information and cannot prevent payment' />
					<List text='Web3 servers cannot be turned off - they use blockchain, a decentralized network of thousands of computers as a backend' />
				</Card>
			</FlexContainer>
		</div>
	);
};

export default Comparision;

const Card = ({ title, children }) => {
	return (
		<div className='card flex-1  p-8 rounded-lg shadow-lg backdrop-blur-[90px] border-gradient-white '>
			<h3 className='font-poppins font-bold text-[27px] leading-[160%] tracking-[-0.03em]  '>
				{title}
			</h3>
			<div className='flex flex-col gap-4 mt-5'>{children}</div>
		</div>
	);
};
