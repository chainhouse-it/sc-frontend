function Title({ text }) {
	return (
		<p className='text-xl bg-clip-text text-transparent bg-gradient-to-br from-[#02FE85] to-[#02FED1] font-bold font-[Poppins] sm:text-sm'>
			{text.toUpperCase()}
		</p>
	);
}

export default Title;
