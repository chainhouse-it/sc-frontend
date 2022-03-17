import React from 'react';

const Challenge = () => {
	return (
		<>
			<div className='max-w-[2000px] grid place-items-center relative'>
				<img
					src='/images/caseStudies/background.svg'
					alt='Background'
					className='absolute scale-x-110 mt-[40%] scale-y-90 md:hidden '
				/>
				<div className='flex lg:flex-col flex-row gap-[80px] section-wrapper mt-section'>
					<div className='left'>
						<p className='green-heading'>Challenge</p>
						<h3 className='primary-heading mt-[14px]'>
							The Challenge
						</h3>
						<div className='mt-[30px] space-y-[15px]'>
							<p className='paragraph '>
								The Torus project aims at combining the
								cryptocurrency industry and renewable energy
								sources. They came up with an idea of a system ,
								that allows users to participate in renewable
								energy investments.
							</p>

							<p className='paragraph'>
								A user who invests in a new cryptocurrency will
								be able to collect a dividend as well as
								actively participate in voting on the company's
								operations. The weight of his voice and the
								amount of the dividend will depend on the size
								of his investment.
							</p>
							<p className='paragraph'>
								To deliver this system, they required
								specialistic knowledge and crypto market
								expertise.
							</p>
						</div>
					</div>

					<div className='right w-full mx-auto flex justify-center'>
						<img src='/images/caseStudies/cube.svg' alt='Cube' />
					</div>
				</div>
			</div>
			<div className='flex w-full mt-section  section-wrapper '>
				<div className=' flex-1 text-center py-[50px] border-gradient-box '>
					<p className='paragraph text-[18px]'>Development time</p>
					<p className='primary-heading mt-[15px] text-[40px]'>
						6 months
					</p>
				</div>
				<div className='right flex-1 text-center py-[50px] border-gradient-box'>
					<p className='paragraph  text-[18px]'>Team size</p>
					<p className='primary-heading mt-[15px] text-[40px]'>
						6 people
					</p>
				</div>
			</div>
		</>
	);
};

export default Challenge;
