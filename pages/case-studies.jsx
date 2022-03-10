import Head from 'next/head';
import React from 'react';
import {
	Challenge,
	Feature,
	TalkComponent,
	TrustedCompany,
} from '../components/CaseStudies';

import Navbar from '../components/shared/Navbar';
import HeroSection from '../components/Web3/HeroSection';

const CaseStudies = () => {
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
				<Navbar />
				<HeroSection
					breadcrumbText='Estimate the project'
					title='Metaverse case study'
					text='Web2 is an internet dominated by companies that provide services in exchange for our personal data.'
				/>
				<TrustedCompany />
				<Challenge />
				{/* Image section */}
				<Feature />
				<TalkComponent />
			</main>
		</div>
	);
};

export default CaseStudies;
