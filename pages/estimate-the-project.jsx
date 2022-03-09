import React from 'react';
import Head from 'next/head';
import Navbar from '../components/shared/Navbar';
import HeroSection from '../components/Web3/HeroSection';
import Footer from '../components/shared/Footer';
import CardContainer from '../components/Estimate/CardContainer';
import CheckOurWork from '../components/Estimate/CheckOurWork';
const EstiamteProject = () => {
	return (
		<div className='overflow-hidden'>
			<Head>
				<title>Estimate-the-project..-chainhouse.it</title>
				<meta
					name='description'
					content='Estimate your project cost in Chaininhouse.it'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />
				<HeroSection
					breadcrumbText='Estimate the project'
					title='Estimate the project'
					text='Web2 is an internet dominated by companies that provide services in exchange for our personal data. '
				/>
				<CardContainer />
				<CheckOurWork />
				<Footer />
			</main>
		</div>
	);
};

export default EstiamteProject;
