import Head from 'next/head';
// import Navbar from '../components/shared/Navbar';
// import Hero from '../components/Home/Hero';
import About from '../components/Home/howWeWork';
import Technologies from '../components/home/technologies';
import Experience from '../components/Home/experience';
// import Footer from '../components/shared/Footer';
// import AboutTech from '../components/Home/aboutTech';
// import Contact from '../components/Home/contact';
// import LoadingScreen from '../components/Home/loadingScreen';
// import { useState, useEffect } from 'react';
import OurTeam from '../components/Home/ourTeam';
import ServicesSection from '../components/Home/servicesSection';

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
				<Technologies />
				<About/>
				<Experience/>
				<OurTeam />
				<ServicesSection />
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
