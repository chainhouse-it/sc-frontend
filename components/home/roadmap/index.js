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
		<div className='px-72 py-48 relative md:py-24 md:px-0'>
			<img
				src='/images/venus-2.png'
				className='absolute left-0 top-0 z-9 md:opacity-20 md:h-96'
			/>
			<div className='py-40 relative flex justify-center'>
				<img
					src='/images/Roadmap-2.svg'
					className='absolute bottom-40 z-10 2xl:scale-75 xl:top-1/2 xl:bottom-0 lg:hidden md:hidden'
				/>
				<div className='h-10 border bg-[#0F0F0F] z-0 w-full xl:hidden'></div>
			</div>
		</div>
	);
}

function RoadmapList() {
	// const iconsArr = useRef([]); //arr of refs
	return (
		<div className='px-72 py-48 mt-40 flex relative w-full justify-end xl:justify-center xl:px-24 md:px-12 sm:px-8 md:mt-0'>
			<p className='rotate-90 -left-80 absolute font-bold text-25xl textStrokeShadowBlack text-[#0f0f0f] select-none xl:hidden'>
				2022
			</p>
			<div className='border-t-2 w-[450px] flex justify-center relative md:w-full'>
				<div>
					<p className='textStrokeShadowColor font-black text-15xl text-[#0f0f0f] absolute -top-64 -left-28 select-none md:text-10xl md:-left-2'>
						Q1
					</p>
				</div>
				<ul className='pt-16 md:pt-0'>
					{roadmapData.map(({ text, isDone }) => {
						return (
							<div className='flex py-6 items-center gap-8'>
								{!isDone ? (
									<img
										src='/images/refresh.png'
										className='w-6 h-6'
										// ref={(icon) =>
										// 	iconsArr.current.push(icon)
										// }
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
			<div className='w-full py-48 grid place-items-center px-48 md:px-12 md:py-24'>
				<img src='/images/stay-tuned.svg' className='' />
			</div>
		</div>
	);
}
