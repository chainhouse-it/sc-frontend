import React, { useState } from 'react';

const ContactForm = () => {
	const [query, setQuery] = useState({
		first: '',
		last: '',
		email: '',
		message: '',
		file: '',
	});

	const handleChange = (e) => {
		setQuery({ ...query, [e.target.name]: e.target.value });
	};

	const handleFileChange = (e) => {
		setQuery((prevState) => ({
			...prevState,
			file: e.target.files[0],
		}));
		console.log(e.target.files[0]);
	};
	return (
		<div className=' border-gradient-greenSmall'>
			<h3 className=' p-[46px] font-poppins font-bold bg-[rgba(226, 227, 232, 0.02)] backdrop-blur-[250px] rounded-t-[10px] rounded-b-[10px] border-b-2 border-gray-700 text-[30px] leading-[117.7%] tracking-[-0.03em] text-center'>
				Let's estimate your project!
			</h3>

			<form action='' className='text-black  p-[46px]'>
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
					className='input'
				/>

				<input
					type='email'
					value={query.email}
					name='email'
					onChange={handleChange}
					className='input'
				/>
				{/* <input
					type='file'
					name='file'
					onChange={handleFileChange}
					className='input'
				/> */}

				<textarea
					value={query.message}
					onChange={handleChange}
					name='message'
					id=''
					cols={30}
					rows={10}
					className='input'
					placeholder='Tell us about yourself!'
				/>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default ContactForm;
