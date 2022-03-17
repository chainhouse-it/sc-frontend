import React from 'react';
import Title from '../shared/Title';

const Process = () => {
	return (
		<div className='section-wrapper mt-section'>
			<div className='text-center'>
				<Title text='PROCESS' />
				<h3 className='primary-heading'>Our process</h3>
			</div>
			<div className='mt-[10px] grid grid-cols-3  md:grid-cols-1 gap-[50px] place-items-center '>
				<div>
					<p className='paragraph text-center mb-[20px] text-[28px] font-bold font-poppins'>
						Product Backlog
					</p>
					<img
						src='\images\howWework\oneprocess.png'
						alt='process one'
					/>
				</div>

				<div className='mt-[200px] md:mt-0'>
					<img
						src='\images\howWework\secondprocess.png'
						alt='process two'
					/>
					<p className='paragraph text-center my-[20px] text-[28px] font-bold font-poppins'>
						Sprint
					</p>
				</div>

				<div>
					<p className='paragraph text-center my-[20px] text-[28px] font-bold font-poppins'>
						Sprint Increment Delivered
					</p>
					<img
						src='\images\howWework\threeprocess.png'
						alt='process three'
					/>
				</div>
			</div>
		</div>
	);
};

export default Process;
