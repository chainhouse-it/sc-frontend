import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if (location.href.startsWith('http://')) {
			location.href = location.href.replace('http://', 'https://');
		}
	}, []);
	return <Component {...pageProps} />;
}

export default MyApp;
