import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const FlexRow = styled.div``;
const LeftFlexCol = styled.div``;
const RightFlexCol = styled.div``;

const CheckOurWork = () => {
	return (
		<FlexRow className='section-wrapper mt-section flex lg:flex-col flex-row gap-[60px] relative '>
			<LeftFlexCol className='flex flex-col gap-6 flex-1'>
				<Card
					image='/images/estimateproject/clock.svg'
					heading='24 hours'
					text='We will contact you within the next 24 hours to set a date for a meeting.'
				/>
				<Card
					image='/images/estimateproject/smile.svg'
					heading='Free'
					text='The first meeting is completely free of charge and doesn’t obligate you in any way.'
				/>

				<Card
					image='/images/estimateproject/pen.svg'
					heading='NDA'
					text='If you need non-disclosure agreement before sharing the brief go here.'
				/>
				<img
					src='/images/estimateproject/bottomline.png'
					alt='Bottom line'
					className='absolute bottom-[-140px] left-0 lg:hidden w-[320px]'
				/>
				<img
					src='/images/estimateproject/top.svg'
					alt='Bottom line'
					className='absolute top-[-140px] right-0 lg:hidden w-[320px]'
				/>
			</LeftFlexCol>

			<RightFlexCol className='flex-1 flex flex-col z-50'>
				<ContactForm />
			</RightFlexCol>
		</FlexRow>
	);
};

export default CheckOurWork;

const Card = ({ image, heading, text }) => {
	return (
		<div className='p-[50px] md:p-10 flex gap-[34px] border-gradient-white  z-50'>
			<img src={image} alt={heading} />
			<div className='space-y-3'>
				<h3 className='font-poppins font-bold paragraph text-[25px]'>
					{heading}
				</h3>
				<p className='paragraph font-poppins'>{text}</p>
			</div>
		</div>
	);
};
