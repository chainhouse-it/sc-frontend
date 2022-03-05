import React from 'react';
import Title from './Title';

const Heading = ({ titleText, headingText, children }) => {
	return (
		<div className='heading text-center'>
			<Title text={titleText} />
			<h3 className='primary-heading text-[25px] '>{headingText}</h3>
			{children}
		</div>
	);
};

export default Heading;
