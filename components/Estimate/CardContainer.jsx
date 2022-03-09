import React from 'react';

const CardContainer = () => {
	return (
		<div className='grid place-items-center relative md:section-wrapper '>
			<img
				src='/images/estimateproject/masking.png'
				alt=''
				className='absolute z-10 object-cover opacity-10 left-0 scale-y-[0.35] mt-20 sm:scale-y-[0] scale-x-[1.2] '
			/>

			<img
				src='/images/estimateproject/bottommasking.png'
				alt=''
				className='absolute z-10 object-cover opacity-20 left-0 mt-[30%] scale-y-[0.5] sm:scale-y-[0] scale-x-[1.2] '
			/>
			<img
				src='/images/estimateproject/centermask.png'
				alt=''
				className='absolute z-10 object-cover opacity-10 mt-10 left-0  scale-y-[0.4] sm:scale-y-[0] scale-x-[1.2] '
			/>

			<img
				src='/images/estimateproject/rightbottommasking.svg'
				alt=''
				className='absolute z-10 object-cover opacity-5 right-0  top-0 scale-y-[0.4] sm:scale-y-[0] scale-x-[1.5] '
			/>

			<div className='px-2 mt-section flex flex-wrap justify-center gap-[36px] relative'>
				<Card
					img='/images/estimateproject/flyingcoin.png'
					paragraph='We will contact you within 24 hours to get to know each
						other better. We will ask additional questions, if
						necessary, and arrange further consultations'
					heading='24 hours'
				/>
				<Card
					img='/images/estimateproject/blockchain.svg'
					paragraph='The first meeting is completely free and without obligation. During joint design workshops, we will prepare for a preliminary design analysis, on the basis of which we will provide a complete offer.'
					heading='Free and non-binding'
				/>
				<Card
					img='/images/estimateproject/nda.svg'
					paragraph='If you want to sign a confidentiality agreement before sending the brief, please contact us.'
					heading='Non-disclosure agreement (NDA)'
				/>
			</div>

			<h3 className=' text-[46px] font-poppins text-center leading-[160%] font-bold mt-10 w-10/12 mx-auto'>
				Check out our work!
			</h3>
		</div>
	);
};

export default CardContainer;

const Card = ({ img, heading, paragraph }) => {
	return (
		<div className='flex flex-col gap-5 sm:w-full w-[363px] h-[342px] rounded-[20px] backdrop-blur-[250px] border-gradient-green px-[30px] pt-[30px] pb-[56px] '>
			<img src={img} alt='coin' className='h-[80px] w-[80px]' />
			<p className='font-poppins font-bold text-2xl leading-[-0.03em '>
				{heading}
			</p>
			<p className='paragraph text-[16px]'>{paragraph}</p>
		</div>
	);
};
