import Nav from "../components/nav";
import Head from "next/head";

export default function Services() {
	return (
		<div>
			<Head>
				<title>Services</title>
				<link rel="icon" href="/favicon.ico" />

				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
					crossorigin="anonymous"
				/>
			</Head>
			<Nav />
			<h1>Services</h1>
		</div>
	);
}
