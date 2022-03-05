import React from 'react';
import LargeHeader from '../shared/LargeHeader';
import SmallHeader from '../shared/SmallHeader';
import Title from '../shared/Title';
import styled from 'styled-components';

const BackGround = styled.div``;

const Web3Better = () => {
	return (
		<section className=' mt-section text-white'>
			<div className='text-center section-wrapper'>
				<Title text='Web 3.0 better' />
				<h3 className='primary-heading'>
					What makes Web 3.0 better than its predecessors?
				</h3>
			</div>

			{/* Bottom */}
			<div className='relative grid place-items-center mt-10'>
				<img
					src='/images/web3/web3bg.png'
					alt=''
					className='absolute 
			z-10 object-cover scale-y-[1] scale-x-[1.3] opacity-[0.15] xl:left-0 
			sm:scale-[3]'
				/>

				<img
					src='/images/web3/center.png'
					alt=''
					className='absolute 
			z-10 object-cover scale-y-[1] scale-x-[1] opacity-20 xl:left-0 
			sm:scale-[3]'
				/>
				<div className='container mt-10  md:mt-8 section-wrapper'>
					<BenifitPoint
						icon='/images/web3/target.png'
						title='No Central Control Point'
						description="Since middlemen are eliminated from the equation, users'
						data will no longer be controlled by them. This reduces
						the risk of censorship by governments and corporations,
						and reduces the effectiveness of Denial-of-Service (DoS)
						files."
					/>

					<BenifitPoint
						icon='/images/web3/notebook.png'
						title='Increased Interconnectivity of Information'
						description='As more and more products connect to the Internet, larger datasets provide algorithms with more information for analysis. This can help to provide more accurate information that takes into account the needs of individual users.'
					/>
					<BenifitPoint
						icon='/images/web3/dashboard.svg'
						title='Browsing more efficiently'
						description='When using the internet search engines, finding the best result could be tiresome. However, over the years, there has been an improvement in finding semantically relevant results based on the search context and user metadata. This leads to a more convenient web browsing experience while helping everyone find exactly the information they need. Web 2.0 has introduced a social tagging system, but it can be easily manipulated. Thanks to smarter algorithms, the manipulated results can be filtered by artificial intelligence.'
					/>
					<BenifitPoint
						icon='/images/web3/message.svg'
						title='Improved Advertising and Marketing'
						description="Nobody likes being bombarded with online advertising. However, if the advertisements are relevant to your interests and interests, they may be useful rather than annoying. The 3.0 network aims to improve the quality of displayed advertisements through the use of artificial intelligence systems and targeting advertisements to a specific group of recipients, based on the consumer's data."
					/>
					<BenifitPoint
						icon='/images/web3/contact.svg'
						title='Better customer service'
						description='For websites and applications, efficient customer service is the key to a happy user. However, due to the enormous cost, many successful web services are unable to adequately scale their customer support. The use of smarter chatbots that can talk to multiple customers at once will allow users to enjoy better customer service.'
					/>
				</div>
			</div>
		</section>
	);
};

export default Web3Better;

export const BenifitPoint = ({ icon, title, description }) => {
	return (
		<div
			className='max-w-[950px]  rounded-lg shadow-inner mx-auto p-4 mt-[30px] border-gradient-green'
			style={{
				backdropFilter: 'blur(89.0698px)',
			}}
		>
			<div className='mt-[30px] md:mt-[10px] flex md:flex-col md:items-center gap-[20px]'>
				{/* 1)left icon section */}
				<div className=' w-[90px] h-[90px]   '>
					<div className='w-[80px] h-[80px]  rounded-full backdrop-blur-[250px] bg-[rgba(255, 255, 255, 0.05)] shadow-inner shadow-[rgba(19,104,76,0.69)] opacity-100 flex items-center justify-center '>
						<img
							src={icon}
							alt='target'
							className='w-[40px] h-[40px]  '
						/>
					</div>
				</div>
				{/* Right content */}
				<div className='right flex-1 md:text-center'>
					<h3 className='font-poppins font-bold text-[25px] leading-[110%] tracking-[-0.03rem]'>
						{title}
					</h3>
					<p className='paragraph mt-[15px]'>{description}</p>
				</div>
			</div>
		</div>
	);
};
