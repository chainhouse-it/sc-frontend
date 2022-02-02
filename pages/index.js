import Head from 'next/head';
import BlockchainIndustries from '../components/Home/blockchainIndustries';
import ContactSection from '../components/Home/contactSection';
import Experience from '../components/Home/experience';
import About from '../components/Home/howWeWork';
import OurTeam from '../components/Home/ourTeam';
import ServicesSection from '../components/Home/servicesSection';
import Footer from '../components/shared/Footer';
import Hero from '../oldComponents/Hero';
import Technologies from '../components/Home/Technologies';
import Navbar from '../components/shared/Navbar';

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
				<Navbar />
				<Hero />
				<Technologies />
				<About />
				<Experience />
				<OurTeam />
				<ServicesSection />
				<BlockchainIndustries />
				<ContactSection />
				<Footer />
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
