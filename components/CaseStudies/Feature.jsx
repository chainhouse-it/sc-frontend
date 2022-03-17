import React from 'react';
import styled from 'styled-components';

const Flex = styled.div``;
const RightBackground = styled.div`
	background-image: url(/images/caseStudies/rightgroup.svg);

	/* background-size: cover; */
	/* background-size: 400px 400px; */
	background-position: right;
	background-repeat: no-repeat;
`;
const Feature = () => {
	return (
		<RightBackground className='section-wrapper mt-section '>
			<Flex className='flex lg:flex-col flex-row gap-[24px]'>
				<img
					src='/images/caseStudies/feature.svg'
					alt='Feature image'
					className='w-full h-auto'
				/>
				<div>
					<h3 className='primary-heading text-[46px] font-poppins'>
						Main Features
					</h3>
					<p className='paragraph mt-element'>
						Our team has designed and created a platform that allows
						registered and verified users to easily deposit into an
						internal virtual wallet Bitcoin or Ethereum. The
						collected funds allow you to purchase tokens, which
						determine the amount of the dividend and the weight of
						the vote.
					</p>
					<p className='paragraph mt-element'>
						In creating cryptocurrencies, security is an extremely
						important factor. The application enables the activation
						of two-stage authentication, thanks to which investors
						have full control over their account and confidence that
						their funds are safe.
					</p>
					<button className='bg-[#ffffffc] rounded-[40px] border-[0.5px] border-white py-[12px] px-[40px] mt-element'>
						Learn More
					</button>
				</div>
			</Flex>

			<div className='mt-section'>
				<Flex className='flex lg:flex-col flex-row gap-[24px]'>
					<div>
						<h3 className='primary-heading text-[46px] font-poppins'>
							The Solution
						</h3>
						<p className='paragraph mt-element'>
							We built a platform that allows to sell tokens and
							obtain funds for investments, compatible with
							Bitcoin and Ethereum wallet.{' '}
						</p>
						<p className='paragraph mt-element'>
							For the emission of cryptocurrency to be successful,
							appropriate investors should be attracted. For this
							purpose, we have designed a website presenting the
							main idea of the project.
						</p>
						<button className='bg-[#ffffffc] rounded-[40px] border-[0.5px] border-white py-[12px] px-[40px] mt-element'>
							Learn More
						</button>
					</div>

					<img
						src='/images/caseStudies/solution.svg'
						alt='solution'
						className='w-full h-auto'
					/>
				</Flex>
			</div>
		</RightBackground>
	);
};

export default Feature;
