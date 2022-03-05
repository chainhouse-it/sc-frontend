import React from 'react';
import Title from '../shared/Title';
import styled from 'styled-components';

const FlexContainer = styled.div``;

const Advantage = () => {
	return (
		<div className='section-wrapper mt-section '>
			<div className='heading text-center'>
				<Title text='Advantages' />
				<h3 className='primary-heading'>Advantages of web3</h3>
			</div>

			<FlexContainer className='flex flex-wrap gap-8 justify-center mt-[50px]'>
				<Card
					icon='/images/web3/photo.png'
					title="Anyone on the network has permissions to use the service -
					or in other words, permissions aren't required."
				/>
				<Card
					title='No one can block you or deny you access to the service.'
					icon='/images/web3/test.png'
				/>
				<Card
					title='Payments are made using a native token, you can program virtually anything.'
					icon='/images/web3/todo.png'
				/>
			</FlexContainer>
		</div>
	);
};

export default Advantage;

export const Card = ({ icon, title }) => {
	return (
		<div className='md:w-full w-[340px] max-w-[370px] backdrop-blur-[89.0698px] py-[30px] px-[40px] text-center rounded-lg border-gradient-green'>
			<div className='flex flex-col items-center'>
				<div className='w-[70px] h-[70px] rounded-full backdrop-blur-[250px] bg-[rgba(255, 255, 255, 0.05)] shadow-inner shadow-[rgba(19,104,76,0.69)] opacity-100 flex items-center justify-center'>
					<img src={icon} alt='' className='w-[50px] h-[50px] ' />
				</div>

				<p className='paragraph mt-[20px] text-white'>{title}</p>
			</div>
		</div>
	);
};
