import React from 'react';
import Heading from '../shared/Heading';

import styled from 'styled-components';
const FlexImageContainer = styled.div``;
const Company = () => {
	return (
		<div className='section-wrapper mt-section  relative mb-10'>
			<img
				src='\images\howWework\industrybg.png'
				alt='background'
				className='absolute left-0 top-[-120%] w-full h-[250%]  '
			/>
			<Heading titleText='Industries' headingText='Industries'>
				<FlexImageContainer className='mt-[50px] w-full py-[35px] px-[20px] h-auto flex justify-center flex-wrap border-[0.5px] border-[#89c263] items-center gap-x-[70px] gap-y-[30px] mx-auto'>
					<img
						src='/images/caseStudies/metamask.svg'
						alt='metamask'
					/>
					<img src='/images/caseStudies/flutter.svg' alt='Flutter' />
					<img src='/images/caseStudies/solana.svg' alt='Solana' />
					<img src='/images/caseStudies/nest-js.svg' alt='Nest-js' />
					<img src='/images/caseStudies/polygon.svg' alt='Polygon' />
				</FlexImageContainer>
			</Heading>
		</div>
	);
};

export default Company;
