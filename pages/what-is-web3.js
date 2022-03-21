import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/Web3/HeroSection';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Experience from '../components/Web3/Experience';
import NetworkDetail from '../components/Web3/Network';
import ContactSection from '../components/Home/contactSection';
import Web3Better from '../components/Web3/Web3Better';
import Advantage from '../components/Web3/Advantage';
import Comparision from '../components/Web3/Comparision';
import Table from '../components/Web3/Table';

const WhatIsWeb3 = () => {
	return (
		<div className='overflow-hidden'>
			<Head>
				<title>What is web3 ?-chainhouse.it</title>
				<meta name='description' content='What is Web 3 details' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Navbar />
				<HeroSection
					breadcrumbText='What is web 3.0?'
					title='What is web3?'
					text='Web3 in context refers to decentralized applications that run on a blockchain.'
				/>
				<Experience />
				<NetworkDetail />
				<Web3Better />
				<Advantage />
				<Comparision />
				<Table />
				<ContactSection />
				<Footer />
			</main>
		</div>
	);
};

export default WhatIsWeb3;
