function AboutHero() {
	return (
		<div className='px-48 pt-48 relative md:py-24 md:px-0'>
			<div className='relative flex'>
				<img
					src='/images/about-text.svg'
					className='absolute bottom-3 z-10 2xl:scale-75 xl:top-1/2 '
				/>
				<div className='h-8 border bg-[#0F0F0F] z-0 w-3/4 -translate-x-96 md:hidden xl:hidden'></div>
			</div>
		</div>
	);
}

function TeamMember(props) {
	return (
		<div className='flex flex-col items-center justify-start w-1/4 py-12 '>
			<div className='relative w-[320px] h-[320px]'>
				<img className='w-full h-full absolute' src={props.imageUrl} />
			</div>
			<span className='text-[#9945FF] font-light'>{props.role}</span>
			<span className='text-white text-2xl font-light md:w-48 md:text-center'>
				{props.fullname}
			</span>
		</div>
	);
}

export default function About() {
	return (
		<>
			<AboutHero />
			<div className='w-full flex flex-col justify-start'>
				<div className='flex w-full px-48 py-32 justify-around items-center flex-row md:py-16 md:px-5 md:flex-col '>
					<div className=' text-white block w-1/2 text-lg text-justify md:text-xl md:w-full'>
						View Player Transactions, their items and NFTs. Take
						pride in your game collection and collect them. Vote for
						video games and leave comments under players and
						profiles! Follow infuencers and friends. View Player
						Transactions, their items and NFTs. Take pride in your
						game collection and collect them.
					</div>
					<div className='w-1/2 h-max text-red-400'></div>
				</div>
				<div className='flex w-full flex-col px-48 items-start py-32 md:px-5 md:py-16'>
					<span className='w-1/2 h-32 text-white block text-4xl font-light relative'>
						Tech <span className='text-[#9945FF] '>stack</span>
						<div className='absolute top-12 left-0 bg-[#ffffff] h-[1px] w-[150px]'></div>
					</span>
					<div className='w-max h-max md:w-full'>
						<img src='/images/tech-stack.png' />
					</div>
				</div>
				<div className='flex w-full flex-col px-48 items-start py-32 md:px-5 md:py-16'>
					<span className='w-1/2 h-32 text-white block text-4xl font-light relative md:text-3xl '>
						Meet our <span className='text-[#9945FF] '>team</span>
						<div className='absolute top-12 left-0 bg-[#ffffff] h-[1px] w-[222px]'></div>
					</span>
					<div className='flex w-full flex-row h-max justify-evenly items-center flex-wrap lg:flex-col'>

						<TeamMember
							imageUrl='/images/binance.png'
							role='Frontend dev'
							fullname='Robert Gryń'
						/>
						<TeamMember
							imageUrl='/images/binance.png'
							role='Frontend dev'
							fullname='Robert Gryń'
						/>
						<TeamMember
							imageUrl='/images/binance.png'
							role='Frontend dev'
							fullname='Robert Gryń'
						/>
						<TeamMember
							imageUrl='/images/binance.png'
							role='Frontend dev'
							fullname='Robert Gryń'
						/>
						<TeamMember
							imageUrl='/images/binance.png'
							role='Frontend dev'
							fullname='Robert Gryń'
						/>
						<TeamMember
							imageUrl='/images/binance.png'
							role='Frontend dev'
							fullname='Robert Gryń'
						/>
						<TeamMember
							imageUrl='/images/binance.png'
							role='Frontend dev'
							fullname='Robert Gryń'
						/>
						<TeamMember
							imageUrl='/images/binance.png'
							role='Frontend dev'
							fullname='Robert Gryń'
						/>
					</div>
				</div>
			</div>
		</>
	);
}
