import TypeAnimation from 'react-type-animation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function ComingSoon() {
	const Router = useRouter();
	useEffect(() => {
		const redirectTimeout = setTimeout(() => {
			Router.push('/');

			return () => clearTimeout(redirectTimeout);
		}, 1300);
	}, []);
	return (
		<div className='h-screen grid place-items-center text-6xl select-none font-bold scale-animation md:text-6xl typeAnimation'>
			<TypeAnimation
				cursor={false}
				sequence={['Coming soon...', 1200, '']}
				wrapper='p'
			/>
		</div>
	);
}

export default ComingSoon;
