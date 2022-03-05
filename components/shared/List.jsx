const List = ({ text }) => {
	return (
		<li className='flex  gap-2.5'>
			<div className='w-[10px] h-[10px] mt-2.5'>
				<div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#02FE85] to-[#02FED1]'></div>
			</div>

			<p className='paragraph text-[22px] md:text-[16px]'>{text}</p>
		</li>
	);
};

export default List;
