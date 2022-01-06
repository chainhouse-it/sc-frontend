import Head from 'next/head';
import Hero from '../components/home/hero';
import Roadmap from '../components/home/roadmap';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
export default function Home() {
	return (
		<div className='bg-[#0F0F0F]'>
			<Head>
				<title>skilled chain frontend</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Navbar />
				<Hero />
				<Roadmap />
				<Footer />
			</main>
		</div>
	);
}
