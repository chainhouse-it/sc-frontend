import React from 'react';
import Navbar from '../components/shared/Navbar';
import Head from 'next/head';
import HeroSection from '../components/Web3/HeroSection';
import Footer from '../components/shared/Footer';
import CardContainer from '../components/howWeWork/CardContainer';
import Process from '../components/howWeWork/Process';
import Company from '../components/howWeWork/Company';

const HowWeWork = () => {
	return (
		<div className='overflow-hidden'>
			<Head>
				<title>How we Work-chainhouse.it</title>
			</Head>

			<main>
				<Navbar />
				<HeroSection
					breadcrumbText='How we work'
					title='How we work'
					text='Web2 is an internet dominated by companies that provide services in exchange for our personal data.'
				/>
				<CardContainer />
				<Process />
				<Company />
				<Footer />
			</main>
		</div>
	);
};

export default HowWeWork;
