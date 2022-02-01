import Head from 'next/head';
import BlockchainIndustries from '../components/Home/blockchainIndustries';
// import Navbar from '../components/shared/Navbar';
// import Hero from '../components/Home/Hero';
// import About from '../components/home/about';
// import Technologies from '../components/home/technologies';
// import Experience from '../components/Home/experience';
// import Footer from '../components/shared/Footer';
// import AboutTech from '../components/Home/aboutTech';
// import Contact from '../components/Home/contact';
// import LoadingScreen from '../components/Home/loadingScreen';
// import { useState, useEffect } from 'react';
import OurTeam from '../components/Home/ourTeam';
import ServicesSection from '../components/Home/servicesSection';
import Technologies from '../components/home/technologies';

export default function Home() {
	return (
		<div className='overflow-x-hidden'>
			<Head>
				<title>chainhouse.io</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<OurTeam />
				<ServicesSection />
				<BlockchainIndustries />
			</main>
		</div>
	);
}

// const [isLoading, setIsLoading] = useState(true);
// useEffect(() => {
// 	setTimeout(() => {
// 		setIsLoading(false);
// 	}, 1500);
// });
{
	/* {isLoading ? <LoadingScreen /> : <></>} */
}
{
	/* <Navbar />
<Hero />
<Technologies />
<About /> */
}
{
	/* <Footer /> */
}
