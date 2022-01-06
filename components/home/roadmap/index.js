import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const roadmapData = [
	{
		text: 'Setting up legal entity',
		isDone: false,
	},
	{
		text: 'Market research',
		isDone: false,
	},
	{
		text: 'Searching for people with inspiration',
		isDone: false,
	},
	{
		text: 'Establishing a software house strategySetting up legal entity',
		isDone: false,
	},
	{
		text: 'Creating marketing strategy',
		isDone: false,
	},
	{
		text: 'Getting acquainted with the first customers',
		isDone: false,
	},
	{
		text: 'Work on the first project',
		isDone: true,
	},
];

function RoadmapHero() {
	return (
		<div className='px-72 py-48 h-screen relative'>
			<img
				src='/images/venus-2.png'
				className='absolute left-0 top-0 scale-125 z-10'
			/>
			<div className='py-40 relative flex justify-center'>
				{/* change to font 20xl  */}
				{/* <p className='text-white text-9xl font-bold '>Roadmap</p> */}
				<img
					src='/images/Roadmap-2.svg'
					className='absolute top-10 z-20'
				/>
				<div className='h-10 border bg-[#0F0F0F] z-0 w-full'></div>
			</div>
		</div>
	);
}

function RoadmapList() {
	const refresh = useRef(null);
	console.log(refresh.current);
	useEffect(() => {});
	return (
		<div className='px-72 py-48 flex relative w-full justify-end'>
			<p className='rotate-90 -left-80 absolute font-bold text-25xl textStrokeShadowBlack text-[#0f0f0f]'>
				2022
			</p>
			<div className='border-t-2 w-400 flex justify-center relative w-750px'>
				<p className='textStrokeShadowColor font-black text-15xl text-[#0f0f0f] absolute -top-64 -left-28'>
					Q1
				</p>
				<ul className='pt-16'>
					{roadmapData.map(({ text, isDone }) => {
						return (
							<div className='flex py-6 items-center gap-8'>
								{!isDone ? (
									<img
										src='/images/refresh.png'
										className='w-6 h-6'
										id='refreshIcon'
									/>
								) : (
									<img
										src='/images/done.png'
										className='w-6 h-6'
									/>
								)}
								<li className='text-white text-lg font-light relative'>
									{text}
									<hr className='absolute w-full left-5 -bottom-3 bg-[#fff]'></hr>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default function Roadmap() {
	return (
		<div>
			<RoadmapHero />
			<RoadmapList />
		</div>
	);
}
