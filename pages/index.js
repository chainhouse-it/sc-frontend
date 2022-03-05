import Head from 'next/head';
import LoadingScreen from '../components/Home/loadingScreen';
import { useEffect, useState } from 'react';

import Navbar from '../components/shared/Navbar';
import Hero from '../components/Home/Hero';
import Technologies from '../components/Home/technologies';
import About from '../components/Home/howWeWork';
import AboutWeb3 from '../components/Home/aboutWeb3';
import OurTeam from '../components/Home/ourTeam';
import Roadmap from '../components/Home/roadmap';
import ServicesSection from '../components/Home/servicesSection';
import BlockchainIndustries from '../components/Home/blockchainIndustries';
import ContactSection from '../components/Home/contactSection';
import Footer from '../components/shared/Footer';
import WhyUs from '../components/Home/whyUs';
import Experience from '../components/Home/experience';

export default function Home() {
	const [active, setActive] = useState(true);

	useEffect(() => {
		const loadingTimer = setTimeout(() => {
			setActive(false);
		}, 1500);

		return () => clearTimeout(loadingTimer);
	}, []);
	return (
		<div className='overflow-x-hidden'>
			<Head>
				<title>chainhouse.it</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				{active ? (
					<LoadingScreen />
				) : (
					<>
						<Navbar />
						<Hero />
						<Technologies />
						<About />
						<Experience />
						<AboutWeb3 />
						<OurTeam />
						<Roadmap />
						<ServicesSection />
						<WhyUs />
						<BlockchainIndustries />
						<ContactSection />
						<Footer />
					</>
				)}
			</main>
		</div>
	);
}
