import React, { useState } from 'react';

import styled from 'styled-components';
import { Flex } from '../StyleComponentLayout';

const BackgroundImage = styled.div`
	background-image: url('images\caseStudies\talk\leftbottomgraph.png');
	background-position: left;
	background-size: 100%;
`;
const TalkComponent = () => {
	const [query, setQuery] = useState({
		first: '',
		last: '',
		email: '',
		message: '',
	});
	const handleChange = (e) => {
		setQuery({ ...query, [e.target.name]: e.target.value });
	};
	return (
		<BackgroundImage className='section-wrapper mt-section relative '>
			<img
				src='images\caseStudies\talk\leftbottomgraph.png'
				alt='left arrow'
				className='absolute bottom-[0px] left-0 lg:hidden w-[250px] z-10'
			/>

			<img
				src='images\caseStudies\talk\righttop.png'
				alt='left arrow'
				className='absolute top-[40px] right-0 lg:hidden w-[200px]'
			/>

			<Flex className='flex lg:flex-col flex-row gap-[70px] items-center'>
				<div className='left flex-[0.4] z-50  p-4'>
					{/* Left section */}

					<Details
						image='\images\caseStudies\talk\location.svg'
						text='4517 Washington Ave. Manchester, Kentucky 39495'
					/>
					<div className='flex gap-[30px] items-center mb-[40px]'>
						<div className='relative flex items-center w-[45px] h-[45px]'>
							<img
								src='images\caseStudies\talk\ecllipse.png'
								alt='Background'
								className='w-full h-full absolute'
							/>
							<img
								src='\images\caseStudies\talk\viber.svg'
								className='w-[21px] h-[21px] absolute left-[10px] top-[10px]'
							/>
						</div>
						<p className='paragraph font-poppins text-[20px] font-bold'>
							(907) 555-0101
						</p>
					</div>

					<Details
						image='\images\caseStudies\talk\mail.svg'
						text='contact@chainhouse.it'
					/>
				</div>

				<div className='right flex-[0.6] z-50'>
					<h1 className='primary-heading mb-[45px]'>Let's talk</h1>
					<form
						action=''
						className='w-full flex flex-wrap justify-between'
					>
						<input
							type='text'
							placeholder='first Name *'
							className='input  w-1/2'
							value={query.first}
							name='first'
							onChange={handleChange}
							style={{ width: '48%' }}
						/>
						<input
							type='text'
							placeholder='Last Name *'
							className='input '
							style={{ width: '48%' }}
						/>
						<input
							type='email'
							className='input w-full'
							placeholder='Email'
						/>
						<textarea
							value={query.message}
							onChange={handleChange}
							name='message'
							id=''
							cols={30}
							rows={10}
							className='w-full h-[120px] textarea '
							placeholder='Message'
						/>

						<button
							type='submit'
							className='text-center w-[150px] h-[49px] mt-[25px]  text-white bg-[#0A0914] font-poppins font-bold p-[20px]  flex items-center justify-center rounded-[40px] border-[1px] border-white'
						>
							Submit
						</button>
					</form>
				</div>
			</Flex>
		</BackgroundImage>
	);
};

export default TalkComponent;

const Details = ({ image, text }) => {
	return (
		<div className='flex gap-[30px] items-center mb-[40px] z-50'>
			<img src={image} alt={text} />
			<p className='paragraph font-poppins text-[20px] font-bold'>
				{text}
			</p>
		</div>
	);
};
