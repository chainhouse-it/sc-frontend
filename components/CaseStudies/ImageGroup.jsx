import React from 'react';
import { Flex } from '../StyleComponentLayout';

const ImageGroup = () => {
	return (
		<div className='section-wrapper mt-section'>
			<Flex className='flex lg:flex-col flex-row gap-[30px]'>
				<div className='left flex-[0.6] '>
					<img
						src='\images\caseStudies\imggroup\largechart.svg'
						alt='Large Chart'
					/>
					<div className='mt-[30px] flex  gap-[30px] flex-wrap justify-start 2xl:justify-center w-full'>
						<img
							src='images\caseStudies\imggroup\smallchart.svg'
							alt='Small chart'
							className='w-[250px] h-auto'
						/>
						<img
							src='images\caseStudies\imggroup\smallnewclient.png'
							alt='Small chart'
							className='w-[250px] h-auto'
						/>
						<img
							src='images\caseStudies\imggroup\Icon.png'
							alt='FingerPrint'
							className='w-[90px] h-auto'
						/>
					</div>
				</div>
				<div className='right flex-[0.4] flex flex-col gap-[30px]'>
					<img
						src='\images\caseStudies\imggroup\rightearning.png'
						alt='Right Earning Image'
					/>
					<img
						src='\images\caseStudies\imggroup\mediumchart.png'
						alt='Right medium chart'
					/>
				</div>
			</Flex>
		</div>
	);
};

export default ImageGroup;
