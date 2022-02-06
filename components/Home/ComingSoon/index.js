import TypeAnimation from 'react-type-animation';

function ComingSoon() {
	return (
		<div className='typeAnimation'>
			<TypeAnimation
				cursor={false}
				sequence={['Coming soon...', 1200, '']}
				wrapper='p'
			/>
		</div>
	);
}

export default ComingSoon;
