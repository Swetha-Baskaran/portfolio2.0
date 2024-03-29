import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Projects from "../views/projects/Projects";

export default function ProjectPage() {
	return (
		<div>
			<Head>
				<title>Swetha..{`${"</>"}`}</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.jpg' />
			</Head>
			<main className='main'>
				<Navbar />
				<div className="section">
					<Projects />
					<Footer />
				</div>
			</main>
		</div>
	);
}
// https://jacekjeznach.com/about
