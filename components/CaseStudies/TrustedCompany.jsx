import React from 'react';
import Heading from '../shared/Heading';
import styled from 'styled-components';

const FlexImageContainer = styled.div`
	background: linear-gradient(
		180deg,
		rgba(87, 93, 238, 0.09) 0%,
		rgba(55, 60, 190, 0.075) 48.03%,
		rgba(62, 66, 155, 0.04) 100%
	);
	backdrop-filter: blur(89.0698px);
	border-radius: 10px;
`;

const TrustedCompany = () => {
	return (
		<div className='section-wrapper mt-section'>
			<Heading titleText='TRUSTED TECHNOLOGY' headingText='Technology'>
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

export default TrustedCompany;
