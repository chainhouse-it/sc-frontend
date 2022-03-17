import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import {
	Challenge,
	Feature,
	TalkComponent,
	TrustedCompany,
} from '../components/CaseStudies';
import ImageGroup from '../components/CaseStudies/ImageGroup';
import LoadingScreen from '../components/Home/loadingScreen';
import Footer from '../components/shared/Footer';

import Navbar from '../components/shared/Navbar';
import HeroSection from '../components/Web3/HeroSection';

const CaseStudies = () => {
	const [active, setActive] = useState(true);

	useEffect(() => {
		const loadingTimer = setTimeout(() => {
			setActive(false);
		}, 1500);

		return () => clearTimeout(loadingTimer);
	}, []);

	return (
		<div className='overflow-hidden'>
			<Head>
				<title>Case Studies-chainhouse.it</title>
				<meta
					name='description'
					content='Case Studies of projectin Chaininhouse.it'
				/>
			</Head>

			<main>
				{active ? (
					<LoadingScreen />
				) : (
					<>
						<Navbar />
						<HeroSection
							breadcrumbText='Estimate the project'
							title='Metaverse case study'
							text='Web2 is an internet dominated by companies that provide services in exchange for our personal data.'
						/>
						<TrustedCompany />
						<Challenge />
						{/* Image section */}
						<img
							src='/images/caseStudies/fullimage.svg'
							alt='full image'
							className=' w-[100vw] max-width mt-[50px] max-h-[700px]'
						/>
						<Feature />
						<ImageGroup />
						<TalkComponent />
						<Footer />
					</>
				)}
			</main>
		</div>
	);
};

export default CaseStudies;
