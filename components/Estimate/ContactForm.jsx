import React, { useState, useRef } from 'react';

const ContactForm = () => {
	const inputref = useRef();
	const [query, setQuery] = useState({
		first: '',
		last: '',
		email: '',
		message: '',
		file: '',
	});
	const [fileText, setFileText] = useState('No file chosen');

	const handleChange = (e) => {
		setQuery({ ...query, [e.target.name]: e.target.value });
	};

	const handleFileChange = (e) => {
		setQuery((prevState) => ({
			...prevState,
			file: e.target.files[0],
		}));

		if (inputref.current.value) {
			setFileText(
				//eslint-disable-next-line
				inputref.current.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
			);
		} else {
			setFileText('No file chosen');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(query);
	};
	return (
		<div className=' border-gradient-greenSmall'>
			<h3 className=' p-[46px] pb-[30px] font-poppins font-bold bg-[rgba(226, 227, 232, 0.02)] backdrop-blur-[250px] rounded-t-[10px] rounded-b-[10px] border-b-2 border-gray-700 text-[30px] leading-[117.7%] tracking-[-0.03em] text-center'>
				Let's estimate your project!
			</h3>

			<form onSubmit={handleSubmit} className='text-black  p-[46px]'>
				<input
					type='text'
					value={query.first}
					name='first'
					onChange={handleChange}
					placeholder='First Name *'
					className='input'
				/>

				<input
					type='text'
					value={query.last}
					name='last'
					onChange={handleChange}
					placeholder='Last Name *'
					className='input'
				/>

				<input
					type='email'
					value={query.email}
					name='email'
					placeholder='email *'
					onChange={handleChange}
					className='input text-gray-500 bg-gray-500 '
				/>
				<div className='input flex items-center'>
					<input
						type='file'
						onChange={handleFileChange}
						className='hidden'
						ref={inputref}
					/>

					<button
						className='font-poppins font-[400] text-[12px] leading-[21px] bg-[#151421] py-1.5 px-3 rounded-lg'
						onClick={() => inputref.current.click()}
						type='button'
					>
						Choose File
					</button>
					{/* {console.log(inputref)} */}
					<span className='font-poppins text-[14px] leading-[21px] opacity-70 ml-6'>
						{fileText}
					</span>
				</div>

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
					className='text-center w-full h-[49px] mt-[25px]  text-white bg-[#0A0914] font-poppins font-bold p-[20px]  flex items-center justify-center rounded-[40px] border-[1px] border-white'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
